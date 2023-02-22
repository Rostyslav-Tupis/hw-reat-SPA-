import React from 'react'; 
import './style_of_block_contact.css'
import male from './img/male.png'
import female from './img/female.png'
import non from './img/non.png'

function blockContact(props){
    let iconGender;
    iconGender = props.info.gender === "male" ? male : (iconGender = props.info.gender === "female" ? female : non)

    return(
        <div className='card_container'>
            <div className='information'>
                <h3 className='info_of_contact'>{props.info.firstName} {props.info.lastName}</h3>
                <p className='info_number'>{props.info.phone}</p>
            </div>
            <div className='genderInfo'>
                <p className='gender'>Стать:</p>
                <img src={iconGender} alt="gender" width={'20px'} height={'20px'}/>
            </div>
        </div>
    )
}

export default blockContact