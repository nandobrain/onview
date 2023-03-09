import './PageName.css'

export default function PageName(props) {
    return (
        <form className="form">
          <p>
            <label htmlFor="name">Page Name</label>
            <input type="text" id="name" require onChange={props.onPageChange}/>
          </p>
          
          <p>
            <label htmlFor="body">Artist</label>
            <textarea id="body" require rows={3} onChange={props.onArtistChange} />
          </p>
          
        </form>
    )
}