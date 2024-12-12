import {  NavLink } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <NavLink className='navbar-brand' to='/'>
                    Movie Search
                </NavLink>
            </div>

        </nav>
    );
}