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
        projectname: 'Collaborative Code Editor',
        projectthumbnail: 'https://github.com/user-attachments/assets/999b500d-3ad9-447d-93be-776f4135d55b',
        projectdesc: 'A collaborative code editor supporting javascript runtime with multiple users.',
        github: 'https://github.com/pratikkumar911/Collaborative-code-editor',
        website: 'https://collaborative-code-editor-fe.onrender.com',
        tools: ['ReactJS', 'WebSockets'],
    },
    {
        projectname: 'Gen-AI Resume Builder',
        projectthumbnail: 'https://github.com/user-attachments/assets/1c251ba7-f2f7-43f5-8f16-39d6a13a051b',
        projectdesc: 'An interview planner and resume build using Google Gemini API.',
        github: 'https://github.com/pratikkumar911/gen-ai-resume-builder',
        website: 'https://drive.google.com/file/d/17NJW1Zpn8_jA_OCfddQA6m1ZnOZxoQoi/view?usp=sharing',
        tools: ['ReactJS','ExpressJS','Gemini API'],
    },
    {
        projectname: 'Assistly',
        projectthumbnail: 'https://github.com/user-attachments/assets/c5aaf3ba-9033-4dcd-a92b-996583e25a26',
        projectdesc: 'AI Customer Support Assistant.',
        github: 'https://github.com/pratikkumar911/support-ai',
        website: 'https://assistly-gilt-two.vercel.app/',
        tools: ['NextJS', 'Gemini API', 'Scalekit'],
    },
    {
        projectname: 'DocWise',
        projectthumbnail: '/assests/docwise.png',
        projectdesc: 'AI-powered document chat with your Google Drive files.',
        github: 'https://github.com/pratikkumar911/drive-chatbot',
        website: 'https://drive-chatbot-frontend.vercel.app/',
        tools: ['React', 'FastAPI', 'Gemini AI', 'Supabase', 'pgvector'],
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