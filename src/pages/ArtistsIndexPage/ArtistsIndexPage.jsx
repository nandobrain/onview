import { useState } from "react";
import Artist from "../../components/Artist/Artist";
import './ArtistIndexPage.css';



export default function ArtistsIndexPage() {
    const [role, setRole] = useState('user')
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
            <div className="flex flex-wrap">
            <Artist name="Fernando" role="photographer" img="" />
            <Artist name="Arturo" img="" />
            <Artist name="VanGuy" img="" />
            </div>

        </>

            ) : (
                <p>Must Login</p>

           )}

        </div>
    )
}