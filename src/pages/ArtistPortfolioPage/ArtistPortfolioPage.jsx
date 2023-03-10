import {useState} from 'react';
import { Link } from 'react-router-dom';
import ArtistInfo from '../../components/ArtistInfo/ArtistInfo';
import Modal from '../../components/Modal/Modal';
import TextButton from '../../components/TextButton/TextButton';
import Info from '../../components/Info/Info';
import AddImage from '../../components/AddImage/AddImage';
import Page from '../../components/Page/Page';
import PageName from '../../components/PageName/PageName';
import Artist from "../../components/Artist/Artist";
import './ArtistPortfolioPage.css'

export default function ArtistPortfolioPage(user, setUser) {


   
    // const [modalIsVisible, setModalIsVisible] = useState(true)
    // const [enteredPerson, setEnteredPerson] = useState('')
    // const [enteredInfo, setEnteredInfo] = useState('')
    // const [enteredPage, setEnteredPage] = useState('')
    // const [enteredArtist, setEnteredArtist] = useState('')
    
    // function hideModalHandler() {
    //     setModalIsVisible(false);
    // }

    // function showModalHandler() {
    //     setModalIsVisible(true)
    // }

    // function personChangeHandler(event) {
    //     setEnteredPerson(event.target.value)
    // }

    // function infoChangeHandler(event) {
    //     setEnteredInfo(event.target.value)
    // }

    // function pageChangeHandler(event) {
    //     setEnteredPage(event.target.value)
    // }

    // function artistChangeHandler(event) {
    //     setEnteredArtist(event.target.value)
    // }
    
    
    
    
    
    // return (
    //     <>
    //         <div className="body-container">

    //             <div className="body-left">
    //                 {modalIsVisible && (
    //                 <Modal onClose={hideModalHandler}>
    //                 <PageName onPageChange={pageChangeHandler} onArtistChange={artistChangeHandler}/>
    //                 </Modal>
    //                 )}
    //                 <TextButton onCreatePost={showModalHandler}/>
    //                 <ul className="post">
    //                     <Page author={enteredPage} body={enteredArtist} />
    //                 </ul>
    //                 <AddImage />


    //             </div>
            
    //             <p></p>
    //             <div className="body-right">
    //                 <div><AddImage /></div>
                    

    //                 {modalIsVisible &&  (
    //                 <Modal onClose={hideModalHandler}>
    //                 <ArtistInfo onInfoChange={infoChangeHandler} onPersonChange={personChangeHandler}/>
    //                 </Modal>
    //                 )}

    //                 <TextButton onCreatePost={showModalHandler}/>
    //                 <ul className="post">
    //                     <Info person={enteredPerson} info={enteredInfo} />
                    
    //                 </ul>
                    
    //             </div>

    //             <ul>
                    
    //             </ul>

                
        

    //         </div>

    //     </>
    // )
}