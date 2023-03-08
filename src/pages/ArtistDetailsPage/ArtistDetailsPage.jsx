import {useState} from 'react';
import { Link } from 'react-router-dom';
import ArtistInfo from '../../components/ArtistInfo/ArtistInfo';
import ArtistBio from '../../components/ArtistBio/ArtistBio';
import Post from '../../components/Post/Post';
import './ArtistDetailsPage.css'

import * as artistInfoAPI from '../../utilities/artistInfo-api'

export default function ArtistDetailPage(user) {
    const [enteredBody, setEnteredBody] = useState('')

    


    return (
        <>
        <ArtistBio />
        <ArtistInfo />
        <ul className="post">
            <Post author="" body={enteredBody}/>
            <Post author="" body="" />

        </ul>


        </>
    )
}