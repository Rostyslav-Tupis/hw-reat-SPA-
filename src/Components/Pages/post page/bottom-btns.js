import {ReactComponent as Comment}from './img/comment.svg'
import {ReactComponent as Download}from './img/download.svg'
import {ReactComponent as Like}from './img/like.svg'
import {ReactComponent as Repeat}from './img/repeat.svg'

import {useState} from "react"

function BottomBtns (props){
    let [repost, setRepost] = useState(props.info.statistic.reposts)
    const [isRepost , setIsRepost] = useState(false),

    onRepeatClick = () =>{
        setRepost((prevNumber =>
            (prevNumber + (isRepost ? -1 : 1))
        ))
        setIsRepost (!isRepost);
    };
    
    const [like, setLike] = useState(props.info.statistic.likes)
    const [isLike , setIsLike] = useState(false),

    onLikeClick = () =>{
        setLike ((prevNumber => 
            (prevNumber + (isLike ? -1 : 1))
            ));
        setIsLike (!isLike);
    }

    return (
        <div className="all_buttons">
            <div className="btn">
                <Comment className="svgs" />
                <span className="btn_stat">{props.info.statistic.comments}</span>
            </div>
            <div className="btn">
                <Repeat className={"" + (isRepost ? "pressedGreen" : "svgs activeBTN")} onClick={onRepeatClick}/>
                <span className="btn_stat">{repost}</span>
            </div>
            <div className="btn">
                <Like className={"" + (isLike ? "pressedRed" : "svgs activeBTN")} onClick={onLikeClick} />
                <span className="btn_stat">{like}</span>
            </div>
            <div className="btn">
                <Download className="svgs"/> 
                <span></span>
            </div>
        </div>
    )
}

export default BottomBtns