import React , {useState , useEffect} from 'react'; 
import './style_contact.css'
import BlockContact from '../block_of_contact/block_of_contact'
import all_contacts from '../all_contacts'

function Contacts(){
    const [contacts , setContact] = useState(all_contacts)
    const [search , setSearch] = useState("")
    const [stateMale , setStateMale] = useState(true)
    const [stateFemale , setStateFemale] = useState(true)


    function handleSearchChange(e){
        setSearch(e.target.value)
    }

    useEffect(()=>{
            let filterContacts = all_contacts.filter((elem)=>{
                return Object.values(elem).some((val)=>{            //some() -порветає true/false - якщо elem.value = те що знах в search, тоді some = true і цей елемент повертається в новий масив ,  
                    return val.toLowerCase().includes(search)           //якщо false елемент не проходить перевірку
                }) 
            }) 
            if(!stateFemale){   //коли stateFemale = false тоді пушаться в масив лише чоловіки
                filterContacts = filterContacts.filter((elem)=> elem.gender === "male" || !elem.gender)                
            }
            if(!stateMale){
                filterContacts = filterContacts.filter((elem)=> elem.gender === "female" || !elem.gender)
            }
            setContact(filterContacts)
    },[search , stateMale , stateFemale])

    return (
        <div className='main_container'>
            <form>
                <input 
                type="text"
                onChange={handleSearchChange}
                className='searh_input'
                placeholder='Search'>
                </input>

                <div className='maleCheack'>
                    <label for="male">Male</label>
                    <input type="checkbox" id="male" defaultChecked={stateMale} onChange={() => setStateMale(!stateMale)}></input>
                </div>
                <div className='femaleCheack'>
                    <label for="Female">Female</label>
                    <input type="checkbox" id="female" defaultChecked={stateFemale} onChange={() => setStateFemale(!stateFemale)}></input>
                </div>
            </form>
            <div className='card_holder'>
                {contacts.map((elem , index) =>{
                    return <BlockContact info={elem} key={index}/>
                })}
            </div>
        </div>
    )
}

export default Contacts