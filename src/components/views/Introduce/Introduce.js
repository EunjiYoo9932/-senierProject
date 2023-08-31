import React, { useState } from 'react';
import axios from 'axios';
import './Introduce.css';
import { useNavigate } from 'react-router-dom';

const SERVER_URL = 'http://localhost:3002/api/submitResults';
function Introduce() {
    const teamMembers = [
        {
            name: '유은지',
            role: 'Frontend Developer',
            github: 'https://github.com/member1',
        },
        {
            name: '변유빈',
            role: 'Backend Developer',
            github: 'https://github.com/member2',
        },
        {
            name: '신현지',
            role: 'Backend Developer',
            github: 'https://github.com/member3',
        },
        {
            name: '김민우',
            role: 'Frontend Developer',
            github: 'https://github.com/member4',
        },
    ];
      
    return (
        <div className="team-container">
            <h1>중부대학교</h1>
            <h2>정보보호학전공</h2>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                    </a>
                </div>
                ))}
            </div>
            <img className="IntroduceImg" src='img/중부대로고.jpg' />
            
        </div>
    )
}

export default Introduce