import { useState } from "react";
import ArtistInfoBox from "../ArtistInfoBox/ArtistInfoBox";
import EditArtistInfoBox from "../EditArtistInfoBox/EditArtistInfoBox";

export default function ArtistsInfo() {
    const [artistsInfoBox, setArtistsInfoBox] = useState([ 
        { 
            name: "Artist",
            location: "city",
            PhoneNumber: "number",
            email: "email",
            socialMedia: "social media",     
        },
    ])

    function updateArtistInfoBox(id, newName, newLocation, newPhoneNumber, newEmail, newSocialMedia) {
        
        const updatedArtistsInfoBox = artistsInfoBox.map((artistInfoBox) => {
            if (id == artistInfoBox.id) {
                return { ...artistInfoBox, name: newName, location: newLocation, phoneNumber: newPhoneNumber, email: newEmail, socialMedia: newSocialMedia }
            }
            return artistInfoBox;  
        })
        setArtistsInfoBox(updatedArtistsInfoBox)

    }

    const showArtistsInfoBox = true;

    return (

        <div className="ArtistInfo justify-center" >
            {showArtistsInfoBox ? (
        <>
          
            <div className="flex flex-wrap ">
                {artistsInfoBox.map((artistInfoBox) => {
                    const editArtistInfoBox = 
                    <EditArtistInfoBox
                        id={artistInfoBox.id}
                        
                        name={artistInfoBox.name}
                        location={artistInfoBox.location}
                        phoneNumber={artistInfoBox.phoneNumber}
                        email={artistInfoBox.email}
                        socialMedia={artistInfoBox.socialMedia}
                        updateArtistInfoBox={updateArtistInfoBox} />
                    
                    return (
                    <ArtistInfoBox 
                            key={artistInfoBox.id}
                            id={artistInfoBox.id}
                            name={artistInfoBox.name} 
                            location={artistInfoBox.location}
                            phoneNumber={artistInfoBox.phoneNumber}
                            email={artistInfoBox.email}
                            socialMedia={artistInfoBox.socialMedia}
                            editArtistInfoBox={editArtistInfoBox} />
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