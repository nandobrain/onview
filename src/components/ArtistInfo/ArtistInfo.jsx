
import './ArtistInfo.css'

export default function ArtistInfo(props) {
    return (
        <form className="form">
          <p>
            <label htmlFor="name">Artist</label>
            <input type="text" id="name" require onChange={props.onPersonChange}/>
          </p>
          
          <p>
            <label htmlFor="body">info</label>
            <textarea id="body" require rows={3} onChange={props.onInfoChange} />
          </p>
          
        </form>
    )
}