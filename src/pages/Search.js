import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as searchActions } from "../redux/modules/search";
import searchIcon from "../shared/icons/SearchIcon.png";
import logo from "../shared/images/Hand-logo.png";
import img from "../shared/images/workout.png";
const Nav = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = React.useState("");
  const results = useSelector((state) => state.search.challenges);
  const searchHandler = () => {
    dispatch(searchActions.searchDB(keyword));
  };

  return (
    <Container>
      <div className="nav">
        <img id="logo" src={logo} alt="img" />
      </div>
      <div className="top">
        <div className="arrow">
          <img src={searchIcon} alt="search" width="33px" height="33px" />
        </div>
        <input
          id="inputBox"
          value={keyword}
          placeholder="| 키워드를 입력하세요"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </div>
      <UpperBox>
        <div id="title">
          <div id="title-text"> {keyword}</div>
        </div>
      </UpperBox>
      <MiddleBox>
        <div id="card">운동</div>
        <div id="card">독서</div>

        <div id="card">어학</div>
        <div id="card">자격증</div>

        <div id="card">코딩</div>
      </MiddleBox>
      <LowerBox>
        {results.map((result, idx) => {
          <div id="box">
          <img src={img} alt="img" height="52px" width="52px" />
          <div id="type">
            <p id="p">{result.challengeType}</p>
          </div>
          <div id="title">{result.challengeTitle}</div>
          <div id="count">{result.challengeCnt}명 참여중</div>
        </div>

        })}
        

      </LowerBox>

      <NextButton onClick={searchHandler}>검색하기</NextButton>
    </Container>
  );
};

export default Nav;
const Container = styled.div`
  display: block;
  max-height: 100%;
  max-width: 375px;
  height: 100vh;
  width: 100%;
  border: 2px solid #151419;
  position: relative;
  .nav {
    width: 375px;
    height: 44px;
    background-color: #151419;
    #logo {
      width: 200px;
    }
  }
  .top {
    display: flex;
    height: 100px;
    width: 375px;
    border-top: 2px solid #151419;
    background-color: #1fb57e;

    .arrow {
      margin: 50px 0px 0px 20px;
      cursor: pointer;
    }
    #inputBox {
      width: 300px;
      height: 42px;
      padding: 16px;
      outline: none;
      border: none;
      box-sizing: border-box;
      font-size: 20px;
      margin: 50px 0 0 3px;
      background-color: #1fb57e;
      font-family: Gmarket SansMedium;
    }
  }
`;

const UpperBox = styled.div`
  width: 375px;
  height: 79px;
  background-color: #ffffff;
  border-bottom: 2px solid #151419;
  border-top: 2px solid #151419;

  #title {
    padding: 30px 0 0 15px;
    #title-text {
      color: #b62323;
      font-size: 26px;
      font-family: Gmarket SansBold;
    }
  }
`;

const MiddleBox = styled.div`
  display: flex;
  height: 47px;
  border-bottom: #151419 2px solid;
  #card {
    text-align: center;
    width: 60px;
    height: 20px;
    border: 1px solid #151419;
    font-size: 18px;
    font-family: Gmarket SansMedium;
    margin: 10px 0 0 10px;
    cursor: pointer;
    &:hover {
      background-color: #151419;
      color: #ffffff;
    }
  }
`;

const LowerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 378px;
  max-height: 381px;
  #box {
    text-align: center;
    height: 130px;
    width: 125px;
    border-right: 2px solid #151419;
    border-bottom: 2px solid #151419;
    margin-right: -2px;

    #type {
      #p {
        border: #151419 1px solid;
        font-size: 16px;
        font-family: Gmarket SansMedium;
        color: #ffffff;
        background-color: #151419;
        height: 26x;
        width: 45px;
        margin: 0 5px 0 38px;
      }
    }
    #title {
      width: 120px;
      height: 30px;
      font-size: 16px;
      color: #1fb57e;
      font-family: Gmarket SansBold;
      border: 3px;
      margin: 10px 0 0 2px;
    }
    #count {
      font-size: 14px;
      color: #151419;
      font-family: Gmarket SansMedium;
      margin: -10px 0 0 3px;
    }
    cursor: pointer;
    &:hover {
      background-color: #1fb57e;
      border-left: 2px solid #151419;
      margin: 0 -2px 0 -2px;
      color: #151419;
      #title {
        color: #ffffff;
      }
    }
  }
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 375px;
  height: 80px;
  border: none;
  outline: none;
  color: #1fb57e;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #ffffff;
  border-top: 2px solid #151419;
  &:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: #1fb57e;
  }
`;