import {ReactComponent as Svg}from './img/verif.svg'

function allInfo({info}){
    return (
        <div className="all-info">
            <div className="logo">
                <img src={info.author.photo} alt="img" className="profilepict"></img>
            </div> 
            <div className="info">
                <p><span className="name illusion-a">{info.author.name}</span></p>
                <Svg className="svgs verifed"/>
                <p className="nickname"><span className="style illusion-a">{info.author.nickname}</span></p>
                <p className="date"><span className="style illusion-a">{info.date}</span></p>
            </div>
        </div>
    )
}
export default allInfo