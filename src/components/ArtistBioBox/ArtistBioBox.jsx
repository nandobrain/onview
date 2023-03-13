


export default function ArtistBioBox(props) {


  return (
    <>
    <div class="max-w-sm mx-auto bg-white  rounded-lg shadow-lg  overflow-hidden">
      <div class="sm:flex sm:items-top px-6 py-4">
        <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src=""  />
        <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p class="text-xl leading-tight">{props.name}</p>
          <p class="text-sm leading-tight">{props.body}</p>
          
          <div class="mt-4">
            <button class="text-black-500 hover:text-black hover:#300 border border-grey-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Edit</button>
          </div>
        </div>
      </div>
    </div>

    {props.editArtistBio}

    </>


  )
    
  
   
  
      
    
      
   
  }