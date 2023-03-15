import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import ArtistInfo from '../../components/ArtistInfo/ArtistInfo';
import ArtistName from '../../components/ArtistName/ArtistName';
import AddImage from '../../components/AddImage/AddImage';

import './ArtistPortfolioPage.css'

export default function ArtistPortfolioPage() {
    const [images, setImages] = useState([])
    const [ user, setUser ] = useState()
  
    function addImage(img) {
        setImages([...images, img])
    }

    return (
        <div className="body-container">
        <>
        <Routes>
            
            <Route path="/work" element={<ArtistPortfolioPage user={user} setUser={setUser} />} />
            
        </Routes>
        
        <div className="body-left">

            <ArtistName />
            {
                images.map(image => <img src={image.image} />)
            }
            <AddImage addImage={addImage}/>
        </div>

        <div className="body-right">
            
            <ArtistInfo />

        </div>

        </>
        </div>
        

    )



}