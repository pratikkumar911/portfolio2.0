import React from 'react'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

function About() {
  const [fontSize, setFontSize] = React.useState(24);

  React.useEffect(() => {
    document.querySelectorAll('.tabs a').forEach((e, index) => {
      if (index !== 0)
        e.classList.remove('open');
      else
        e.classList.add('open');
    })
    if (window.innerWidth < 768)
      setFontSize(14);
  }, []);

  window.addEventListener('resize', e => {
    if (window.innerWidth < 768)
      setFontSize(14);
    else
      setFontSize(24)
  })

  const codeText = document.createElement('textarea');
  codeText.value = ` class PratikKumar{
    // I love challenges
    // Currently actively solving ds and algo problems from Leetcode
    // Improving my web development skills with everyday technologies
    constructor(){
        this.name = "Pratik Kumar";
        this.age = 22;
        this.email = "light.moon42000@gmail.com"
    }
    workExperience() {
        return [
        { 'September 2021 - NOvember 2021': 'Web Dev intern at Hofars'),
        { 'May 2021 - July 2021': 'Frontend intern at Sahu Tech' },
        ]
    }
    education() {
        return [
        'Present - 2023': 'B Tech at OUTR, Bhubaneswar, Odisha',
        ]
    }
    skills() {
        return [ 'HTML/CSS/JS' ,'ReactJS', 'Redux', 'NextJS', 'NodeJS' , 'C++', 'SQL/NOSQL]
    }
    everydayTarget(){
        return [{'Solve atleast 5 problems from leetcode'}, 
        {'Discover new algorithms'}, 
        {'Learn about new techs'}
        ]
    }
 };`;

  const code = codeText.value;

  return (
    <div className="about-page">
      <h1>About Me</h1>
      <AceEditor
        className="about-code"
        mode="javascript"
        theme="dracula"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        wrapEnabled={true}
        showGutter={false}
        showPrintMargin={false}
        maxLines={100}
        fontSize={fontSize}
        setOptions={{
          readOnly: true,
        }}
        value={code}
      />
      <h1>Wanna Know More !</h1>
        <div className="socials">
            <a href="https://github.com/pratikkumar911" target="_blank" rel = "noreferrer"><abbr title="My Github" className="fab fa-github"></abbr></a>
            <a href="https://dev.to/pratik_kumar" target="_blank" rel = "noreferrer"><abbr title="My Dev" className="fab fa-dev"></abbr></a> 
            <a href="https://www.linkedin.com/in/pratik-kumar-4675761aa/" target="_blank" rel = "noreferrer"><abbr title="My LinkedIn" className="fab fa-linkedin"></abbr></a>
            <a href="https://codepen.io/pratik-kumar-the-lessful" target="_blank" rel = "noreferrer"><abbr title="My Codepen" className="fab fa-codepen"></abbr></a>              
            <a href="https://drive.google.com/file/d/1wWTwPkGieu_lVPer4_lAbhqjgo70AcMa/view?usp=sharing" target="_blank" rel = "noreferrer"><abbr title="My Resume" className="far fa-file-pdf"></abbr></a>
            <a href="https://leetcode.com/loopinfinity0/" target="_blank" rel = "noreferrer"><abbr title="My Leetcode" className="fas fa-code"></abbr></a>
        </div>
    </div>
  )
}

export default About;
