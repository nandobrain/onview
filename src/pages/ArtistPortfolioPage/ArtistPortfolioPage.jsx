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
import ArtistName from '../../components/ArtistName/ArtistName';
import PhotoBox from '../../components/PhotoBox/Photobox';
import './ArtistPortfolioPage.css'

export default function ArtistPortfolioPage() {


    return (
        

        <div className="body-container">
        <>
        <div className="body-left">
            <ArtistName />

            <PhotoBox />





        </div>

        <div className="body-right">

            <ArtistInfo />




        </div>

        
        
        
        
        
        </>
        </div>
        
        

    )



}