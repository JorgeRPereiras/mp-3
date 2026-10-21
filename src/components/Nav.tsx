import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledNav = styled.div`
    /*30% of the width of #container*/
    width: 30%;
    background-color: #A4907C;

    /*change display when screen is less than 900px horizontally*/
    @media screen and (max-width: 900px){
        /*100% of the width of #container*/
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    /*removes left padding of <ul>*/
    padding-left: 0;
    /*removes the bullet points*/
    list-style: none;
    /*turns <ul> into a flexbox container*/
    display: flex;
    /*shows <li> elements vertically*/
    flex-direction: column;

    /*change display when screen is less than 900px horizontally*/
    @media screen and (max-width: 900px){
        /*shows <li> elements horizontally*/
        flex-direction: row;
        /*centers the <li> elements horizontally inside the <ul>*/
        justify-content: center;
    }
`;

const StyledLi = styled.li`
    border: solid #8D7B68 8px;
    background-color: #8D7B68;
    /*centers the text inside*/
    text-align: center;
    /*12% margin in all for directions*/
    margin: 12%;

    /*change display when screen is less than 900px horizontally*/
    @media screen and (max-width: 900px){
        margin: 1%;
    }
`;

const StyledLink = styled(Link)`
    color: #F1DEC9;
    /*removes the underline*/
    text-decoration: none;

    /*change display when screen is less than 900px horizontally*/
    @media screen and (max-width: 900px){
        font-size: calc(2px + 1.75vw);
    }
`;

export default function Nav(){
    return(
                <StyledNav>
                    <StyledUl>
                        <StyledLi><StyledLink to={"/"}>Home</StyledLink></StyledLi>
                        <StyledLi><StyledLink to={"/education"}>Education</StyledLink></StyledLi>
                        <StyledLi><StyledLink to={"/experience"}>Experience</StyledLink></StyledLi>
                        <StyledLi><StyledLink to={"/projects"}>Projects</StyledLink></StyledLi>
                        <StyledLi><StyledLink to={"/skills"}>Skills</StyledLink></StyledLi>
                        <StyledLi><StyledLink to={"/activities"}>Activities</StyledLink></StyledLi>
                    </StyledUl>
                </StyledNav>
    )
}