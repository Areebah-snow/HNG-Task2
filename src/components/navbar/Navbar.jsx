import React from 'react';
import Logo from '../../images/MovieBoxLogo.png'
import Menu from '../../images/Menu.png'
import '../navbar/navbar.css'
import Search from '../search/Search';


const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navLeft">
            <img src={Logo} alt="SiteLogo" />
         
        </div>

        <Search/>
        

     

        <div className="navRight">
            {/* <a href="" className="signIn">Sign In</a> */}
            <img src={Menu} alt="" />
        </div>

    </div>
    )
}


export default Navbar;