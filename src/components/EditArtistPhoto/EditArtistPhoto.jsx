import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function EditArtistPhoto(props) {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState(props.img);
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
          <Modal.Title>Update Artist Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="w-full max-w-xs">
        <form onSubmit={(e) => {
            
            e.preventDefault();
           
            props.updateArtistPhoto(props.id, img);
        }} 
                id="editmodal" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="img">
               Image URL
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="img" 
                placeholder="https://cludinary.com"
                type="text" 
                value={img}
                onChange={(e) => {setImg(e.target.value)}}
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

