import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import './index.css'
import { input_check } from './input_check';


function App() {
    const rawDict = require("./dictionary.json")
    const [one, setOne] = useState("")
    const [two, setTwo] = useState("")
    const [three, setThree] = useState("")
    const [four, setFour] = useState("")
    const [five, setFive] = useState("")
    const [dictionary, setDictionary] = useState([])
    const [good, setGood] = useState("")
    const [bad, setBad] = useState("")
    const [hasStarted, setHasStarted] = useState(false)
    const [temp, setTemp] = useState([])

    useEffect(() => {
        setDictionary(rawDict.data)
    }, [])

    const checkInput = () => {
        setTemp(input_check(one, two, three, four, five, good, bad, dictionary))
        setHasStarted(true)
    }

    return (
        <div className='full-page'>
            <h1>Wordle Solver</h1>
            <div className='full-width'>
                <div className='option-box'>
                    <div className='fields'>
                        <div>
                            <label>Good letters: </label>
                            <br />
                            <input value={good.toUpperCase()} onChange={(event) => setGood(event.target.value.toLowerCase())} className="field" type="text" />
                        </div>
                        <div>
                            <label>Bad letters: </label>
                            <br />
                            <input value={bad.toUpperCase()} onChange={(event) => setBad(event.target.value.toLowerCase())} className="field" type="text" />
                        </div>
                    </div>
                    <div className='five-boxes'>
                        <div>
                            <label className='green-letters'>Green letters:</label>
                            <div className='position-fields'>
                                <input type="text" value={one.toUpperCase()} onChange={(event) => setOne(event.target.value.toLowerCase())} maxlength="1" />
                                <input type="text" value={two.toUpperCase()} onChange={(event) => setTwo(event.target.value.toLowerCase())} maxlength="1" />
                                <input type="text" value={three.toUpperCase()} onChange={(event) => setThree(event.target.value.toLowerCase())} maxlength="1" />
                                <input type="text" value={four.toUpperCase()} onChange={(event) => setFour(event.target.value.toLowerCase())} maxlength="1" />
                                <input type="text" value={five.toUpperCase()} onChange={(event) => setFive(event.target.value.toLowerCase())} maxlength="1" />
                            </div>
                        </div>
                    </div>
                    <div className='submit-button'><button onClick={checkInput} >Find Words</button></div>
                </div>
                {hasStarted ?
                    <div className="words-box">
                        {temp.map((word, index) => (
                            <p>{word.toUpperCase()}</p>
                        ))}
                    </div>
                    :
                    <></>}
                <footer>© 2022 Micah Elias</footer>
            </div >
        </div >
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
