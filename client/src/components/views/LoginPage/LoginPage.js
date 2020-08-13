import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const onEmailHandle = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordHandle = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();

    console.log(`Email ${Email}`);
    console.log(`Password ${Password}`);
    let data = {
      email: Email,
      password: Password,
    };
    dispatch(loginUser(data)).then((res) => {
      if (res.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("error");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandle}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandle} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandle} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default withRouter(LoginPage);
