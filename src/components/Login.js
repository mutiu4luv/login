import React, { useState, useEffect } from "react";
import { useHistory, history } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  }, [history]);

  async function onSubmit(event) {
    event.preventDefault();

    let item = { password: password, email: email };
    console.log(item);
    axios
      .post("https://Kidsio.herokuapp.com/users/login", item)
      .then((response) => {
        if (response.data.hasError === true) {
          console.log("did not work");
        } else {
          console.log("login");
          history.push("/Profile");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
    // let result = await fetch("https://Kidsio.herokuapp.com/users/login", {
    //   method: "POST",
    //   Headers: {
    //     "Content-type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(item),
    // });
    // result = await result.json();
    // console.log(result);
    // localStorage.setItem("user", JSON.stringify(result));
    //
    // history.push("/profile");
  }
  return (
    <div className="login">
      <div>
        {" "}
        <h1>CRL Login</h1>
      </div>
      <div>sign in with your crl account</div>
      <form>
        <div>
          <label>
            <h5 className="con">Email Address</h5>
          </label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>
            <h5 className="password">Password</h5>
          </label>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          onClick={onSubmit}
          className="submit"
          type="submit"
          name="submit"
          value="Continue"
        ></input>
      </form>
    </div>
  );
}

export default Login;
