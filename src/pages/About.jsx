import React from 'react'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

function About() {
  const [fontSize, setFontSize] = React.useState(24);

  React.useEffect(() => {
    function updateFontSize() {
      if (window.innerWidth < 768) setFontSize(14);
      else setFontSize(24);
    }

    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  const codeText = document.createElement('textarea');
  codeText.value = `class PratikKumar{
    // I love challenges
    // Currently actively solving ds and algo problems from Leetcode
    // Improving my web development skills with everyday technologies
    constructor(){
        this.name = "Pratik Kumar";
        this.email = "kumar.pratik42000@gmail.com"
    }
    education() {
        return [
          { '2019 - 2023': 'B.Tech at OUTR, Bhubaneswar, Odisha' },
        ]
    }
    skills() {
        return [
          'Programming Languages: C++, Python',
          'Frontend: React Js, Vue Js, JavaScript, TypeScript, HTML, CSS',
          'Backend: Node Js, Express Js, Fast API',
          'DevOps & Cloud: Docker, Kubernetes, AWS, ArgoCD, Datadog, Git, Postman',
          'Databases: SQL, MongoDB, Snowflake'
        ]
    }
    everydayTarget(){
        return [
          {'Solve atleast 5 problems from leetcode'}, 
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
    </div>
  )
}

export default About;
