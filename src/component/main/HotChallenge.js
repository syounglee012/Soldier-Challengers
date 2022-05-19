import React from "react";
import styled from "styled-components";
import img from "../../shared/images/workout.png"
const HotChallenge = ({cards}) => {

  return (
    <Container>
      <UpperBox>
        <div id="title">
          <div id="title-text"> HOT 챌린지</div>
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
      {cards && cards.map((result, idx) => (
          <div id="box" key={result+idx}>
          <img src={img} alt="img" height="52px" width="52px" />
          <div id="type">
            <p id="p">{result.challengeType}</p>
          </div>
          <div id="title">{result.challengeTitle}</div>
          <div id="count">{result.challengeCnt}명 참여중</div>
        </div>

        ))}
      </LowerBox>
    </Container>
  );
};

export default HotChallenge;

const Container = styled.div``;

const UpperBox = styled.div`
  width: 375px;
  height: 79px;
  background-color: #ffffff;
  border-bottom: 2px solid #151419;
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
    cursor: pointer;
    #type {
      #p {
        border: #151419 1px solid;
        font-size: 16px;
        font-family: Gmarket SansMedium;
        color: #ffffff;
        background-color: #151419;
        height: 26x;
        width: 80px;
        margin: 0px 5px 0 20px;
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
      overflow: hidden;
    }
    #count {
      font-size: 14px;
      color: #151419;
      font-family: Gmarket SansMedium;
      margin: -10px 0 0 3px;
  
    }
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
