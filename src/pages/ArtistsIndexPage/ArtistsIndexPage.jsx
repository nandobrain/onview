import { useState, useEffect } from "react";
import Artist from "../../components/Artist/Artist";
import EditArtist from "../../components/EditArtist/EditArtist";
import './ArtistIndexPage.css';
import AddArtist from "../../components/AddArtist/AddArtist";
import * as artistAPI from '../../utilities/artist-api';


export default function ArtistsIndexPage() {
    const [artists, setArtists] = useState([])

    useEffect(function(){
        async function getArtists() {
          const artists = await artistAPI.getArtists()
          setArtists(artists)
          console.log(artists)
        }
        getArtists()
      }, []) 

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