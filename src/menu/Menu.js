import React from 'react';
import { Nav, NavLink } from 'react-bootstrap';
import './styles.css';

const Menu = () => {

    return (
        <div className='menu'>
            <ul>
                <li> How it works </li>
                <li> Who we are </li>
                <li> What we do </li>
                <li>Contact us </li>
            </ul>

            {/* <NavLink className='link' href="/#"> Who we are </NavLink>
                <NavLink className='link' href="/#"> What we do </NavLink>
                <NavLink className='link' href="/#"> Contact us </NavLink> */}
        </div>
    )
}

export default Menu;
