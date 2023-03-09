import {useState} from 'react';
import { Link } from 'react-router-dom';
import ArtistInfo from '../../components/ArtistInfo/ArtistInfo';
import ArtistBio from '../../components/ArtistBio/ArtistBio';
import Bio from '../../components/Bio/Bio';
import Info from '../../components/Info/Info';
import Modal from '../../components/Modal/Modal';
import TextButton from '../../components/TextButton/TextButton';
import './ArtistDetailsPage.css'

import * as artistInfoAPI from '../../utilities/artistInfo-api'


export default function ArtistDetailPage(user, setUser) {
    const [modalIsVisible, setModalIsVisible] = useState(true)
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')
    const [enteredPerson, setEnteredPerson] = useState('')
    const [enteredInfo, setEnteredInfo] = useState('')
    
    

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function showModalHandler() {
        setModalIsVisible(true)
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }

    function authorChangeHandler(event) {
        setEnteredBody(event.target.value)
    }

    function personChangeHandler(event) {
        setEnteredPerson(event.target.value)
    }

    function infoChangeHandler(event) {
        setEnteredInfo(event.target.value)
    }




    return (
        <>
        {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <ArtistBio onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
        </Modal>
        )}
        
        <p></p>
        

        {modalIsVisible &&  (
        <Modal onClose={hideModalHandler}>
          <ArtistInfo onInfoChange={infoChangeHandler} onPersonChange={personChangeHandler}/>
        </Modal>
         )}

        <TextButton onCreatePost={showModalHandler}/>
        <ul className="post">
            <Bio author={enteredAuthor} body={enteredBody} />
        </ul>
        <TextButton onCreatePost={showModalHandler}/>
        <ul className="post">
            <Info person={enteredPerson} info={enteredInfo} />

        </ul>

        <ul>
           
        </ul>

        


        </>
    )
}