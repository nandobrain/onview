import {useState} from 'react';
import { Link } from 'react-router-dom';
import ArtistInfo from '../../components/ArtistInfo/ArtistInfo';
import ArtistBio from '../../components/ArtistBio/ArtistBio';
import ArtistName from '../../components/ArtistName/ArtistName'
import ArtistPhoto from '../../components/ArtistPhoto/ArtistPhoto';
import AddImage from '../../components/AddImage/AddImage';
import './ArtistDetailsPage.css'




export default function ArtistDetailPage(user, setUser) {
    const [name, setName] = useState('user')
    const [image, setImage] = useState();
    const [data, setData] = useState('')





    return (

        <div className="body-container">
        <>
        <div className="body-left">

        <img src={Image} alt="add image" />    
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