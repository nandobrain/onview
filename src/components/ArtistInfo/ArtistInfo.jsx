
import './ArtistInfo.css'

export default function ArtistInfo({onPersonChange, onInfoChange, onCancel }) {
    return (
        <form className="form">
          <p>
            <label htmlFor="name">Artist</label>
            <input type="text" id="name" require onChange={onPersonChange}/>
          </p>
          
          <p>
            <label htmlFor="body">info</label>
            <textarea id="body" require rows={3} onChange={onInfoChange} />
          </p>
          <p className="actions">
            <button type="button" onClick={onCancel}>Cancel</button>
            <button>submit</button>
          </p>
          
        </form>
    )
}