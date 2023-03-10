import './ArtistBio.css'

export default function PhotoPost(props) {
    
    return (
        <form className="form">
          <p>
            <label htmlFor="name">Image</label>
            <input type="text" id="name" require onChange={props.onImageChange}/>
          </p>
          
          <p>
            <label htmlFor="body">Name</label>
            <textarea id="body" require rows={3} onChange={props.onNameChange} />
          </p>
          
        </form>
    )
}