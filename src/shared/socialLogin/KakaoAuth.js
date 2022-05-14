import React from "react";
import { useDispatch } from "react-redux";
import { ActionCreators as userActions } from "../../redux/modules/user";

const KakaoAuth = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  React.useEffect(() => {
     dispatch(userActions.kakaoLogin(code));
  }, [dispatch, code]);

  return null;
};

export default KakaoAuth;