import React from "react";


function LoginPage(){
    return <div className="loginpage">
        <h1>Trackr</h1>
        <div className="LoginBox">
            <h2>Login</h2>
            <input type={"text"} placeholder={"Enter Username"}/>
            <input type={"password"} placeholder={"Enter Password"}/>
            <button>Submit</button>
        </div>
    </div>
}

export default LoginPage;