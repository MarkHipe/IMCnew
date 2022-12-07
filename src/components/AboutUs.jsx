import React from "react";
import styled from "styled-components";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
const AboutUs = () => {
  return (
    <Con>
      <div className="wrap">
        <div className="about">
          <span>
            <h1>ABOUT US</h1>
          </span>
          <div className="text">
            <p>
              We are a private trading company located at the popular waterfront
              promenade of Manila, Roxas Boulevard, which caters a wide range of
              products to a variety of customers. We supply high value of
              quality products and equipment for schools, hospitals, offices,
              casinos and other different industries. We also offer unique and
              compelling merchandise perfect for souvenirs, giveaways and other
              related occasions.
            </p>
          </div>
        </div>
        <div className="mission">
          <div className="img">
            <img src={image3} alt="" />
          </div>
          <div className="text">
            <div className="head">
              <h1>OUR MISSION</h1>
              <span>
                <h1>OUR MISSION</h1>
              </span>
            </div>
            <p>
              Guided by our mission to relentlessly deliver the best possible
              product, service, quality and value to our customers, 8MGM Trading
              Inc. had formed an impeccable amount of positive feed backs from
              both past and present clients which are several industry players
              and government establishments.
            </p>
          </div>
        </div>
        <div className="missionp2">
          <div className="text">
            <p>
              With the use of wide distribution network and effective marketing
              schemes, we - 8MGM Trading Inc., has managed to grow continually
              since the day the business was established.
            </p>
          </div>
          <div className="img">
            {" "}
            <img src={image4} alt="" />
          </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  margin: auto;
  height: 100%;
  padding: 1rem;
  & .wrap {
    width: 80%;
    & .about {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      & span {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        & h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
      }
      & .text {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem;
        & p {
          width: 90%;
          font-size: 15px;
          background-color: #e1f0ff;
          padding: 1rem;
          color: #363636;
          font-weight: 500;
        }
      }
    }
    & .mission {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      & .img {
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150%;
        height: 100%;
        & img {
          height: 300px;
          width: 500px;
        }
      }
      & .text {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem;
        margin-right: 4rem;
        flex-direction: column;
        & h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        & p {
          width: 100%;
          font-size: 15px;
          //background-color: #e1f0ff;
          padding: 1rem;
          color: #363636;
          font-weight: 500;
        }
        & span {
          position: absolute;
          color: #a7a7a73c;
          margin-top: -7.5rem;
          margin-left: -2rem;
        }
      }
    }
    & .missionp2 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      & .img {
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        & img {
          height: 300px;
          width: 400px;
          margin-right: 4rem;
        }
      }
      & .text {
        width: 150%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 3rem;
        flex-direction: column;
        & p {
          width: 80%;
          font-size: 15px;
          background-color: #e1f0ff;
          padding: 1rem;
          color: #363636;
          font-weight: 500;
          margin: auto;
        }
      }
    }
  }
`;

export default AboutUs;
