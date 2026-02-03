import ContentBox from "../layout/contentBox/ContentBox";

function About(){
    return (
        <ContentBox title="About Live Game App">
            <p>School project for FE2025 JS2 course.</p>
            <p> Written in Visual Studio Code.</p>
            <p>Visual Studio Code:<br/>
            <a href="https://www.mmobomb.com/api" target="_blank" rel="noopener noreferrer" >
            https://code.visualstudio.com/
            </a>
            </p>
            <p>Created using React and React Route.</p>
            <p>React Library:<br/>
            <a href="https://www.mmobomb.com/api" target="_blank" rel="noopener noreferrer" >
            https://react.dev/
            </a>
            </p>
            <p>
                API database used:<br/>
            <a href="https://www.mmobomb.com/api" target="_blank" rel="noopener noreferrer" >
            https://www.mmobomb.com/api
            </a>
            </p>
            <br/>
        </ContentBox>
    );
}

export default About;