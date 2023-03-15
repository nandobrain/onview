

export default function NameBox(props) {
 
    
    return (
        <div class="min-w-[350px] max-w-[700px] m-2 py-8 px-8 max-w-sm  bg-white rounded-xl  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
       
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-5xl text-black font-semibold">
              {props.name}
            </p>
            <p class="text-lg text-black color-#d1d5db font-#d1d5db">
              {props.role}
            </p>
           
          </div>

          

          {props.editNameBox}
          
          
        </div>
      </div>
    );
}