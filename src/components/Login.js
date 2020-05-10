import React, { useState } from 'react';
import { loginAPIcall } from './../services/apiService';
import './../App.css';

/**
 * @name Login
 * @description as name suggest it is Login page of the App
 * I have created a functional component instead of class component.
 * By using react hooks, This components has username and password feilds
 * and a login button. On click of login, login API is called and if it is success 
 * it takes you to userList page, else it shows you the error
 */


const Login = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const login = () => {
        setIsLoading(true);
        loginAPIcall(username, password).then(res => {
            localStorage.setItem('token', res.token);
            setIsLoading(false);
            props.goToUsers();
        })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
                setError(error.message);
            });
    }

    const loginDiv = {
        width: '300px',
        height: '300px',
        margin: 'auto',
        textAlign: 'center'
    }

    const loadingStyle = {
        fontSize: '25px',
        textAlign: 'center'
    }

    const loginComp = (
        <div style={loginDiv}>
            <input className="btn-input" type="text" placeholder="Username"
                onChange={e => setUsername(e.target.value)}
                value={username}
            />
            <br />
            <input className="btn-input" type="password" placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
            <br />
            {error.length ? <><span>{error}</span> <br /></> : null}
            <input className="btn-input btn" type="submit" onClick={login} value="Login" />
        </div>
    );

    const loading = (<div style={loadingStyle}>Logging in...</div>)

    return isLoading ? loading : loginComp;
}

export default Login;