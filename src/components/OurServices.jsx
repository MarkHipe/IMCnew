import React, { useState } from "react";
import styled from "styled-components";
import img6 from "../assets/serviceLogo.png";
import { BsArrowRight } from "react-icons/bs";
const cardData = [
  {
    title: "School",
    content:
      "With the use of wide distribution network and effective marketing schemes, we - 8MGM Trading Inc., has managed to grow continually since the day the business was established.",
    img: img6,
  },
  {
    title: "Hospital",
    content:
      "With the use of wide distribution network and effective marketing schemes, we - 8MGM Trading Inc., has managed to grow continually since the day the business was established.",
    img: img6,
  },
  {
    title: "Office",
    content:
      "With the use of wide distribution network and effective marketing schemes, we - 8MGM Trading Inc., has managed to grow continually since the day the business was established.",
    img: img6,
  },
  {
    title: "Casino",
    content:
      "With the use of wide distribution network and effective marketing schemes, we - 8MGM Trading Inc., has managed to grow continually since the day the business was established.",
    img: img6,
  },
];

const OurServices = () => {
  const [active, setactive] = useState(0);

  return (
    <Con>
      <div className="heading">
        <h1>OUR SERVICES</h1>
        <p>
          8MGM Trading Inc. caters a wide range of products to a variety of
          customers. We supply high value of quality products and equipment for:
        </p>
      </div>
      <div className="circle one"></div>
      <div className="circle two"></div>
      <div className="circle three"></div>
      <div className="circle four"></div>
      <div className="circle five"></div>
      <div className="circle six"></div>
      <div className="circle seven"></div>
      <div className="circle eight"></div>
      <div className="contents">
        <div className="previewCon">
          <div className="description">
            <div className="wrap">
              <h1>{cardData[active].title}</h1>
              <h3> We provide school supplies</h3>
              <p>{cardData[active].content}</p>
            </div>
          </div>
          <div className="imageWrap">
            <img src={cardData[active].img} alt="" />
          </div>
        </div>
        <div className="cardWrap">
          {cardData.map((item, i) => {
            return (
              <div
                onClick={() => {
                  setactive(i);
                }}
                onMouseOver={() => {
                  setactive(i);
                }}
                className={active === i ? "card active" : "card"}
                key={i}
              >
                <div className="head">
                  <img src={item.img} alt={item.title} />
                  <h2>{item.title}</h2>
                </div>
              </div>
            );
          })}
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
  //background: linear-gradient(150.33deg, #b5ffca 5.97%, #4aff7e 82.86%);
  padding-bottom: 2rem;
  color: #424242;
  & .heading {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & h1 {
      font-size: 3rem;
      color: #24753b;
      border-bottom: 1px solid;
    }
    & p {
      color: #4ca465;
    }
  }
  & .circle {
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background-color: #24753baa;
    position: absolute;
    &.one {
      transform: scale(0.5);
      margin-top: -8rem;
      margin-left: -50%;
    }
    &.two {
      transform: scale(1.2);
      margin-top: -10rem;
      margin-left: -45%;
    }
    &.three {
      transform: scale(0.8);
      margin-top: 20rem;
      margin-left: -40%;
    }
    &.four {
      transform: scale(1.5);
      margin-top: 29rem;
      margin-left: 50%;
    }
    &.five {
      transform: scale(0.5);
      margin-top: 25rem;
      margin-left: 45%;
    }
    &.six {
      transform: scale(0.4);
      margin-top: 30rem;
      margin-left: -80%;
    }
    &.seven {
      transform: scale(1.3);
      margin-top: 30rem;
      margin-left: -95%;
    }
    &.eight {
      transform: scale(0.8);
      margin-top: 34rem;
      margin-left: -80%;
    }
  }
  & .contents {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & .previewCon {
      width: 75%;
      display: flex;
      & .description {
        width: 35%;
        display: flex;
        // justify-content: center;
        // align-items: center;
        margin: 2rem 3rem;

        flex-direction: column;
        & .wrap {
          margin: 3rem auto;
          & h1 {
            color: #24753b;
          }
          & h3 {
            color: #5cab72;
            font-size: 1.5rem;
            margin-top: -1rem;
          }
          & p {
            width: 80%;
          }
        }
      }
      & .imageWrap {
        width: 60%;
        display: flex;
        justify-content: center;
        margin: auto;
        height: 500px;
        width: 500px;
        background-color: #24753b;
        border-radius: 100%;
      }
    }
    & .cardWrap {
      display: flex;
      flex-direction: column;
      width: 25%;
      // justify-content: flex-end;
      align-items: flex-end;
      & .card {
        background-color: #fff;
        cursor: pointer;
        width: 250px;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        border-bottom-left-radius: 100px;
        border-top-left-radius: 100px;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
        animation: slide-out 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          @keyframes slide-out {
            0% {
              width: 300px;
            }
           
            100% {
              width: 250px;
            }
          }
          & img {
            background-color: #fff;
          }
          & .head {
            & h2 {
              color: #fff;
              font-weight: 500;
            }
          }
        &:hover {
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          transform: scale(1.01);
          animation: scale-up 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        & img {
          height: 100px;
          width: 100px;
          background-color: #24753b;
          border-radius: 100%;
        }
        &.active {
          background-color: #24753b;
          animation: slide-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          @keyframes slide-in {
            0% {
              width: 250px;
            }
           
            100% {
              width: 300px;
            }
          }
          & img {
            background-color: #fff;
          }
          & .head {
            & h2 {
              color: #fff;
              font-weight: 500;
            }
          }
        }

        & .head {
          display: flex;
          justify-content: space-around;
          align-items: center;

          padding: 1rem;
          & h2 {
            font-size: 1.3rem;
            color: #000000;
            font-weight: 500;
          }
        }
        & p {
          width: 80%;
          margin: 2rem auto;
          font-size: 13px;
          line-height: 26px;
        }
        & span {
          display: flex;
          align-self: flex-end;
          margin-right: 2rem;
          font-size: 12px;
          color: #6bb5ff;
          margin-bottom: 1rem;
          cursor: pointer;
          & .icon {
            margin-left: 5px;
          }
        }
      }
    }
  }
  @keyframes scale-up {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.005);
    }
    100% {
      transform: scale(1.01);
    }
  }
`;

export default OurServices;
