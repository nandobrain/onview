import {useState} from 'react';
import ArtistInfo from '../../components/ArtistInfo/ArtistInfo';
import ArtistBio from '../../components/ArtistBio/ArtistBio';
import ArtistName from '../../components/ArtistName/ArtistName'
import ArtistPhoto from '../../components/ArtistPhoto/ArtistPhoto';
import AddImage from '../../components/AddImage/AddImage';
import './ArtistDetailsPage.css'


export default function ArtistDetailPage(user, setUser) {


    return (

        <div className="body-container">
        <>
        <div className="body-left"> 

        <ArtistName />
        <ArtistPhoto />
        <ArtistInfo />
        <AddImage />

        </div>
        <div className="body-right">

        <ArtistBio />

        </div>    
        </>
        </div>
    )

}