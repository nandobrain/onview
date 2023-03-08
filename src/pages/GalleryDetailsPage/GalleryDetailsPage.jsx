import { checkToken } from '../../utilities/users-service'

export default function GalleryDetailsPage(gallery) {

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>GalleryDetailsPage</h1>
            <button onClick={handleCheckToken}>Check When my Login Expires</button>
        </>
    )
}