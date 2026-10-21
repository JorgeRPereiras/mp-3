import styled from "styled-components";

const StyledFooter = styled.footer`
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
`;

export default function Footer(){
    return(
        <StyledFooter>
            <p>All rights reserved by Jorge Pereiras <a href="">Credits</a> &#169;</p>
        </StyledFooter>
    )
}
