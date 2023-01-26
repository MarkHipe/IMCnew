import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

const NewsNUpdate = () => {
  return (
    <Con>
      <div className="wrapper">
        <div className="card">
          <img
            src="http://cdn.cnn.com/cnnnext/dam/assets/211223182641-03-storylines-residential-cruise-ship-concept.jpg"
            alt=""
          />
          <div className="date">
            <span>08</span>
            <span>FEB</span>
          </div>
          <div className="label">
            <h6>By Onin Reyes, On October 27, 2022</h6>
            <h2>Blessing LCT-IMC 25</h2>
            <p>
              The newly acquired vessel LCT IMC 25 will soon be deployed to open
              sea for commercial...
            </p>
            <h5>
              Read More <BsArrowRight className="icon" />
            </h5>
          </div>
        </div>
      </div>
    </Con>
  );
};

const Con = styled.div`
  padding: 3rem;
  & .wrapper {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    & .card {
      position: relative;
      border: 1px solid #eee;
      width: 90%;
      & img {
        height: 250px;
        width: 100%;
        object-fit: cover;
      }
      & .date {
        position: absolute;
        top: 1rem;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        border-radius: 5px;
        margin-left: 1rem;
        & span {
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 3px;
        }
      }
      & .label {
        padding: 1rem;
        & h6 {
          color: #5e5e5e;
          font-weight: 600;
        }
        & h2 {
          font-weight: 400;
        }
        & p {
          color: #5e5e5e;
          font-size: 14px;
          line-height: 25px;
        }
        & h5 {
          display: flex;
          margin-top: 0;

          & .icon {
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
`;

export default NewsNUpdate;
