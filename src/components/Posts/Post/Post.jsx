import { useState } from 'react';
import './Post.css'

const Post = ({ post, handleTitleBtn }) => {
    const { body, id } = post;

    const [visitBtn, setVisitBtn] = useState(false);

    const handleVisiteBtn = () => {
        setVisitBtn(!visitBtn)
    }
    return (
        <div className="post" style={{ backgroundColor: visitBtn && 'cadetblue', color: visitBtn && 'black' }}>
            <h3>Post Uniqe Id : {id}</h3>
            <p>Post Description : {body}</p>
            <button onClick={handleVisiteBtn} >{visitBtn ? 'visited' : 'Visit'}</button>
            <button onClick={()=>handleTitleBtn(post)}>Title</button>
        </div>
    );
};

export default Post;