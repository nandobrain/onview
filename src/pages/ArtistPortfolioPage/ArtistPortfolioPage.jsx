import {useState} from 'react';
import { Link } from 'react-router-dom';
import ArtistInfo from '../../components/ArtistInfo/ArtistInfo';
import Modal from '../../components/Modal/Modal';
import TextButton from '../../components/TextButton/TextButton';
import Info from '../../components/Info/Info';
import AddImage from '../../components/AddImage/AddImage';

export default function ArtistPortfolioPage(user, setUser) {
    const [modalIsVisible, setModalIsVisible] = useState(true)
    const [enteredPerson, setEnteredPerson] = useState('')
    const [enteredInfo, setEnteredInfo] = useState('')
    
    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function showModalHandler() {
        setModalIsVisible(true)
    }

    function personChangeHandler(event) {
        setEnteredPerson(event.target.value)
    }

    function infoChangeHandler(event) {
        setEnteredInfo(event.target.value)
    }
    
    
    
    
    
    return (
        <>
      
        
        <p></p>
        

        {modalIsVisible &&  (
        <Modal onClose={hideModalHandler}>
          <ArtistInfo onInfoChange={infoChangeHandler} onPersonChange={personChangeHandler}/>
        </Modal>
         )}

        <TextButton onCreatePost={showModalHandler}/>
        <ul className="post">
            <Info person={enteredPerson} info={enteredInfo} />

        </ul>

        <ul>
            
        </ul>

        <AddImage />
        </>
    )
}