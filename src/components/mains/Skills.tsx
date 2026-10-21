import styled from "styled-components";

const StyledMain = styled.main`
    padding: 2%;
    /*replaces font variant from small-caps to normal*/
    font-variant: normal;
    color: #A4907C;

    /*change display when screen is less than 900px horizontally*/
    @media screen and (max-width: 900px){
        /*100% of the width of #container*/
        width: 100%;
    }
`;

const StyledMainH3 = styled.h3`
    /*centers the text inside*/
    text-align: center;
    margin-bottom: 2%;
`;

const StyledSubtitle = styled.h3`
    /*removes the text-align center from main h3*/
    text-align: left;
    margin-bottom: 2%;
    clear: both;
`;

const StyledUl = styled.ul`
    color: #8D7B68;
    /*replaces font weight from bold to normal*/
    font-weight: normal;
    font-size: calc(2px + 1.5vw);
`;

export default function Skills(){
    return(
        <StyledMain>
            <title>Skills | Resume</title>
            <StyledMainH3>Skills</StyledMainH3>
            <StyledSubtitle>Interpersonal Skills</StyledSubtitle>

            <StyledUl>
                <li>Leadership</li>
                <li>Time Management</li>
                <li>Teamwork</li>
                <li>Proactive Problem Solver</li>
                <li>Adaptability</li>
            </StyledUl>
            <br/>

            <StyledSubtitle>Technical Skills</StyledSubtitle>
            <StyledUl>
                <li>Python</li>
                <li>C++</li>
                <li>C</li>
                <li>Java</li>
                <li>OCaml</li>
                <li>Assembly</li>
                <li>MATLAB</li>
                <li>SQL</li>
                <li>Git</li>
                <li>HTML</li>
            </StyledUl>
        </StyledMain>
    )
}