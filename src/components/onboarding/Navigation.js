import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
    font-size: 1.05rem;
    color: #caa767;
    margin: 0 20px;
    text-decoration: none;
    padding: 10px;
    &.active {
        border: 1px solid #caa767;
    }
`;

const Navigation = () => {
    return (
        <div>
            <StyledNavLink to="/signup">Sign Up</StyledNavLink> 
            <StyledNavLink to="/login">Log In</StyledNavLink>
        </div>
    )
}

export default Navigation;