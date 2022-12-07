import React from "react";
import styled from "styled-components";
import img6 from "../assets/image6.svg";
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
  return (
    <Con>
      <div className="heading">
        <h1>OUR SERVICES</h1>
        <p>
          8MGM Trading Inc. caters a wide range of products to a variety of
          customers. We supply high value of quality products and equipment for:
        </p>
      </div>
      <div className="cardWrap">
        {cardData.map((item, i) => {
          return (
            <div className="card" key={i}>
              <div className="head">
                <img src={item.img} alt={item.title} />
                <h2>{item.title}</h2>
              </div>
              <p>{item.content}</p>
              <span>
                read more {"  "}
                <BsArrowRight className="icon" />
              </span>
            </div>
          );
        })}
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
  background: linear-gradient(150.33deg, #b5ffca 5.97%, #4aff7e 82.86%);
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
      color: #000000;
      border-bottom: 1px solid;
    }
  }
  & .cardWrap {
    display: flex;
    & .card {
      background-color: #fff;
      width: 250px;
      margin: auto 10px;
      border-radius: 20px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
      &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.01);
        animation: scale-up 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }

      & .head {
        display: flex;
        justify-content: space-around;
        align-items: center;

        padding: 1rem;
        & h2 {
          font-size: 1.3rem;
          color: #000000;
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
