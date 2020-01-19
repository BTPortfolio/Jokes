import React, { useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

const Login = (props) => {

    const [credentials, setCredentials] = useState({
        username: 'username',
        password: 'password'
    });

    const [loggedIn, setLoggedIn] = useState(false)

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/auth/login", credentials)
            .then(res => {
                console.log("res", res)
                localStorage.setItem("token", res.data.token);
                if ("token" ? setLoggedIn(true) : null);
                return props.history.push("/loggedIn")
            })
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };


    return (
        <div>
            <h2>{loggedIn ? `Welcome back ${credentials.username}` : "Please log in"}</h2>
            <form onSubmit={login}>
                <input
                    className="inputs"
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    className="inputs"
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    );
};

export default Login;