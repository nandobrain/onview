import {useState} from 'react';
import { Link } from 'react-router-dom';
import ArtistInfo from '../../components/ArtistInfo/ArtistInfo';
import ArtistBio from '../../components/ArtistBio/ArtistBio';
import ArtistName from '../../components/ArtistName/ArtistName'
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

        


        <ArtistBio />


       

              


            




        </div>
            
        </>

        </div>
    )

}