import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
    max-width: 80%;
    margin: 1% auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-evenly;
`
const Card = styled.div`
    width: 30%;
    margin: 1% auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid #caa767;
    border-radius: 5px;
    background-color: #FFFEF2;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const JobPosting = () => {
    return (
        <CardContainer>
            <Card>
                <h1>Job Title: </h1>
                <h3>Salary: </h3>
                <h3>Location: </h3>
                <h3>Relocation Assistance: Yes/No</h3>
                {/* {
                    return relocationbool ? <h3>Relocation Assistance: Yes</h3> : <h3>Relocation Assistance: No</h3>
                } */}
                <div>
                    <h3>Job Description</h3>
                    <p>Actual Job Description</p>
                </div>
                <div>
                    <h3>Position Requirements</h3>
                    <p>Actual Position Requirements</p>
                </div>
            </Card>
            <Card>
                <h1>Job Title: </h1>
                <h3>Salary: </h3>
                <h3>Location: </h3>
                <h3>Relocation Assistance: Yes/No</h3>
                {/* {
                    return relocationbool ? <h3>Relocation Assistance: Yes</h3> : <h3>Relocation Assistance: No</h3>
                } */}
                <div>
                    <h3>Job Description</h3>
                    <p>Actual Job Description</p>
                </div>
                <div>
                    <h3>Position Requirements</h3>
                    <p>Actual Position Requirements</p>
                </div>
            </Card>
            <Card>
                <h1>Job Title: </h1>
                <h3>Salary: </h3>
                <h3>Location: </h3>
                <h3>Relocation Assistance: Yes/No</h3>
                {/* {
                    return relocationbool ? <h3>Relocation Assistance: Yes</h3> : <h3>Relocation Assistance: No</h3>
                } */}
                <div>
                    <h3>Job Description</h3>
                    <p>Actual Job Description</p>
                </div>
                <div>
                    <h3>Position Requirements</h3>
                    <p>Actual Position Requirements</p>
                </div>
            </Card>
            <Card>
                <h1>Job Title: </h1>
                <h3>Salary: </h3>
                <h3>Location: </h3>
                <h3>Relocation Assistance: Yes/No</h3>
                {/* {
                    return relocationbool ? <h3>Relocation Assistance: Yes</h3> : <h3>Relocation Assistance: No</h3>
                } */}
                <div>
                    <h3>Job Description</h3>
                    <p>Actual Job Description</p>
                </div>
                <div>
                    <h3>Position Requirements</h3>
                    <p>Actual Position Requirements</p>
                </div>
            </Card>
            <Card>
                <h1>Job Title: </h1>
                <h3>Salary: </h3>
                <h3>Location: </h3>
                <h3>Relocation Assistance: Yes/No</h3>
                {/* {
                    return relocationbool ? <h3>Relocation Assistance: Yes</h3> : <h3>Relocation Assistance: No</h3>
                } */}
                <div>
                    <h3>Job Description</h3>
                    <p>Actual Job Description</p>
                </div>
                <div>
                    <h3>Position Requirements</h3>
                    <p>Actual Position Requirements</p>
                </div>
            </Card>
            <Card>
                <h1>Job Title: </h1>
                <h3>Salary: </h3>
                <h3>Location: </h3>
                <h3>Relocation Assistance: Yes/No</h3>
                {/* {
                    return relocationbool ? <h3>Relocation Assistance: Yes</h3> : <h3>Relocation Assistance: No</h3>
                } */}
                <div>
                    <h3>Job Description</h3>
                    <p>Actual Job Description</p>
                </div>
                <div>
                    <h3>Position Requirements</h3>
                    <p>Actual Position Requirements</p>
                </div>
            </Card>
        </CardContainer>
    );
}
export default JobPosting;