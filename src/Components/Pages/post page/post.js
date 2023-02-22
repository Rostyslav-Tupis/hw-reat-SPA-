import React from 'react';

import './stylepost.css';
import BottomBtns from './bottom-btns'
import AllInfo  from './all_info'
import postData from './postdata';
import PostBody from './post-body';

function Post(){
    return(
        <div className="container">
                {postData.map((element , index)=>{
                    return (
                        <div className="post-wrapper" key={`post-${index}`}>
                            <React.Fragment>
                                <AllInfo info={element} key={`allinfo-${index}`} /> 
                                <PostBody info={element} key={`postbody-${index}`} />
                                <BottomBtns info={element} key={`bottombtns-${index}`} />
                            </React.Fragment>
                        </div>
                    ) 
                })}
        </div>
    )
}

export default Post;