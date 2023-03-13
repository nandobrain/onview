import { useState } from 'react'
import  Modal  from 'react-modal'
import ArtistBioBox from '../ArtistBioBox/ArtistBioBox'
import EditArtistBio from '../EditArtistBio/EditArtistBio'

import './ArtistBio.css'

export default function ArtistBio() {

  const [name, setName] = useState('')
  const [body, setBody] =useState('')

  const [role, setRole] = useState('user')
    
  const [artistsBioBox, setArtistsBioBox] = useState([ 
      {
          id: 5,
          name: "Bio",
          body: "Body",

           
      }

    

  ])

  function updateArtistBioBox(id, newName, newBody) {
      
      const updatedArtistsBioBox = artistsBioBox.map((artistBioBox) => {
          if (id == artistBioBox.id) {
              return { ...artistBioBox, name: newName, body: newBody}
          }

          return artistBioBox;
          
      })
      setArtistsBioBox(updatedArtistsBioBox)

  }


   
  const showArtistsBioBox = true;


  return (

      <div className="ArtistBio justify-center" >
          {showArtistsBioBox ? (
      <>
        
          <div className="flex flex-wrap ">
              {artistsBioBox.map((artistBioBox) => {
                  const editArtistBio = 
                  <EditArtistBio
                      id={artistBioBox.id}
                      name={artistBioBox.name}
                      body={artistBioBox.body}
                      updateArtistBioBox={updateArtistBioBox} />
                  
                  return (
                  <ArtistBioBox 
                          key={artistBioBox.id}
                          id={artistBioBox.id}
                          name={artistBioBox.name} 
                          body={artistBioBox.body}
                         
                          editArtistBio={editArtistBio} />
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