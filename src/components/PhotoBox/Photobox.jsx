
export default function PhotoBox(setUser, props) {

    return (
        <>
        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img  src="https://i.imgur.com/ojtreYh.jpg" />
        <div class="text-center space-y-2 sm:text-left">
          
            <button class="text-black-500 hover:text-black hover:#300 border border-grey-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Edit</button>
        </div>
        </div>

</>
    )

}