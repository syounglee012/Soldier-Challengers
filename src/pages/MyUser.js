//YJ

//마이페이지 메인, 아이콘, 프로필, 아이디, 이미지 등등

import React, {useEffect} from "react";
import styled from "styled-components";
import {message} from 'antd';
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import { history } from "../redux/configureStore";

import Profile from "../component/user/Profile";

const MyUser = () => {
  let cookie = document.cookie;
  
  useEffect(() => {
    if (!cookie) {
      message.warning("로그인 후 이용해주세요");
      history.replace("/");
      window.location.reload();

      return;
    }
  }, []);

    return (
        <Wrap>
        <Profile />
        <Footer />
        <Navigation />
        </Wrap>
    )
}
const Wrap = styled.div`
  max-width: 375px;
  width: 375px;
  background-color: #fff;
  border: 2px solid #151419;
`;

export default MyUser;