import ContentBox from "../layout/contentBox/ContentBox";

function About(){
    return (
        <ContentBox title="About Live Gaming App">
            <a href="https://github.com/jimmybookkyh-crypto/FE25Projekt" target="_blank" rel="noopener noreferrer" >
            Github Link</a>
            <p>School project for FE2025 JS2 course.<br/> Created by Jimmy Book.<br/>
            <a href="https://github.com/jimmybookkyh-crypto" target="_blank" rel="noopener noreferrer" >
            Git repository
            </a>
            </p>
            <p> Written in Visual Studio Code.<br/> Visual Studio Code:<br/>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" >
            https://code.visualstudio.com/
            </a>
            </p>
            <p>Created using React and React Route.<br/> React Library:<br/>
            <a href="https://www.mmobomb.com/api" target="_blank" rel="noopener noreferrer" >
            https://react.dev/
            </a>
            </p>
            <p>API database used:<br/>
            <a href="https://www.mmobomb.com/api" target="_blank" rel="noopener noreferrer" >
            https://www.mmobomb.com/api
            </a>
            </p>
            <br/>
        </ContentBox>
    );
}

export default About;