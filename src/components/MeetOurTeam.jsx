import React from "react";
import styled from "styled-components";

const MeetOurTeam = () => {
  return (
    <Con>
      <div className="heading">
        <h1>MEET OUR TEAM</h1>
        <span className="text1">MEET OUR TEAM</span>
        <span className="text2">MEET OUR TEAM</span>
      </div>

      <div className="contents">
        <div className="teamCardWrap">
          <div className="card">
            <div className="imageWrap">
              <div className="shadow1">
                <div className="shadow2">
                  <div className="img"></div>
                </div>
              </div>
            </div>
            <div className="details">
              <h1>JUAN DELA CRUZ</h1>
              <h2>C.E.O</h2>
            </div>
          </div>{" "}
          <div className="card">
            <div className="imageWrap">
              <div className="shadow1">
                <div className="shadow2">
                  <div className="img"></div>
                </div>
              </div>
            </div>
            <div className="details">
              <h1>JUAN DELA CRUZ</h1>
              <h2>C.E.O</h2>
            </div>
          </div>{" "}
          <div className="card">
            <div className="imageWrap">
              <div className="shadow1">
                <div className="shadow2">
                  <div className="img"></div>
                </div>
              </div>
            </div>
            <div className="details">
              <h1>JUAN DELA CRUZ</h1>
              <h2>C.E.O</h2>
            </div>
          </div>
        </div>
        <div className="messageCon">
          <div className="content">
            <h1>We Build a Great TEAM</h1>
            <p>
              With the use of wide distribution network and effective marketing
              schemes, we - 8MGM Trading Inc. With the use of wide distribution
              network and effective marketing schemes, we - 8MGM Trading Inc.,
              has managed to grow continually since the day the business was
              established.
            </p>
          </div>
        </div>
      </div>
    </Con>
  );
};

const Con = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
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
  & .contents {
    display: flex;
    width: 80%;
    height: 100%;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    & .teamCardWrap {
      display: flex;
      justify-content: center;
      align-items: center;
    
      & .card {
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 250px;
        background: #fff;
        border-radius: 20px;
        border: 1px solid #eee;
        box-sizing: border-box;
        margin: auto 13px;
        & .imageWrap {
          height: 60%;
          & .shadow1 {
            background: rgba(124, 191, 255, 0.2);
            border-radius: 100%;
            height: 150px;
            width: 150px;
            margin: 13px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3px;
            & .shadow2 {
              background: rgba(0, 92, 180, 0.4);
              border-radius: 100%;
              height: 140px;
              width: 140px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 3px;
              & .img {
                background: #005cb4;
                border-radius: 100%;
                height: 130px;
                width: 130px;
              }
            }
          }
        }
        & .details {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 10px;
          margin: 15px auto;
          & h1 {
            font-size: 16px;
            font-weight: bold;
            margin: 10px auto;
          }
          & h2 {
            font-size: 13px;
            font-weight: bold;
            margin: 10px auto;
            margin-top: -0.8rem;
            color: #333;
          }
        }
      }
    }
    & .messageCon {
        & .content{
            width: 240px;
            height: 300px;
            margin: auto;
            padding: 1.2rem;
            border-radius: 20px;
            background: #005CB4;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            & h1{
                font-size: 20px;
                font-weight: 600;
                margin: 1rem auto;
                color: #ffffff;
            }
            & p{
                font-size: 13px;
                font-weight: 400;
                margin: 1.5rem auto;
                color: #ffffff;
                line-height: 20px;
            }
           

    }
  }}
`;

export default MeetOurTeam;
