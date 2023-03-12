import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 
import './NavBar.css'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav className="NavBar">
           <div className="header-text">
            <h1>On View</h1>
           </div>
           <div className="header-links">
            <Link to="/artist">ARTIST</Link>
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            <Link to="/work">WORK</Link>
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            <Link to="/about">ABOUT</Link>
            {/* &nbsp;&nbsp; {user.name} */}
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            |
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            
            
            <Link to="" onClick={handleLogOut}>Log Out</Link>
          </div>  
        </nav>
    )
}