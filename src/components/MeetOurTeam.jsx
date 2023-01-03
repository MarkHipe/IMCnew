import React from "react";
import styled from "styled-components";
import emp1 from "../assets/emp1.png";
import emp2 from "../assets/emp2.png";
import emp3 from "../assets/emp3.png";
import emp4 from "../assets/emp4.png";
import emp5 from "../assets/emp5.png";
import emp6 from "../assets/emp6.png";
const MeetOurTeam = () => {
  return (
    <Con>
      <div className="heading">
        <h1>MEET OUR TEAM</h1>
        <span className="text1">MEET OUR TEAM</span>
        <span className="text2">MEET OUR TEAM</span>
      </div>
      <div className="circle"></div>
      <div className="line one"></div>
      <div className="line two"></div>
      <div className="line three"></div>
      <div className="line four"></div>
      <div className="line five"></div>
      <div className="contents">
        <div className="wrapper">
          <div className="left">
            <div className="profWrap one">
              <div className="details">
                <h1>JUAN DELA CRUZ</h1>
                <h4>C.E.O</h4>
              </div>
              <div className="circle2">
                <img src={emp1} alt="" />
              </div>
            </div>{" "}
            <div className="profWrap one">
              <div className="details">
                <h1>JUAN DELA CRUZ</h1>
                <h4>C.E.O</h4>
              </div>
              <div className="circle2">
                <img src={emp3} alt="" />
              </div>
            </div>{" "}
            <div className="profWrap one">
              <div className="details">
                <h1>JUAN DELA CRUZ</h1>
                <h4>C.E.O</h4>
              </div>
              <div className="circle2">
                <img src={emp5} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            {" "}
            <div className="profWrap two">
              <div className="circle2">
                <img src={emp2} alt="" />
              </div>{" "}
              <div className="details">
                <h1>JUAN DELA CRUZ</h1>
                <h4>C.E.O</h4>
              </div>
            </div>{" "}
            <div className="profWrap two">
              <div className="circle2">
                <img src={emp4} alt="" />
              </div>{" "}
              <div className="details">
                <h1>JUAN DELA CRUZ</h1>
                <h4>C.E.O</h4>
              </div>
            </div>{" "}
            <div className="profWrap two">
              <div className="circle2">
                <img src={emp6} alt="" />
              </div>{" "}
              <div className="details">
                <h1>JUAN DELA CRUZ</h1>
                <h4>C.E.O</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Con>
  );
};

const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1400px;
  margin-bottom: 2rem;
  & .heading {
    font-weight: 600;
    font-size: 20px;
    color: #005cb4;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: auto;
    & h1 {
      font-weight: 600;
      font-size: 5rem;
      color: #005cb4;
      margin-left: 4rem;
      position: relative;
    }
    & span {
      font-weight: 600;
      font-size: 8rem;
      color: #bfdefd;
      margin-top: -8rem;
      &.text1 {
        color: #bfdefd7b;
        margin-left: 4.5rem;
      }
      &.text2 {
        color: #7cc0ff25;
        margin-top: -8rem;
      }
    }
  }
  & .circle {
    background: rgba(228, 255, 236, 0.6);
    height: 1000px;
    width: 1000px;
    margin: auto;
    position: absolute;
    border-radius: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  //  align-items: center;
 
  }
  & .line{
    outline:3px dashed #24753B;
    //background-color: #24753B;
    height: 0px;
    width: 40vw;
    margin: 1rem;
    position: absolute;
    z-index: 2;
    &.one{
      transform: rotate(8deg);
      margin-top: -500px;
    }  
    &.two{
      transform: rotate(-16deg);
      margin-top: -100px;
    } 
     &.three{
      transform: rotate(8deg);
      margin-top: 12rem;
    } 
     &.four{
      transform: rotate(-16deg);
      margin-top: 600px;
    } 
     &.five{
      transform: rotate(8deg);
      margin-top:1000px;
    }
  }
  & .contents {
    display: flex;
    width: 80%;
    height: 100%;
    padding: 20px;
    /* justify-content: center;
    align-items: center; */
    margin: auto;
    margin-top: 0rem;

    & .wrapper {
      position: relative;
      z-index: 2;
      display: block;
      // margin-left: -80%;
      margin-top: 5rem;
      display: inline-flex;
      width: 100%;
      & .left {
        width: 50%;
        display: flex;
        flex-direction: column;
      }
      & .right {
        width: 50%;
        flex-direction: column;
        margin-top: 80px;
      }
      & .profWrap {
        position: relative;
        height: 320px;
        margin:  1rem;
        & h1 {
          font-size: 20px;
        }
        & h4 {
          font-size: 16px;
          text-align: center;
          margin-top: -1rem;
          color: #585858;
        }
        & .circle2 {
          height: 200px;
          width: 200px;
          background-color: #005cb4;
          border-radius: 100%;
        }
        display: inline-flex;
        & img {
          height: 300px;
          object-fit: cover;
          border-radius: 200px;
          position: relative;
          margin-top: -100px;
          margin-left: 10px;
          left: 0;
        }
        &.one {
          position: relative;
          top: 0;
          left:10%;
        }
        &.two {
          left: 30%;
        }
      }
    }
  }
`;

export default MeetOurTeam;
