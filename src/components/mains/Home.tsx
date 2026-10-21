import profilePicture from "../../images/profile-picture.png";
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

const StyledImg = styled.img`
    /*size of image*/
    max-width: 50%;
    /*makes an element move to the left side of its container, allowing <p> to flow around it*/
    /*learned how to use this from: https://www.w3schools.com/css/css_float.asp*/
    float: left;
    border: solid #8D7B68 8px;
    background-color: white;
    margin-right: 3%;

    /*change display when screen is less than 900px horizontally*/
    @media screen and (max-width: 900px){
        /*turns item into a block level element*/
        display: block;
        /*top margin in (auto), horizontal margin in (auto), and bottom margin of (2%)*/
        margin: auto auto 2%;
        /*removes the float: left*/
        /*learned how to use this from: https://www.w3schools.com/css/css_float.asp*/
        float: none;
    }
`;

const StyledP = styled.p`
    color: #8D7B68;
    /*replaces font weight from bold to normal*/
    font-weight: normal;
    font-size: calc(2px + 1.5vw);
`;

export default function Home(){
    return(
        <StyledMain>
            <title>Home | Resume</title>
            <StyledMainH3>Home</StyledMainH3>
            <StyledImg src={profilePicture} alt="Jorge Pereiras"/>
            <StyledP>My name is Jorge Pereiras, and I am a full-time student at Boston University pursuing a bachelor’s
                degree in Computer Science. I am a resourceful and dedicated student with strong analytical,
                problem-solving, and organizational skills, as well as experience managing academic projects and
                working with others. I am a motivated and adaptable team player who is committed to continuing my
                academic and professional growth while developing my skills in computer science. <br/><br/> Welcome to
                my website. Here, you can learn more about my <strong>Education</strong>, <strong>Experience</strong>,
                <strong>Projects</strong>, <strong>Skills</strong>, <strong>Certifications</strong>, and
                <strong>Activities</strong>. This website provides an overview of my academic background, technical
                experience, and accomplishments, as well as the skills and interests I have developed throughout my
                education.</StyledP>
        </StyledMain>
    )
}
