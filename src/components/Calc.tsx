import useCalculator from "../useCalculator.tsx";
import styled from "styled-components";
import calcImg from "../images/Calc-img.png";

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

const StyledCalc = styled.div`
    border: solid #8D7B68 8px;
    padding: 5%;
    /*use an image as a background instead of a color*/
    /*learned how to use this from: https://www.w3schools.com/cssref/pr_background-image.php*/
    background-image: url(${calcImg});
`;

const StyledCalcH3 = styled.h3`
    margin-bottom: 2%;
    border: solid #8D7B68 8px;
    /*centers the text inside*/
    text-align: center;
    /*font in form of [font-style] [font-variant] [font-weight] [font-size] [font-family]*/
    font: normal small-caps bold calc(2px + 4vw) copperplate, papyrus, fantasy;
    background-color: #A4907C;
    color: #F1DEC9;
`;

const StyledInput = styled.input`
    border: solid #8D7B68 8px;
    /*centers the text inside*/
    text-align: center;
    /*font in form of [font-style] [font-variant] [font-weight] [font-size] [font-family]*/
    font: normal small-caps bold calc(2px + 4vw) copperplate, papyrus, fantasy;
    background-color: #A4907C;
    color: #F1DEC9;
    /*50% of the width of #calculator*/
    width: 50%;
    /*turns item into a block level element*/
    display: block;
    /*top margin in (auto), horizontal margin in (auto), and bottom margin of (2%)*/
    margin: auto auto 2%;
`;

const StyledButton = styled.button`
    border: solid #8D7B68 8px;
    /*centers the text inside*/
    text-align: center;
    /*font in form of [font-style] [font-variant] [font-weight] [font-size] [font-family]*/
    font: normal small-caps bold calc(2px + 2vw) copperplate, papyrus, fantasy;
    background-color: #A4907C;
    color: #F1DEC9;
    /*20% of the width of #calculator*/
    width: 20%;
    /*top margin in (auto), horizontal margin in (auto), and bottom margin of (2%)*/
    margin: auto auto 2%;
`;

const StyledOutput = styled.h3<{ $negative: boolean }>`
    border: solid #8D7B68 8px;
    /*centers the text inside*/
    text-align: center;
    /*font in form of [font-style] [font-variant] [font-weight] [font-size] [font-family]*/
    font: normal small-caps bold calc(2px + 4vw) copperplate, papyrus, fantasy;
    background-color: #A4907C;
    /*100% of the width of #calculator*/
    width: 100%;
    /*set height of output box to 10vh*/
    height: 10vh;
    /*turns output into a flexbox container*/
    display: flex;
    /*justify-center: center and align-items: center, centers the content inside the box*/
    justify-content: center;
    align-items: center;
    /*top margin of (5%), right margin in (auto), bottom margin of (2%), and left margin in (auto)*/
    margin: 5% auto 2% auto;
    color: ${(props) => (props.$negative ? "red" : "#F1DEC9")};
`;

const StyledDivSection1 = styled.div`
    /*turns output into a flexbox container*/
    display: flex;
    /*top margin of (10%), horizontal margin in (auto), and bottom margin in (auto)*/
    margin: 10% auto auto;
`;

const StyledDivSection2 = styled.div`
    /*turns output into a flexbox container*/
    display: flex;
    /*auto margin in all for directions*/
    margin: auto;
`;

export default function Calc(){
    const{num1, setNum1, num2, setNum2, result, calculate, clear} = useCalculator();

    const isNegative = Number(result) < 0;

    return(
        <StyledMain>
            <StyledMainH3>Projects</StyledMainH3>
            <StyledCalc>
                <StyledCalcH3>CALCULATOR</StyledCalcH3>

                <StyledInput value={num1} onChange={(e) =>
                    setNum1(e.target.value)} placeholder=""/>
                <StyledInput value={num2} onChange={(e) =>
                    setNum2(e.target.value)} placeholder=""/>

                <StyledDivSection1>
                    <StyledButton onClick={() => calculate('add')}>+</StyledButton>
                    <StyledButton onClick={() => calculate('subtract')}>-</StyledButton>
                    <StyledButton onClick={() => calculate('multiply')}>*</StyledButton>
                </StyledDivSection1>

                <StyledDivSection2>
                    <StyledButton onClick={() => calculate('divide')}>/</StyledButton>
                    <StyledButton onClick={() => calculate('power')}>^</StyledButton>
                    <StyledButton onClick={clear}>Clear</StyledButton>
                </StyledDivSection2>

                <StyledOutput $negative={isNegative}>{result}</StyledOutput>
            </StyledCalc>
        </StyledMain>
    )
}
