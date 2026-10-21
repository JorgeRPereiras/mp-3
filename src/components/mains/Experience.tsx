import mathWorks from "../../images/Mathworks-logo.png";
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

const StyledDiv = styled.div`
    /*makes sure the element goes below the floated image instead of going beside it*/
    clear: both;
`;

const StyledImg = styled.img`
    /*size of image*/
    max-width: 20%;
    /*makes an element move to the left side of its container, allowing <p> to flow around it*/
    /*learned how to use this from: https://www.w3schools.com/css/css_float.asp*/
    float: left;
    margin-bottom: 5%;
    border: solid #8D7B68 8px;
    background-color: white;
    margin-right: 3%;
`;

const StyledP = styled.p`
    color: #8D7B68;
    /*replaces font weight from bold to normal*/
    font-weight: normal;
    font-size: calc(2px + 1.5vw);
`;

const StyledUl = styled.ul`
    color: #8D7B68;
    /*replaces font weight from bold to normal*/
    font-weight: normal;
    font-size: calc(2px + 1.5vw);
`;

export default function Experience(){
    return(
        <StyledMain>
            <title>Experience | Resume</title>
            <StyledMainH3>Experience</StyledMainH3>
            <StyledSubtitle>Internships</StyledSubtitle>

            <StyledDiv>
                <StyledImg src={mathWorks} alt="MathWorks"/>
                <StyledP><br/> <strong>IT Training Summer Intern | <u>MathWorks, MA. </u> </strong> <br/> Summer
                    2025</StyledP>
            </StyledDiv>

            <StyledDiv>
                <StyledImg src={mathWorks} alt="MathWorks"/>
                <StyledP><br/> <strong>Software Engineer in Test - Intern | <u>MathWorks, MA. </u> </strong> <br/>
                    Summer 2026</StyledP>
            </StyledDiv>

            <StyledSubtitle>Academics - Computer Science coursework includes:</StyledSubtitle>
            <StyledUl>
                <li>Data Structures</li>
                <li>Algorithms for Geometric Objects</li>
                <li>Concepts of Computer Systems</li>
                <li>Systems Programming</li>
                <li>Database Concepts and Design</li>
                <li>Artificial Intelligence (Perceptual and Robotic Systems)</li>
            </StyledUl>
        </StyledMain>
    )
}