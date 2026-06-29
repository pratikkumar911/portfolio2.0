import React from 'react'

import SingleProject from '../components/SingleProject';

function Projects() {
    // rely on NavLink's active state instead of manually toggling classes
    
    let projects =[{
        projectname: 'Chill',
        projectthumbnail: 'https://user-images.githubusercontent.com/77845945/152189229-76d96529-1593-4950-a641-7c5c76cc4f06.png',
        projectdesc: 'A music player(moodly website clone) where you can choose your own theme.',
        github: 'https://github.com/pratikkumar911/Moodly',
        website: 'https://chill-lofi.netlify.app/',
        tools: ['NextJS', 'Tailwind CSS'],
    },
    {
        projectname: 'Gen-AI Resume Builder',
        projectthumbnail: 'https://private-user-images.githubusercontent.com/77845945/614503070-1c251ba7-f2f7-43f5-8f16-39d6a13a051b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODI3Mjc4MTMsIm5iZiI6MTc4MjcyNzUxMywicGF0aCI6Ii83Nzg0NTk0NS82MTQ1MDMwNzAtMWMyNTFiYTctZjJmNy00M2Y1LThmMTYtMzlkNmExM2EwNTFiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA2MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNjI5VDEwMDUxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQzMTFhZWE4ZTU0ZDU1ZGZkMjM2N2FkNjNiZjQ1YzIzMzAyOTk1MGQ4Zjg1NTdmMzc1ZGM5NWQzMGVhZTAxYjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.7Xd4sVvoAJoq49FnT-6gjZ0sXypOx-UOpS_rWMmR4gY',
        projectdesc: 'An interview planner and resume build using Google Gemini API.',
        github: 'https://github.com/pratikkumar911/gen-ai-resume-builder',
        website: 'https://drive.google.com/file/d/17NJW1Zpn8_jA_OCfddQA6m1ZnOZxoQoi/view?usp=sharing',
        tools: ['ReactJS','ExpressJS','Gemini API'],
    }]
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-page">
                {projects.map(item => (
                    <SingleProject key={item.github} projectname={item.projectname} projectthumbnail={item.projectthumbnail} projectdesc={item.projectdesc} github={item.github} website={item.website} tools={item.tools} />
                ))}
            </div>
        </div>
    )
}

export default Projects;