


export default function ArtistBioBox(props) {


  return (
    <>
    <div className="max-w-sm mx-auto bg-white  rounded-lg  overflow-hidden">
      <div className="sm:flex sm:items-top px-6 py-4"> 
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl leading-tight">{props.name}</p>
          <div> 
              <span className="inline"><p className="text-sm leading-tight">{props.body}</p></span>
              <span className="inline-block"></span>
               <span className="block"></span>
              
            </div>
          <div className="mt-4">
            
          </div>
        </div>
      </div>
    </div>

    {props.editArtistBio}

    </>


  )

  
   
  
      
    
      
   
  }