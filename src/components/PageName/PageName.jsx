import './PageName.css'

export default function PageName({onPageChange, onArtistChange, onCancel}) {
    return (
        <form className="form">
          <p>
            <label htmlFor="name">Page Name</label>
            <input type="text" id="name" require onChange={onPageChange}/>
          </p>
          
          <p>
            <label htmlFor="body">Artist</label>
            <textarea id="body" require rows={3} onChange={onArtistChange} />
          </p>

          <p className="actions">
            <button type="button" onClick={onCancel}>Cancel</button>
            <button>submit</button>
          </p>
          
        </form>
    )
}