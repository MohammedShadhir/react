import React, {useState} from 'react'
import '../Main/Calculater.css'

function Calculater() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = [
        '/',
        '*',
        '+',
        '-',
        '.'
    ];
    const updateCalc = value => {
        if (ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))) {
            return;
        }
        setCalc(calc + value);
        if (! ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const createbtn = () => {
        const btn = [];
        for (let i = 0; i < 10; i++) {

            btn.push (
                <button onClick={
                        () => updateCalc(i.toString())
                    }
                    key={i}>
                    {i}</button>
            )

        }
        return btn
    }
    const equal = () => {
        setCalc(eval(calc).toString());
    }
    const deleteLast = () => {
        if (calc == "") {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);


    }
    return (
        <div className='Main'>
            <div className='calculater'>
                <div className="display">
                    {
                    result ? <span id='calcvalue'>
                        {result}</span> : ""
                }
                    {
                    calc || "0"
                } </div>
                <div className="operaters">

                    <button onClick={
                        () => updateCalc('/')
                    }>/</button>
                    <button onClick={
                        () => updateCalc('*')
                    }>*</button>
                    <button onClick={
                        () => updateCalc('+')
                    }>+</button>
                    <button onClick={
                        () => updateCalc('/')
                    }>-</button>

                    <button onClick={deleteLast}>del</button>
                </div>
                <div className="num">
                    {
                    createbtn()
                }
                    <button onClick={
                        () => updateCalc('0')
                    }>0</button>
                    <button onClick={
                        () => updateCalc('.')
                    }>.</button>
                    <button id='equal'
                        onClick={equal}>=</button>

                </div>

            </div>

        </div>
    )
}

export default Calculater
