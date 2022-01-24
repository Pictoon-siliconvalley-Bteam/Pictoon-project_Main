//rafce칠시 기본 셋팅 완료
import React from 'react'
import {Nav, NavbarContainer, NavLogo} 
from './NavbarElements'


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Pictoon</NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
