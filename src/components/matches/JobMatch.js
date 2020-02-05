import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 500px;
    margin: 1% auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: black;
    border: 1px solid #caa767;
    border-radius: 5px;
    background-color: #FFFEF2;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    font-size: 15px;

`
const JobMatch = () => {
    return (
        
            <Card>
            <h4>Job Title</h4>
            <p>Company name</p>
            <p>Location</p>
            </Card>
     
    )
}

export default JobMatch;