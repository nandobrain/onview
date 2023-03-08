import { useState } from 'react';
import './ArtistInfo.css'

export default function ArtistInfo() {
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
            <label htmlFor="body">Info</label>
            <textarea type="body" id="name" require onChange={changeBodyHandler} />
          </p>
          <p>{enteredBody}</p>
        </form>
    )
}