import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
export default function (SpecificComponent, option, adminRoute = null) {
  // null 아무나 출입 가능
  // true 로그인한 유저만 출입 가능한 페이지
  // flase 로그인한 유저는 출입 불가능한 페이지

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log(res);
        //로그인 한 상태
        if (res.payload.isAuth) {
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) props.history.push("/");
          }
        } else {
          //로그인 하지 않은 상태
          if (option) {
            props.history.push("/login");
          }
        }
      });
    });
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}