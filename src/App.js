import React, {useState} from 'react';
import ReactDOM from 'react-dom';

console.log('App js is running...');

const App = (props) => {
    const [counter, setCounter] = useState(0);
    const {id,name} = props;

    const addCounter = () => {
        setCounter(parseInt(localStorage.getItem('counter')) + 1);
        localStorage.setItem('counter', counter);      
    }
    const subCounter = () => {
        setCounter(parseInt(localStorage.getItem('counter')) - 1);
        localStorage.setItem('counter', counter);
    }
    const reset = () => {
        setCounter(0);        
    }

    const getDate = () => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        return `${month + 1}/${year}`
    }

    return(
        <div>
            <h3>Testing Environment</h3>
            <p>Some stuff {id}</p>
            <p>Name: {name}</p>
            <p>Date: {getDate()}</p>
            <p>Counter: {localStorage.getItem('counter') ? localStorage.getItem('counter') : counter}</p>
            <button onClick={addCounter}> + </button>
            <button onClick={subCounter}> - </button>
            <button onClick={reset}>Reset</button>

        </div>
    );
}



ReactDOM.render(<App id={1} name="Matteo"/>, document.getElementById('root'));

