import './PostItem.css'
import { useState, useEffect } from 'react'
import moreIcon from "../assets/more_icon.svg"
import likeIcon from "../assets/heart.png"
import shareIcon from "../assets/share.png"

function PostItem({ postItem }) {

    let img = new Image()
    let [image, setImage] = useState(img)

    useEffect(() => {
        let base64str = postItem.fileData
        let temp = new Image()
        temp.src = base64str
        setImage(base64str)
    }, [])

    return <div className='post'>
        <div className='post-header'>
            <div className='user-name-place'>
                {postItem.username} <br />
                <span className='post-location'>{postItem.location}</span>
            </div>
            <div className='options-menu'>
                <img src={moreIcon} />
            </div>
        </div>
        <div className='post-image'>
            <img src={image} width='400' height='200' alt='posted-image-by-user' />
        </div>
        <div className='post-body'>
            <div className='likes-date'>
                <div className='likes-share'>
                    <img className='likes-icon' src={likeIcon} />
                    <img className='share-icon' src={shareIcon} /> <br />
                    {postItem.likes} likes
                </div>
                <div className='post-date'>
                    {postItem.date}
                </div>
            </div>
            <div className='post-description'>
                {postItem.description}
            </div>
        </div>
    </div>

}

export default PostItem