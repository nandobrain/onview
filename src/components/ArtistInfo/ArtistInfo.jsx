import { useState } from "react";
import Artist from "../../components/Artist/Artist";
import EditArtist from "../../components/EditArtist/EditArtist";
import { v4 as uuidv4 } from 'uuid';
import ArtistInfoBox from "../ArtistInfoBox/ArtistInfoBox";
import EditArtistInfoBox from "../EditArtistInfoBox/EditArtistInfoBox";
import AddArtist from "../../components/AddArtist/AddArtist";



export default function ArtistsInfo() {
    const [role, setRole] = useState('user')
    
    const [artistsInfoBox, setArtistsInfoBox] = useState([ 
        {
            id: 1,
            name: "Artist",
            location: "city",
            PhoneNumber: "number",
            email: "email",
            socialMedia: "social media",

            img: "https://i.imgur.com/Yw7BKMX.jpg" 
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
            <input
                text="text"
                onChange={(e) => {
                    console.log(e.target.value)
                    setRole(e.target.value)
                }}
                />
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