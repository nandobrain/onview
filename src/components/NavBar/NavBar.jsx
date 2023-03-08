import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 
import './NavBar.css'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
           <div className="NavBar">
            <h1>On View</h1>
            
            <Link to="/artist">ARTIST</Link>
           
            <Link to="/work">WORK</Link>
            <Link to="/about">ABOUT</Link>
            &nbsp;&nbsp; {user.name}
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
          </div>  
        </nav>
    )
}