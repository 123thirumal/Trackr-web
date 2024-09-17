import React from "react";
import { Link } from 'react-router-dom';

function LoginPage(){
    return <div className="loginpage">
        <h1>Trackr</h1>
        <div className="LoginBox">
            <h2>Login</h2>
            <input type={"text"} placeholder={"Enter Username"}/>
            <input type={"password"} placeholder={"Enter Password"}/>
            <Link to='/homePage'><button>Submit</button></Link>
        </div>
    </div>
}

export default LoginPage;