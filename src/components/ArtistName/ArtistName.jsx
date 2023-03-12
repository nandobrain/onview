import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import NameBox from '../NameBox/NameBox';
import EditArtistName from '../EditArtistName/EditArtistName';
import './ArtistName.css'

export default function ArtistName(setUser, props) {

  const [name, setName] = useState('user')
    
  const [nameBox, setNameBox] = useState([ 
      {
          id: 4,
          name: "Fernado",
          role: "photographer",
          img: "https://i.imgur.com/Yw7BKMX.jpg" 
      }


  ])

  function updateNameBox(id, newName, ) {
      
      const updatedNameBox = nameBox.map((artist) => {
          if (id == nameBox.id) {
              return { ...artist, name: newName, }
          }

          return nameBox;
          
      })
      setNameBox(updatedNameBox)

  }


   
  const showNameBox = true;


  return (

      <div className="ArtistName justify-center" >
          {showNameBox ? (
      <>
          <input
              text="text"
              onChange={(e) => {
                  console.log(e.target.value)
                  setName(e.target.value)
              }}
              />
          <div className="flex flex-wrap ">
              {nameBox.map((nameBox) => {
                  const editNameBox = 
                  <EditArtistName
                      id={nameBox.id}
                      name={nameBox.name}
                      updateNameBox={updateNameBox} />
                  
                  return (
                  <NameBox 
                          key={nameBox.id}
                          id={nameBox.id}
                          name={nameBox.name} 
                          editNameBox={editNameBox} />
                  );        

              })}
          </div>
          

      </>

          ) : (
              <p>Must Login</p>

         )}

      </div>
  )


 
  

}
