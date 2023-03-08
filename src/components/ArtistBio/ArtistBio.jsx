
import './ArtistBio.css'

export default function ArtistBio(props) {
    
    return (
        <form className="form">
          <p>
            <label htmlFor="name">Artist</label>
            <input type="text" id="name" require onChange={props.onAuthorChange}/>
          </p>
          
          <p>
            <label htmlFor="body">Bio</label>
            <textarea id="body" require rows={3} onChange={props.onBodyChange} />
          </p>
          
        </form>
    )
}