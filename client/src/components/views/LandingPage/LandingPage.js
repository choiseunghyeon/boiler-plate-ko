import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
const LandingPage = (props) => {
  const onClick = () => {
    axios.get(`/api/users/logout`).then((res) => {
      if (res.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
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
      <h2>시작 페이지</h2>
      <button onClick={onClick}>로그아웃</button>
    </div>
  );
};

export default withRouter(LandingPage);
