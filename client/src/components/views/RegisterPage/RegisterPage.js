import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";
const RegisterPage = (props) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const { name, email, password, confirmPassword } = form;
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호가 동일하지 않습니다.");
    }

    let data = {
      email,
      name,
      password,
      confirmPassword,
    };

    dispatch(registerUser(data)).then((res) => {
      if (res.payload.success) {
        props.history.push("/login");
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
        <input type="email" value={email} name="email" onChange={onChange} />

        <label>Name</label>
        <input type="text" value={name} name="name" onChange={onChange} />

        <label>Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={onChange}
        />
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default withRouter(RegisterPage);
