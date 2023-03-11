import { useState } from "react";
import Artist from "../../components/Artist/Artist";
import EditArtist from "../../components/EditArtist/EditArtist";
import { v4 as uuidv4 } from 'uuid';
import './ArtistIndexPage.css';



export default function ArtistsIndexPage() {
    const [role, setRole] = useState('user')
    
    const [artists, setArtists] = useState([ 
        {
            id: 1,
            name: "Fernado",
            role: "photographer",
            img:""
        },

        {
            id: 2,
            name: "Arturo",
            role: "photographer",
            img:""
        },

        {
            id: 3,
            name: "Vanguy",
            role: "photographer",
            img:""
        },

    ])

    function updateArtist(id, newName, newRole) {
        
        const updatedArtists = artists.map((artist) => {
            if (id == artist.id) {
                return { ...artist, name: newName, role: newRole }
            }

            return artist;
            
        })
        setArtists(updatedArtists)

    }
     
    const showArtists = true;


    return (

        <div className="ArtistIndexPage justify-center" >
            {showArtists ? (
        <>
            <input
                text="text"
                onChange={(e) => {
                    console.log(e.target.value)
                    setRole(e.target.value)
                }}
                />
            <div className="flex flex-wrap ">
                {artists.map((artist) => {
                    
                    return (
                    <Artist 
                            key={artist.id}
                            id={artist.id}
                            name={artist.name} 
                            role={artist.role} 
                            img={artist.img}
                            updateArtist={updateArtist} />
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