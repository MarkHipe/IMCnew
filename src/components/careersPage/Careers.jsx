import React from "react";
import { AiFillFileText } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Careers = () => {
  return (
    <Con>
         <div className="iso">
        <AiFillFileText className="icon"/>
        <div className="details">
          <h6>CERTIFIED COMPANY</h6>
          <h6>ISO 9001-2015</h6>
        </div>
      </div>
      <div className="wrap">
        <div className="nav">
          <Link className="link" to="/">
            Home
          </Link>
          <BsArrowRight className="icon" />
          <Link className="link" to="/careers">
            Careers
          </Link>
        </div>
        <h1>Careers</h1>
      </div>
      <div className="wrapper">
        <h1>Join us in our growing Team!</h1>

        <div className="cardWrapper">
          <div className="card">
            <div className="label">
              <h6>Company Fleet Safety Officer</h6>
              <h2>Full Time</h2>
              <h2>Makati City</h2>
              <h5>
                More Details <BsArrowRight className="icon" />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  padding: 3rem 0;
  padding-top: 0;
  & .iso {
    height: 30px;
    display: flex;
    margin-left: 3rem;
    & .icon{
        margin-right: 1rem;
    }
    & h6{
        margin: 0 ;
        color: #6b6b6b;
    }
  }
  & .wrap {
    background-color: #00052eef;
    & h1 {
      color: #fff;
      text-align: center;
      text-transform: capitalize;
      font-size: 25px;
      padding-bottom: 3rem;
    }
    & .nav {
      display: flex;
      width: 80%;
      margin: auto;
      padding: 1rem;
      & .link {
        text-decoration: none;
        color: #fff;
        font-size: 14px;
      }
      & .icon {
        color: #fff;
        margin: 0 10px;
      }
    }
  }
  & .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & h1{
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    & .cardWrapper {
    margin-top: 3rem;
    max-width: 620px;
    margin: auto 0 ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    & .card {
      position: relative;
      border: 1px solid #eee;
      width: 300px;
      margin: auto;
      & img {
        height: 100px;
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
        padding: 0 1rem;
        & h6 {
          color: #000000;
          font-weight: 600;
          margin: 10px auto;
        }
        & h2 {
          font-weight: 400;
          font-size: 10px;
          color: #5e5e5e;
        }
        & p {
          color: #5e5e5e;
          font-size: 14px;
          line-height: 25px;
        }
        & h5 {
          display: flex;
          margin-top: 0;
          font-size: 10px;
          color: #d67200;

          & .icon {
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
  }
`;

export default Careers;
