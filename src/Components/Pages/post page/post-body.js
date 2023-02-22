import React from "react";

function PostBody({ info }){
    return(
        <div className="post">
            <div className="content-text">
                <p className="main_post_text">{info.content}</p>
            </div>
            <div className="content-photo">
                <img src={info.image}  alt={info.image} className="addition-photo-to-post" />
            </div>
        </div>
    )
}

export default PostBody