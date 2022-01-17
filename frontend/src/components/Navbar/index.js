//rafce칠시 기본 셋팅 완료
import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink} 
from './NavbarElements'


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Fictoon</NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
