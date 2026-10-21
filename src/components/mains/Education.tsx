import buLogo from "../../images/BU-logo.png";
import mdcLogo from "../../images/MDC-logo.png";
import sasLogo from "../../images/SAS-logo.png";
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

export default function Education(){
    return(
        <StyledMain>
            <title>Education | Resume</title>
            <StyledMainH3>Education</StyledMainH3>

            <StyledDiv>
                <StyledImg src={buLogo} alt="Boston University"/>
                <StyledP><br/> <strong>B.A. in Computer Science | <u>Boston University, MA.</u> </strong> <br/>
                    September 2024 - Present</StyledP>
            </StyledDiv>

            <StyledDiv>
                <StyledImg src={mdcLogo} alt="Miami Dade College"/>
                <StyledP><br/> <strong>A.A. Degree | <u>Miami Dade College, FL.</u> </strong> <br/> August 2022 -
                    June 2024</StyledP>
            </StyledDiv>

            <StyledDiv>
                <StyledImg src={sasLogo} alt="School for Advanced Studies"/>
                <StyledP><br/> <strong> High School Diploma | <u>School for Advanced Studies, FL.</u> </strong> <br/>
                    August 2020 - June 2024</StyledP>
            </StyledDiv>
        </StyledMain>
    )
}