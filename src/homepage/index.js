import { useEffect, useState, useRef, useCallback, lazy, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextPageLoad, fetchQueryResults, setContentListingFile, nextPageNumber } from '../reduxStore/slice'
import Header from '../header'
// import ContentListItem from '../content-list-item'
const ContentListItem = lazy(() => import('../content-list-item'))

const Homepage = () => {

    const [loading, setLoading] = useState(true)

    const { contentData, query, contentListingFile, pageNumber } = useSelector(state => state.content)
    const dispatch = useDispatch()

    const observer = useRef()

    const lastItem = useCallback(node => {
        console.log('loading: ', loading)
        if (loading) {
            return
        }
        if (observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver(entries => {
            console.log(entries)
            if (entries[0].isIntersecting) {
                console.log('Last Item Reached')
                setLoading(true)
                dispatch(nextPageNumber())
            }
        })
        if (node) {
            console.log('node called')
            observer.current.observe(node)
        }
    }, [loading])

    useEffect(() => {
        dispatch(setContentListingFile(pageNumber))
    }, [pageNumber])

    useEffect(() => {
        if (Object.keys(contentListingFile).length > 0) {
            if (query) {
                dispatch(fetchQueryResults(contentListingFile?.page['content-items']?.content))
            }
            else {
                dispatch(nextPageLoad(contentListingFile?.page['content-items']?.content))
            }
            setLoading(false)
        }
    }, [contentListingFile])

    return (
        <Suspense fallback={<div>...Loading</div>}>
            <div className='relative w-full z-10'>
                <div className='sticky top-0 left-0 right-0 content-end pt-6 h-18 dark:bg-gray-900' id='header'>
                    <Header />
                </div>
                <div className=''>
                    <ul className='grid grid-flow-row auto-rows-auto grid-cols-3 gap-x-4'>
                        {contentData.length > 0 && contentData.map((item, index) => {
                            if (contentData.length === index + 1) {
                                return (
                                    <div key={index} className='list-item'>
                                        <div ref={lastItem} className="py-4 flex">
                                            <ContentListItem name={item.name} posterImage={item['poster-image']} />
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <div key={index} className='list-item'>
                                    <div className="py-4 flex">
                                        <ContentListItem name={item.name} posterImage={item['poster-image']} />
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Suspense>
    )
}

export default Homepage