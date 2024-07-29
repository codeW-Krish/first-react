/* eslint-disable no-unused-vars */
import React from 'react'
import './Resume.css'
import PropTypes from 'prop-types'

// add npm props type validation
Resume.propTypes = {
    name: PropTypes.string.isRequired,
    interests: PropTypes.arrayOf(PropTypes.string).isRequired,
    education: PropTypes.arrayOf(PropTypes.string).isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    experience: PropTypes.arrayOf(PropTypes.string).isRequired,
    extracariculars: PropTypes.arrayOf(PropTypes.string).isRequired,
}

function Resume({name,interests,education,skills,experience,extracariculars}) {
   //const Interests = {...interests}
    return(
        <>
            <div className="container">
                <div className="header">
                    <h1>Resume</h1>
                    <h3 className='name'>Name: {name}</h3>
                </div>
                <br />
                <hr />
               <div className="section">
                   <h4 className='head'>Interests</h4>
                   <ul>
                       {/* <li>{Interests[0]}</li>
                       <li>{Interests[1]}</li>
                       <li>{Interests[2]}</li>
                       <li>{Interests[3]}</li>
                       <li>{Interests[4]}</li> */}

                       {interests.map((interest,index)=>{
                         return <li key={index}>{interest}</li>
                       })}
                      
                   </ul>
               </div>
                <div className="section">
                    <h4 className='head'>Skills</h4>
                    <ul>
                        {skills.map((skill, index) => (
                             <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="section">
                    <h4 className='head'>Education</h4>
                    <ul>
                        {education.map((edu,index) => (
                            <li key={index}>{edu}</li>
                        ))}
                    </ul>
                </div>
                <div className="section">
                    <h4 className="head">Experience</h4>
                    <ul>
                        {experience.map((exp, index) => (
                            <li key={index}>{exp}</li>
                        ))}
                    </ul>
                </div>
                <div className="section">
                    <h4 className="head">Extracurriculars</h4>
                    <ul>
                        {extracariculars.map((extra,index) => {
                            return <li key ={index}>{extra} </li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Resume



//We can set default props if we don't pass any props in the App.jsx <Resume /> Component
// Resume.defaultProps = {
//     name: 'John Doe',
//     interests: ['Reading', 'Traveling', 'Gardening', 'Cooking', 'Photography'],
//     education: ['Bachelor of Arts, Computer Science', 'Master of Science, Information Technology'],
//     skills: ['JavaScript', 'React', 'Node.js', 'Python', 'HTML/CSS'],
//     experience: ['Software Engineer at ABC Corp', 'Project Manager at XYZ Corp'],
//     extracariculars: ['Volunteer at Community Club', 'Mentored students'],
// }