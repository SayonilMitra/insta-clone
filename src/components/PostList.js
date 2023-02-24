import PostItem from "./PostItem"

function PostList({ postList }) {
    return <ul>
        {postList.map((item, index) => {
            return <li key={index}>
                <PostItem postItem={item} />
            </li>
        })}
    </ul>
}

export default PostList