import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post/Post";
import './posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    const handleTitleBtn = post => {
        const newPost = [...titles, post];
        setTitles(newPost);
    }

    return (
        <div className="">
            <h2>Posts : {posts.length}</h2>
            <div className="">
                <ul>
                    {
                        titles.map(title =><li key={title.id} style={{backgroundColor:'purple', marginTop:'5px'}}>{title.title}</li>)
                    }
                </ul>
            </div>
            <div className="posts">
                {
                    posts.map(post => <Post handleTitleBtn={handleTitleBtn} key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;