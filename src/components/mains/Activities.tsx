import mcfaiLogo from "../../images/MCFAI-img.jpg";
import csClub from "../../images/CSClub-img.png";
import codingClub from "../../images/CodingClub-img.jpeg";
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
    padding: 1%;
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

export default function Activities(){
    return(
        <StyledMain>
            <title>Activities | Resume</title>
            <StyledMainH3>Activities</StyledMainH3>

            <StyledDiv>
                <StyledImg src={mcfaiLogo} alt="Mark Cuban Foundation AI Bootcamp"/>
                <StyledP><strong>Mark Cuban Foundation AI Bootcamp:</strong> Earned a certification from an intensive program
                    in artificial intelligence and machine learning. Developed computer-assisted solutions to complex
                    data problems. Gained hands-on experience with AI concepts and real-world applications.</StyledP>
            </StyledDiv>

            <StyledDiv>
                <StyledImg src={csClub} alt="Computer Science Club at Boston University"/>
                <StyledP><strong>Computer Science Club (Boston University):</strong> Active member participating in
                    programming-related activities to expand knowledge across computer science topics. Engage in
                    collaborative problem-solving and technical discussions.</StyledP>
            </StyledDiv>

            <StyledDiv>
                <StyledImg src={codingClub} alt="Coding Club at School for Advanced Studies"/>
                <StyledP><strong>Coding Club (School for Advanced Studies):</strong> Designed and developed programming
                    problems to help new members learn coding. Collaborated with peers to support beginner learning and
                    engagement.</StyledP>
            </StyledDiv>
        </StyledMain>
    )
}