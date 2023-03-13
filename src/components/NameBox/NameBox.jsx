import { useState } from 'react';
import EditArtist from '../EditArtist/EditArtist';



export default function NameBox(props) {
 
    
    return (
        <div class="min-w-[350px] max-w-[350px] m-2 py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
       
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">
              {props.name}
            </p>
            <p class="text-lg text-black font-semibold">
              {props.role}
            </p>
           
          </div>

          

          {props.editNameBox}
          
          
        </div>
      </div>
    );
}