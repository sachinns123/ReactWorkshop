import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contentData: [],
    query: '',
    contentDataForQueryString: [],
    contentListingFile: {},
    pageNumber: 1
}

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        nextPageLoad: (state, action) => {
            state.contentData = [...state.contentData, ...action.payload]
        },

        searchQueryUpdate: (state, action) => {
            state.query = action.payload
            state.contentData = []
        },

        fetchQueryResults: (state, action) => {
            state.contentDataForQueryString = []
            action.payload.forEach(element => {
                if (element.name.toLowerCase().includes(state.query.toLowerCase())) {
                    state.contentDataForQueryString.push(element)
                }
            })
            state.contentData = [...state.contentData, ...state.contentDataForQueryString]
        },

        setContentListingFile: (state, action) => {
            try {
                if (require(`../source-files/CONTENTLISTINGPAGE-PAGE${action.payload}.json`)) {
                    state.contentListingFile = require(`../source-files/CONTENTLISTINGPAGE-PAGE${action.payload}.json`)
                }
            }
            catch {
                console.log('No more content listing files')
            }
        },

        nextPageNumber: (state) => {
            console.log('Next Page Number Called')
            state.pageNumber += 1
        },

        resetPageNumber: (state) => {
            state.pageNumber = 1
        }

    }
})

export const { nextPageLoad, searchQueryUpdate, fetchQueryResults, setContentListingFile, nextPageNumber, resetPageNumber } = contentSlice.actions

export default contentSlice.reducer