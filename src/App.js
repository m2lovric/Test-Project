import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

console.log('App js is running...');

const App = (props) => {
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState({
        id : 0,
        username : '',
        password : ''
    });
    const {id,name} = props;

    const setToValue = (value) => {
        setCounter(value);
    }

    const setUserAcc = () => {
        const data = {
            id : user.id + 1,
            username : 'Matteo',
            password : '123456'
        }
        setUser(data);
    }

    const getDate = () => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        return `${month + 1}/${year}`
    }

    useEffect(() => {
        document.getElementById('submitForm').addEventListener("click",(e) => {
            e.preventDefault();
            const username = document.getElementsByName("username")[0].value;
            console.log(username);
        })
        setUser({
            username : document.getElementsByName('username')[0].value,
            password : document.getElementsByName('password')[0].value
        });
        
    });
    
    return(
        <div>
            <h3>Testing Environment</h3>
            <p>Some stuff {id}</p>
            <p>Name: {name}</p>
            <p>Date: {getDate()}</p>
            <p>Counter: {counter}</p>
            
            <button onClick={() => setToValue(counter + 1)}> + </button>
            <button onClick={() => setToValue(counter - 1)}> - </button>
            <button onClick={() => setToValue(0)}>Reset</button>
            <form>
                <p>Username : </p>
                <input type="text" name="username"/>
                <p>Password : </p>
                <input type="password" name="password" id=""/>
                <button id="submitForm" type="submit" onClick={setUserAcc}>Register</button>    
            </form>
            <Display counter = {counter}/>
            <p>{user.id} {user.username}</p>           
        </div>
    );
}

const Display = ({counter}) => {
    return(
        <div>
            <p>{counter}</p>
        </div>
    )
}

ReactDOM.render(<App id={1} name="Matteo"/>, document.getElementById('root'));