import React, { useState } from "react";
import axios from "axios";

import userLogo from "./assets/user.png";
import showPassword from "./assets/blind.png";
import unshowPassword from "./assets/see.png";

import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisibility, setIsVisibility] = useState(true);

  const OnSubmit = (email, password) => {
    axios
      .post("/anywhere", { email: email, password: password })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

     console.log(`Email: ${email}\nPassword: ${password}`) 
  };

  return (
    <div className="form-container">
      <form
        className="form-box"
        id="my-form"
        onSubmit={(e) => {
          e.preventDefault();
          OnSubmit(email, password);
        }}
      >
        <img src={userLogo} alt="" className="user" />
        <h1>Welcome</h1>
        <input
          type="email"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-container">
          <input
            type={isVisibility ? "password" : "text"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            alt="show password"
            src={isVisibility ? showPassword : unshowPassword}
            onClick={() => {
              setIsVisibility(!isVisibility);
            }}
            className="password__visibility"
          ></img>
        </div>
        <input type="submit" name="" value="Login" form="my-form" />
        <a href="/#" className="forgot__link">
          Forgot password?
        </a>
        <a href="/#" className="forgot__link">
          Register
        </a>
      </form>
    </div>
  );
};

export default App;
