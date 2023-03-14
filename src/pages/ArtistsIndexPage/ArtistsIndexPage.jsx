import { useState } from "react";
import Artist from "../../components/Artist/Artist";
import EditArtist from "../../components/EditArtist/EditArtist";
import { v4 as uuidv4 } from 'uuid';
import './ArtistIndexPage.css';
import AddArtist from "../../components/AddArtist/AddArtist";
import { Link } from 'react-router-dom';




export default function ArtistsIndexPage(user, setUser) {
    const [role, setRole] = useState('user')
    
    
    const [artists, setArtists] = useState([ 
        {
            id: 1,
            name: "Fernado",
            role: "photographer",
            img: "https://i.imgur.com/Yw7BKMX.jpg" 
        },

        {
            id: 2,
            name: "Arturo",
            role: "photographer",
            img: "https://i.imgur.com/1M8CWuL.jpg"
        },

        {
            id: 3,
            name: "Mr Dog",
            role: "photographer",
            img: "https://i.imgur.com/aGGmIEd.jpg"
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

    function newArtist(newArtist) {
     
        setArtists([...artists, newArtist])
    }
     
    const showArtists = true;


    return (

        <div className="ArtistIndexPage justify-center" >
            {showArtists ? (
        <>
           
            <div className="flex flex-wrap ">
                {artists.map((artist) => {
                    const editArtist = 
                    <EditArtist
                        id={artist.id}
                        name={artist.name}
                        role={artist.role}
                        updateArtist={updateArtist} />
                    
                    return (
                    <Artist 
                            key={artist.id}
                            id={artist.id}
                            name={artist.name} 
                            role={artist.role} 
                            img={artist.img}
                            editArtist={editArtist} />
                    );        

                })}
            </div>
            <AddArtist  newArtist={newArtist} />

        </>

            ) : (
                <p>Must Login</p>

           )}

        </div>
    )
}