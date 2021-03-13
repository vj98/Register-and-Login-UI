import React, { useState } from "react";
import { Card, TextField } from "@material-ui/core";
import "./Register.css";
import facebookicon from "../Image/png/facebook.png";
import googleicon from "../Image/png/google.png";

const Register = () => {
  const [name, setName] = useState("Friend");
  const [password, setPassword] = useState("");
  var email = "";

  const changeName = (e) => {
    e.preventDefault();

    email = e.target.value;
  };

  const changePassword = (e) => {
    e.preventDefault();

    if (email.length > 0) {
      let temp = "";
      for (let i = 0; i < email.length; i++) {
        if ((email[i] >= "0" && email[i] <= "9") || email[i] === "@") {
          break;
        }
        temp += email[i];
      }

      temp = temp.charAt(0).toUpperCase() + temp.substring(1);
      setName(temp);
    }

    setPassword(e.target.value);
  };

  return (
    <div className="background">
      <div className="container">
        <Card className="card">
          <div className="content-card">
            <span>Hello,</span>
            <span>{name}!</span>
            <TextField
              className="mt-2"
              id="standard-search"
              label="Email"
              onChange={(e) => changeName(e)}
            />
            <TextField
              className="mt-3"
              id="standard-search"
              label="Password"
              type="password"
              onChange={(e) => changePassword(e)}
            />
          </div>

          {name.length > 0 && password.length > 0 && (
            <div className="btn-color ">
              <div className="margin-btn">
                <div className="main">
                  <div>Register</div>
                  <div className="social">
                    <img src={facebookicon} className="icon" alt="fb" />
                    <label className="ml-2 mr-2">{" | "}</label>
                    <img src={googleicon} className="icon" alt="gol" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {password.length === 0 && (
            <div className="btns">
              <div className="margin-btn">
                <div className="main">
                  <div>Register</div>
                  <div className="social">
                    <img src={facebookicon} className="icon" alt="fb" />
                    <label className="ml-2 mr-2">{" | "}</label>
                    <img src={googleicon} className="icon" alt="gol" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Register;
