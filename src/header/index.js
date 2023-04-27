import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextPageLoad, searchQueryUpdate, fetchQueryResults, setContentListingFile, resetPageNumber } from '../reduxStore/slice'

const Header = () => {

    const [openInputBox, setOpenInputBox] = useState(false)
    
    const backIcon = require('../Slices/Back.png')
    const searchIcon = require('../Slices/search.png')
    const headerImage = require('../Slices/nav_bar.png')

    const { contentListingFile } = useSelector(state => state.content)
    const dispatch = useDispatch()

    const handleClick = () => {
        console.log('clicked')
        dispatch(resetPageNumber())
        setOpenInputBox(!openInputBox)
    }

    const handleChange = (e) => {
        dispatch(resetPageNumber())
        dispatch(searchQueryUpdate(e.target.value))
        dispatch(fetchQueryResults(contentListingFile.page['content-items'].content))
    }
    
    const goBack = () => {
        dispatch(resetPageNumber())
        setOpenInputBox(false)
        dispatch(searchQueryUpdate(''))
        dispatch(setContentListingFile(1))
        dispatch(nextPageLoad(contentListingFile.page['content-items'].content))
    }


    return (
        <div style={{backgroundImage: headerImage}} className='flex justify-between items-center py-2'>
            <div className="flex items-center">
                <div className=''>
                    <img className="w-4 h-4" alt='Back' src={backIcon} onClick={goBack} loading="lazy"></img>
                </div>
                {
                    Object.keys(contentListingFile).length > 0 && 
                    <div className='text-black dark:text-white'>
                    {
                        openInputBox 
                            ? <input className="ml-5 border-2 border-slate-700 bg-white dark:bg-gray-900 h-7 w-72 px-5 pr-16 rounded text-sm" type="text" name="Search" onChange={handleChange} placeholder="Search"/>
                            : <h1 className='text-xl font-extralight ml-5'>{contentListingFile?.page?.title}</h1>
                    }
                    </div>
                }   
            </div> 
                <img className='w-5 h-5 justify-self-end' alt='Search' src={searchIcon} onClick={handleClick}></img>
            
        </div>
    )
}

export default Header