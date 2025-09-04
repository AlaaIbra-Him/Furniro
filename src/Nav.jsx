import './main.css'
import { FaUser, FaSearch } from 'react-icons/fa';

function Nav() {
    return (

        <div className='nav'>
            <div className='nav__logo'> <a href="#">NEWHOME</a></div>
            <div className="nav__links">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">FURNITURES</a>
                <a href="#">LOG</a>
                <a href="#">CONTACT US</a>
            </div>
            <div className='nav__icons'>
                <a href="#">LOGIN</a>
                <FaUser size ={15} color="white" />
                <FaSearch size ={15} color="white" />

            </div>
        </div>

    )
}
export default Nav