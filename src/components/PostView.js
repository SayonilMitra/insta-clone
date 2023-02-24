import PostList from './PostList'
import './PostView.css'
import Header from './Header'
import { useEffect, useState } from "react"

function PostView() {

    let [postList, setPostList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/posts', {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        })
            .then(res => res.json())
            .then(data => {
                setPostList(data)
            })
    }, [])

    return <div>
        <Header />
        <PostList postList={postList} />
    </div>
}

export default PostView