import React from 'react';

const JobSeekerProfile = () => {
    return (

        // Needs to be styled divs with the spans appearring next to headings
        <div>
            <span>Name Icon</span><h1>Job Seeker Name Here</h1>
            <span>Location Icon</span><h3>Location Here</h3>
            <span>Occupation Icon</span><h3>Occupation Here</h3>
            <span>Education Icon</span><h3>Education Here</h3>
            <div>
                <h3>Work Experience</h3>
                <p>Actual Work Experience</p>
            </div>
            <div>
                <h3>Skills</h3>
                <p>Actual Skills</p>
            </div>
            <div>
                <h3>Interests</h3>
                <p>Actual Interests</p>
            </div>
        </div>
    );
}

export default JobSeekerProfile;