import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {CurrentUserContext} from './UserContext';

//debugger;

function Login() {

    const [login, setLogin] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const userContext = useContext(CurrentUserContext);

    return (
        <div>
            <p></p>
            login
            <input type="text" onChange={ (eventOnChangeProp) => {
                setLogin(eventOnChangeProp.target.value)
                setError("")
            }}></input>
            <button onClick={() => {
                if (login === "alex") {
                    userContext?.saveLogin(login)
                    navigate('registry', {replace: false})
                } else {
                    setError("Не верный логин")
                }
            }}> login
            </button>
            <div>{error === "" ? '': error + ': ' + login}</div> </div>
    )
}

export default Login