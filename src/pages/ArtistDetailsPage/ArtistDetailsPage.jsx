import {useState} from 'react';
import { Link } from 'react-router-dom';
import ArtistInfo from '../../components/ArtistInfo/ArtistInfo';
import ArtistBio from '../../components/ArtistBio/ArtistBio';
import Bio from '../../components/Bio/Bio';
import Info from '../../components/Info/Info';
import Modal from '../../components/Modal/Modal';
import TextButton from '../../components/TextButton/TextButton';
import AddImage from '../../components/AddImage/AddImage';
import Page from '../../components/Page/Page';
import PageName from '../../components/PageName/PageName';
import './ArtistDetailsPage.css'

import * as artistInfoAPI from '../../utilities/artistInfo-api'


export default function ArtistDetailPage(user, setUser) {
    const [modalIsVisible, setModalIsVisible] = useState(true)
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')
    const [enteredPerson, setEnteredPerson] = useState('')
    const [enteredInfo, setEnteredInfo] = useState('')
    const [enteredPage, setEnteredPage] = useState('')
    const [enteredArtist, setEnteredArtist] = useState('')

    
    

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

    function pageChangeHandler(event) {
        setEnteredPage(event.target.value)
    }

    function artistChangeHandler(event) {
        setEnteredArtist(event.target.value)
    }
  





    return (

       
        <>
        <div className="body-container">

            <div className="body-left">
                {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                <PageName 
                    onPageChange={pageChangeHandler} 
                    onArtistChange={artistChangeHandler}
                    onCancel={hideModalHandler}/>
                </Modal>
                )}
                <TextButton onCreatePost={showModalHandler}/>
                <ul className="post">
                    <Page author={enteredPage} body={enteredArtist} />
                </ul>
                <AddImage />

                {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                <ArtistBio 
                    onBodyChange={bodyChangeHandler} 
                    onAuthorChange={authorChangeHandler}
                    onCancel={hideModalHandler}/>
                </Modal>
                )}
                <TextButton onCreatePost={showModalHandler}/>
                <ul className="post">
                    <Bio author={enteredAuthor} body={enteredBody} />
                </ul>

            </div>
            <p></p>
            <div className="body-right">

                {modalIsVisible &&  (
                <Modal onClose={hideModalHandler}>
                <ArtistInfo 
                    onInfoChange={infoChangeHandler} 
                    onPersonChange={personChangeHandler}
                    onCancel={hideModalHandler}/>
                </Modal>
                )}

                
                <TextButton onCreatePost={showModalHandler}/>
                <ul className="post">
                    <Info person={enteredPerson} info={enteredInfo} />

                </ul>
            </div>

            <ul>
            
            </ul>

        </div>


        </>
    )
}