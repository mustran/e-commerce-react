import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import "./signin.scss";
import CustomButton from "../custom-button/CustonButton";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        setEmail("");
        setPassword("");
    };

    const handleChange = e => {
        const { value, name } = e.target;
        console.log(name);
        console.log(value);
        switch (name) {
            case "password":
                return setPassword(value);
            case "email":
                return setEmail(value);
            default:
                return;
        }
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleSubmit={e => setEmail(e.target.value)}
                    handleChange={handleChange}
                    label="email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleSubmit={e => setPassword(e.target.value)}
                    handleChange={handleChange}
                    label="password"
                    required
                />
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    );
};

export default SignIn;
