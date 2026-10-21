import {useState} from "react";

export default function useCalculator(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const calculate=(operation: string) => {
        //learned how to use Number from Lecture 3, Page 34
        const a = Number(num1);
        const b = Number(num2);

        //operations
        switch(operation){
            case 'add':
                setResult(`${a + b}`);
                break;
            case 'subtract':
                setResult(`${a - b}`);
                break;
            case 'multiply':
                setResult(`${a * b}`);
                break;
            case 'divide':
                setResult(`${a / b}`);
                break;
            case 'power': {
                let powerResult = 1;
                for (let i = 0; i < b; i++) {
                    powerResult *= a;
                }
                setResult(`${powerResult}`);
                break;
            }
            default:
                setResult('');
        }
    };

    //clear button
    const clear=() => {
        setNum1('');
        setNum2('');
        setResult('');
    };

    return{
        num1, setNum1, num2, setNum2, result, calculate,clear
    };
}