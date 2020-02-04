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

const JobSeekerNav = () => {
    return (
        <>
            <div> 
                <StyledNavLink to="SWIPE LINK">Find a Job!</StyledNavLink>
                <StyledNavLink to="MATCHES LINK">My Matches</StyledNavLink>
            </div>
            <div>
                <StyledNavLink to="EDIT PROFILE LINK">Edit Profile</StyledNavLink>
                <StyledNavLink to="DELETE PROFILE LINK">Delete Profile</StyledNavLink>
            </div>
        </>
    )
}

export default JobSeekerNav;