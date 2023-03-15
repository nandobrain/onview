import { useState } from 'react'
import NameBox from '../NameBox/NameBox';
import EditArtistName from '../EditArtistName/EditArtistName';
import './ArtistName.css'

export default function ArtistName() { 
  const [nameBox, setNameBox] = useState([ 
      {   
          name: "Artist Name",
          role: "Role",  
      }
  ])

  function updateNameBox(id, newName, newRole) {
      
      const updatedNameBox = nameBox.map((artist) => {
          if (id == nameBox.id) {
              return { ...nameBox, name: newName, role: newRole }
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
          
          <div className="flex flex-wrap ">
              {nameBox.map((nameBox) => {
                  const editNameBox = 
                  <EditArtistName
                      id={nameBox.id}
                      name={nameBox.name}
                      role={nameBox.role}
                      updateNameBox={updateNameBox} />
                  
                  return (
                  <NameBox 
                          key={nameBox.id}
                          id={nameBox.id}
                          name={nameBox.name} 
                          role={nameBox.role}
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
