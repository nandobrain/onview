import React, { useState, useEffect  } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as artistAPI from '../../utilities/artist-api'



export default function AddArtist({newArtist}) {
  const [show, setShow] = useState(false);
  const [artist, setArtist] = useState([ 
    {
        
        name: "",
        role: "",
        img: "" 
    },
 
  ])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function createArtist(e) {
   
    e.preventDefault()
    const artistObj = await artistAPI.addArtist(artist);
    console.log('newArtist', artistObj)
    newArtist(artistObj)
  }

  function handleChange(event) {
    setArtist({
      ...artist, [event.target.name] : event.target.value
    })
  }
  console.log(artist)

  return (
    <>
      <button onClick={handleShow} className="px-4 py-1 text-sm text-grey-600 font-semibold rounded-full border border-lightgrey-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-black-600 focus:ring-offset-2">
            Add Artist
      </button>
     

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="w-full max-w-xs">
        <form onSubmit={createArtist} 
                id="editmodal" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="name" 
                name="name"
                placeholder="name"
                type="text" 
                value={artist.name}
                onChange={(e) => {handleChange(e)}}
                 />
                
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Role
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="role" 
                name="role"
                placeholder="photographer"
                type="text" 
                value={artist.role} 
                onChange={(e) => {handleChange(e)}}
                />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="img">
               Image URL
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="img" 
                name="img"
                placeholder="https://cludinary.com"
                type="text" 
                value={artist.img}
                onChange={(e) => {handleChange(e)}}
                 />
                
            </div>
         
     
        </form>
        
        </div>
        
        </Modal.Body>
        <Modal.Footer>
          
          <button className="bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                  onClick={handleClose}>Close</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                  type='submit'
                  for='editmodal'
                  form="editmodal">Add</button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

