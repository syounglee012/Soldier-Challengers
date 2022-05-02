import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "../pages/Main";
import Detail from "../pages/Main";
import Login from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import MyUser from "../pages/MyUser";
import Chat from "../pages/Chat";
import BeginPage from "../pages/test/BeginPage";
import QuestionPage from "../pages/test/QuestionPage";

function App() {
  return (
    <Background>
      <DivBox>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/postDetail" element={<Detail />}></Route>
            <Route exact path="/user/login" element={<Login />}></Route>
            <Route exact path="/user/signup" element={<SignUp />}></Route>
            <Route exact path="/detail/chat" element={<Chat />}></Route>
            <Route exact path="/main/preTest" element={<BeginPage />}></Route>
            <Route exact path="/main/preTest/question" element={<QuestionPage />}></Route>
            <Route exact path="/myPage" element={<MyUser />}></Route>
          </Routes>
        </Router>
      </DivBox>
    </Background>
  );
}

const DivBox = styled.div`
  margin: auto;
  max-width: 375px;
  max-height: 812px;
  width: 100%;
  height: 100%;
  border:1px solid black;
`;

const Background = styled.div`
  max-width:100%;
  max-height: 100%;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

export default App;
