import { useEffect } from "react";
import { useState } from "react";

const Posts = () => {
    const [post, setPosts] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div>
            <h2>Posts :</h2>
        </div>
    );
};

export default Posts;