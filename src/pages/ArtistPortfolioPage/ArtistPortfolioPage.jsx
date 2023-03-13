import {useState} from 'react';
import { Link } from 'react-router-dom';
import ArtistInfo from '../../components/ArtistInfo/ArtistInfo';
import ArtistName from '../../components/ArtistName/ArtistName';
import ArtistPhoto from '../../components/ArtistPhoto/ArtistPhoto';
import AddImage from '../../components/AddImage/AddImage';
import './ArtistPortfolioPage.css'

export default function ArtistPortfolioPage(user, setUser) {


 
   


    return (
        

        <div className="body-container">
        <>
        <div className="body-left">
            <ArtistName />
            <AddImage />


        </div>

        <div className="body-right">
            <ArtistPhoto />

            <ArtistInfo />

        </div>

        </>
        </div>
        

    )



}