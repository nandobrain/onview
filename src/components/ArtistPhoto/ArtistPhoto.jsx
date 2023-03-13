import { useState } from "react"
import ArtistPhotoBox from "../ArtistPhotoBox/ArtistPhotoBox"
import EditArtistPhoto from "../EditArtistPhoto/EditArtistPhoto"




export default function ArtistPhoto(setUser, props) {

    const [img, setImg] = useState('user')
    
    const [artistsPhotoBox, setArtistsPhotoBox] = useState([ 
        {
            id: 6,
        
            img: "https://i.imgur.com/ojtreYh.jpg" 
        },


    ])

    function updateArtistPhotoBox(id, newImg) {
        
        const updatedArtistsPhotoBox = artistsPhotoBox.map((artistPhotoBox) => {
            if (id == artistPhotoBox.id) {
                return { ...artistPhotoBox, img: newImg}
            }

            return artistPhotoBox;
            
        })
        setArtistsPhotoBox(updatedArtistsPhotoBox)

    }

  
     
    const showArtistsPhotoBox = true;


    return (

        <div className="ArtistIndexPage justify-center" >
            {showArtistsPhotoBox ? (
        <>
           
            <div className="flex flex-wrap ">
                {artistsPhotoBox.map((artistPhotoBox) => {
                    const editArtistPhotoBox = 
                    <EditArtistPhoto
                        id={artistPhotoBox.id}
                        img={artistPhotoBox.img}
                        updateArtistPhotoBox={updateArtistPhotoBox} />
                    
                    return (
                    <ArtistPhotoBox 
                            key={artistPhotoBox.id}
                            id={artistPhotoBox.id}
                            img={artistPhotoBox.img}
                            editArtistPhotoBox={editArtistPhotoBox}
                            />
                    );        

                })}
            </div>
            

        </>

            ) : (
                <p>Must Login</p>

           )}

        </div>
    )

}