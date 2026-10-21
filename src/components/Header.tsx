import styled from "styled-components";

const StyledHeader = styled.header`
    /*90% width of <body>*/
    width: 90%;
    /*vertical margin of (0) and horizontal margin in (auto)*/
    margin: 0 auto;
    /*font in form of [font-style] [font-variant] [font-weight] [font-size] [font-family]*/
    font: normal small-caps bold calc(2px + 2vw) copperplate, papyrus, fantasy;
    /*padding to the left of header and footer*/
    padding-left: 3%;
    background-color: #8D7B68;
    color: #F1DEC9;

    /*change display when screen is less than 900px horizontally*/
    @media screen and (max-width: 900px){
        text-align: center;
        font-size: calc(2px + 2.5vw);
    }
`;

export default function Header(){
    return(
        <StyledHeader>
            <h1>Jorge Pereiras</h1>
            <p>Online Resume</p>
        </StyledHeader>
    )
}