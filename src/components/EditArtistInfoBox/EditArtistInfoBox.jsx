import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


export default function EditArtistInfoBox(props) {
  const [show, setShow] = useState(false);
  
  const [name, setName] = useState(props.name);
  const [location, setLocation] = useState(props.location);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
  const [email, setEmail] = useState(props.email);
  const [socialMedia, setSocialMedia] = useState(props.socialMedia);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="px-4 py-1 text-sm text-grey-600 font-semibold rounded-full border border-lightgrey-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-black-600 focus:ring-offset-2">
            Edit
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
            handleClose();
            e.preventDefault();
           
            props.updateArtistInfoBox(props.id, name, location, phoneNumber, email, socialMedia);
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
                Location
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="location" 
                type="text" 
                value={location} 
                onChange={(e) => {setLocation(e.target.value)}}
                />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Phone Number
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="phone number" 
                type="text" 
                value={phoneNumber}
                onChange={(e) => {setPhoneNumber(e.target.value)}}
                 />
                
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="email" 
                type="text" 
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                 />
                
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Social Media
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="social media" 
                type="text" 
                value={socialMedia}
                onChange={(e) => {setSocialMedia(e.target.value)}}
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
