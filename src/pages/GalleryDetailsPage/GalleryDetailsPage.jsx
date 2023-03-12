import { checkToken } from '../../utilities/users-service'
import ArtistName from '../../components/ArtistName/ArtistName'
import './GalleryDetailsPage.css'
import ArtistBio from '../../components/ArtistBio/ArtistBio'

export default function GalleryDetailsPage(user, setUser) {

    return (
        

        <div className="body-container">
        <>
        <div className="body-left">
            <ArtistName />





        </div>

        <div className="body-left">
            <ArtistBio />


    
        </div>

        
        
        
        
        
        </>
        </div>
        
        

    )


    
}