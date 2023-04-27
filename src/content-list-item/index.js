import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ContentListItem = ({name, posterImage}) => {

    const imagePath = posterImage !== 'posterthatismissing.jpg' ? require(`../Slices/${posterImage}`) : require(`../Slices/placeholder_for_missing_posters.png`)
    return (
        <div>
            <LazyLoadImage className="flex bg-slate-100"  alt={posterImage} src={imagePath} loading="lazy"></LazyLoadImage>
            <div className="flex text-black dark:text-white">
                <span className="text-sm font-thin text-black dark:text-white pt-2">{name}</span>
            </div>
        </div>
    )
}

export default ContentListItem