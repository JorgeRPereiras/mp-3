import {Routes, Route} from "react-router-dom";
import styled from "styled-components";

import Nav from "./components/Nav";
import Home from "./components/mains/Home";
import Education from "./components/mains/Education";
import Experience from "./components/mains/Experience";
import Projects from "./components/mains/Projects";
import Skills from "./components/mains/Skills";
import Activities from "./components/mains/Activities";

const PageWrapper = styled.div`
    background-color: #F1DEC9;
    /*90% width of <body>*/
    width: 90%;
    /*vertical margin of (0) and horizontal margin in (auto)*/
    margin: 0 auto;
    /*font in form of [font-style] [font-variant] [font-weight] [font-size] [font-family]*/
    font: normal small-caps bold calc(2px + 2vw) verdana, arial, helvetica, sans-serif;
`;

const PageContainer = styled.div`
    /*100% width of #page-wrapper*/
    width: 100%;
    /*turns #container into a flexbox container*/
    display: flex;
    /*let nav and main be arrange horizontally (next to each other)*/
    flex-direction: row;
    /*No white spaces at the bottom*/
    height: 100vh;

    @media screen and (max-width: 900px){
        /*let nav and main be arranged vertically*/
        flex-direction: column;
    }
`;

const StyledMain = styled.main`
    width: 70%;

    /*change display when screen is less than 900px horizontally*/
    @media screen and (max-width: 900px){
        /*100% of the width of #container*/
        width: 100%;
    }
`;

export default function Root(){
    return(
        <PageWrapper>
            <PageContainer>
                <Nav/>
                <StyledMain>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home/>}
                        />
                        <Route
                            path="education"
                            element={<Education/>}
                        />
                        <Route
                            path="experience"
                            element={<Experience/>}
                        />
                        <Route
                            path="projects"
                            element={<Projects/>}
                        />
                        <Route
                            path="skills"
                            element={<Skills/>}
                        />
                        <Route
                            path="activities"
                            element={<Activities/>}
                        />
                    </Routes>
                </StyledMain>
            </PageContainer>
        </PageWrapper>
    )
}
