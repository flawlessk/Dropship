import React, { useState } from "react";
import "./Register.css";
import { useHistory } from "react-router";
import { register } from "../../API";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const history = useHistory();

    const performRegister = (e) => {
        e.preventDefault();
        register(firstName, lastName, email, password, passwordConfirmation)
        .then(res => {
            registered();
        })
        .catch(error => {
            alert("Ooooops..Something went wrong!")
        })
    }
    
    const registered = () => {
        history.push("/login");
    }

    return(
        <form className="Register" onSubmit={performRegister}>
            <div>
                <input 
                type="text" 
                name="firstname" 
                placeholder="Firstname.." 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required />
            </div>
            <div>
                <input 
                type="text" 
                name="lastname" 
                placeholder="Lastname.." 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required />
            </div>
            <div>
                <input 
                type="email" 
                name="email" 
                placeholder="Email.." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div>
                <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </div>
            <div>
                <input 
                type="Password" 
                name="ConfirmPassword" 
                placeholder="Confirm Password" 
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required />
            </div>
            <div>
                <input type="submit" value="Register" className="sign-up-btn" />
            </div>
        </form>
    )
}
export default Register;