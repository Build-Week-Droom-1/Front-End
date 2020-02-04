import React from 'react';

const CompanyProfile = () => {
    return (

        // Needs to be styled divs with the spans appearring next to headings
        <div>
            <span>Name Icon</span><h1>Company Name Here</h1>
            <span>Location Icon</span><h3>Location Here</h3>
            <div>
                <h3>Description</h3>
                <p>Actual Description</p>
            </div>
            <div>
                <h3>Mission Statement</h3>
                <p>Actual Mission Statement</p>
            </div>
        </div>
    );
}

export default CompanyProfile;