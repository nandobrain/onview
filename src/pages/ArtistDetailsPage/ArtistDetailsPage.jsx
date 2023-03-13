import {useState} from 'react';
import { Link } from 'react-router-dom';
import ArtistInfo from '../../components/ArtistInfo/ArtistInfo';
import ArtistBio from '../../components/ArtistBio/ArtistBio';
import ArtistName from '../../components/ArtistName/ArtistName'
import Bio from '../../components/Bio/Bio';
import Info from '../../components/Info/Info';
import Modal from '../../components/Modal/Modal';
import TextButton from '../../components/TextButton/TextButton';
import AddImage from '../../components/AddImage/AddImage';
import Page from '../../components/Page/Page';
import PageName from '../../components/PageName/PageName';
import ArtistPhoto from '../../components/ArtistPhoto/ArtistPhoto';
import './ArtistDetailsPage.css'

import * as artistInfoAPI from '../../utilities/artistInfo-api'


export default function ArtistDetailPage(user, setUser) {
    const [name, setName] = useState('user')





    return (

        <div className="body-container">
        <>
        <div className="body-left">
        <ArtistName />


        <ArtistPhoto />
   


        <ArtistInfo />


        </div>

            


            <div className="body-right">

              


            




            </div>
            
        </>

        </div>
    )

}