import { useState } from 'react'
import './ArtistBio.css'

export default function ArtistBio({ onAuthorChange, onBodyChange, onCancel }) {
  // const [formData, setFormData] = useState({
  //   author: ""
  //   body: ""

  // })

  // function handleSubmit(event) {
  //   event.preventDefault()
  // }

  // function handleChange(event) {
  //   const {}
  // }


  
    
    return (
        <form className="form"  >
          <p>
            <label htmlFor="name">Artist</label>
            <input type="text" id="name" require onChange={onAuthorChange}/>
          </p>
          
          <p>
            <label htmlFor="body">Bio</label>
            <textarea id="body" require rows={3} onChange={onBodyChange} />
          </p>
          <p className="actions">
            <button type="button" onClick={onCancel}>Cancel</button>
            <button >submit</button>
          </p>
          
        </form>
    )
}