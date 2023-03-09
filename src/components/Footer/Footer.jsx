import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 
import './Footer.css'

export default function Footer({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
           <div className="Footer">
            
            <Link to="" onClick={handleLogOut}>Log Out</Link>
          </div>  
        </nav>
    )
}