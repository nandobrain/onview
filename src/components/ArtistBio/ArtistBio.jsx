import { useState } from 'react';
import './ArtistBio.css'

export default function ArtistBio(props) {
    const [ enteredBody, setEnteredBody ] = useState('')
   
    function changeBodyHandler(event) {
        setEnteredBody(event.target.value)

    }
    
    
    
    return (
        <form className="form">
          <p>
            <label htmlFor="name">Artist</label>
            <input id="text" require onChange={changeBodyHandler}/>
          </p>
          
          <p>
            <label htmlFor="body">Bio</label>
            <textarea type="body" id="name" require onChange={changeBodyHandler} />
          </p>
          <p>{enteredBody}</p>
        </form>
    )
}