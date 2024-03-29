import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import './EditArtist.css'



export default function EditArtist(props) {
  const [show, setShow] = useState(false);
  
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <button  className="px-4 py-1 text-sm text-grey-600 font-semibold rounded-full border border-lightgrey-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-black-600 focus:ring-offset-2" >
      <Link to="/work">Show</Link>
      </button>
     

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="w-full max-w-xs">
        <form onSubmit={(e) => {
             
            e.preventDefault();
           
            props.updateArtist(props.id, name, role);
        }} 
                id="editmodal" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="name" 
                type="text" 
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                 />
                
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Role
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="role" 
                type="text" 
                value={role} 
                onChange={(e) => {setRole(e.target.value)}}
                />
            </div>
     
        </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          
          <button className="bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                  onClick={handleClose}>Close</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                  onClick={handleClose} form="editmodal">Update</button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

