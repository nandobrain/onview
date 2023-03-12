import { useState } from 'react'
import './ArtistBio.css'

export default function ArtistBio(props) {


  return (

    <div class="max-w-sm mx-auto bg-white  rounded-lg shadow-lg  overflow-hidden">
      <div class="sm:flex sm:items-center px-6 py-4">
        
        <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p class="text-xl leading-tight">{props.about}</p>
          <p class="text-sm leading-tight text-gray-600">{props.aboutInfo}</p>
          <div class="mt-4">
            <button class="text-black-500 hover:text-black hover:#300 border border-grey-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Edit</button>
          </div>
        </div>
      </div>
    </div>

    
  )
  

 

    
  
    
 
}