
export default function ArtistInfoBox(props) {

    return (
      <>
      <div class="max-w-sm mx-auto bg-white  rounded-lg   overflow-hidden">
        <div class="sm:flex sm:items-top px-6 py-4">
          <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src=""  />
          <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p class="fontSize: 5xl text-xl leading-tight">{props.name}</p>
            <p class="text-sm leading-tight">{props.location}</p>
            <p class="text-sm leading-tight">{props.phoneNumber}</p>
            <p class="text-sm leading-tight">{props.email}</p>
            <p class="text-sm leading-tight">{props.socialMedia}</p>
            <div class="mt-4">
            
            </div>
          </div>
        </div>
      </div>

      {props.editArtistInfoBox}
  
      </>
  
  
  
    )
     
  }