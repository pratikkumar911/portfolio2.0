import React from 'react'

import SingleProject from '../components/SingleProject';

function Projects() {
    React.useEffect(() => {
        document.querySelectorAll('.tabs a').forEach((e, index) => {
            if (index !== 1)
                e.classList.remove('open');
            else
                e.classList.add('open');
        })
    }, [])
    
    let projects =[{
        projectname: 'Co-Vax',
        projectthumbnail: 'https://user-images.githubusercontent.com/77845945/147767998-0e178565-5745-4a33-9e50-0eee53d1eadd.png',
        projectdesc: 'Co-Vax is a website that helps people to find nearby vaccination center.',
        github: 'https://github.com/pratikkumar911/covax',
        website: 'https://co-vax-savelives.netlify.app/',
        tools: ['ReactJS','CowinAPI'],
    },{
        projectname: 'Sigma Rules',
        projectthumbnail: 'https://user-images.githubusercontent.com/77845945/147679076-c01f79e6-59f8-44d0-a2b4-378223135b26.png',
        projectdesc: 'A full stack app where u can store sigma rules and watch others rules too.',
        github: 'https://github.com/pratikkumar911/Sigma_Rules',
        website: 'https://sigma-rule-69.netlify.app/',
        tools: ['ReactJS', 'Tailwind CSS', 'Framer Motion'],
    },{
        projectname: 'Chill',
        projectthumbnail: 'https://user-images.githubusercontent.com/77845945/152189229-76d96529-1593-4950-a641-7c5c76cc4f06.png',
        projectdesc: 'A music player(moodly website clone) where you can choose your own theme.',
        github: 'https://github.com/pratikkumar911/Moodly',
        website: 'https://chill-lofi.netlify.app/',
        tools: ['NextJS', 'Tailwind CSS'],
    },{
        projectname: 'Portfolio 1.0',
        projectthumbnail: 'https://user-images.githubusercontent.com/77845945/147679325-b41a8378-b2c9-4032-8cd9-6c13ba1a3530.png',
        projectdesc: 'A minimal personal website made using html, css and javascript.',
        github: 'https://github.com/pratikkumar911/portfolio',
        website: 'https://pratik-codes.herokuapp.com/',
        tools: ['HTML', 'CSS', 'JS'],
    },{
        projectname: 'One Page',
        projectthumbnail: 'https://user-images.githubusercontent.com/77845945/143686108-ac59b52a-9580-42d9-9f60-c72a0de115f2.png',
        projectdesc: 'A custom startpage using React. It is not responsive though.',
        github: 'https://github.com/pratikkumar911/one-page',
        website: 'https://one-punch-page.herokuapp.com/',
        tools: ['ReactJS'],
    },{
        projectname: 'Gradient Generator',
        projectthumbnail: 'https://user-images.githubusercontent.com/77845945/147767947-43dc44fe-b84a-4063-bb20-e9db6a26317f.png',
        projectdesc: 'Generates gradients of two colurs with various shades.',
        github: 'https://github.com/pratikkumar911/gradient',
        website: 'https://colorgradient.herokuapp.com/',
        tools: ['ReactJS'],
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