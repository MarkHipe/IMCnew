import React, { useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const OurFleet = () => {
  const [tabActive, settabActive] = useState("view");
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
          <Link className="link" to="/ourfleet">
            Our Fleet
          </Link>
        </div>
        <h1>Our Fleet</h1>
      </div>
      <div className="wrapper">
        <div className="details">
          <div className="left">
            <h1>OUR VESSELS</h1>

            <h6>Philippines a Premier source of seafares</h6>
            <p>
              Each year, thw Philippines produces effective maritime
              professionals and has been consistently referred to as a premier
              source of seafarers. A rise in the number of local mariners
              coupled with the growing need for global transport services and
              more improved local logistics has resulted to Filipino seafarers
              being more proficient in this specific line of work compared to
              their foreign counterparts.
            </p>
            <button>CONTACT US</button>
          </div>
          <div className="right">
            <img
              src="http://cdn.cnn.com/cnnnext/dam/assets/211223182641-03-storylines-residential-cruise-ship-concept.jpg"
              alt=""
            />
          </div>
        </div>
        <h1>OUR FLEET</h1>
        <div className="tabCon">
          <span
            className={tabActive === "view" ? "active" : ""}
            onClick={() => {
              settabActive("view");
            }}
          >
            View All
          </span>
          <span
            className={tabActive === "barge" ? "active" : ""}
            onClick={() => {
              settabActive("barge");
            }}
          >
            Barge
          </span>
          <span
            className={tabActive === "landing" ? "active" : ""}
            onClick={() => {
              settabActive("landing");
            }}
          >
            Landing Craft Tank
          </span>
          <span
            className={tabActive === "tug" ? "active" : ""}
            onClick={() => {
              settabActive("tug");
            }}
          >
            Tug Boats
          </span>
          <span
            className={tabActive === "dredger" ? "active" : ""}
            onClick={() => {
              settabActive("dredger");
            }}
          >
            Dredger
          </span>
          <span
            className={tabActive === "bulk" ? "active" : ""}
            onClick={() => {
              settabActive("bulk");
            }}
          >
            Bulk Carriers
          </span>
        </div>

        <div className="cardWrapper">
          <div className="card">
            <img
              src="http://cdn.cnn.com/cnnnext/dam/assets/211223182641-03-storylines-residential-cruise-ship-concept.jpg"
              alt=""
            />

            <div className="label">
              <h6>By Onin Reyes, On October 27, 2022</h6>
              <h2>Blessing LCT-IMC 25</h2>

              <h5>
                GO THROUGH <BsArrowRight className="icon" />
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
  & .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .details {
      background-color: #eee;
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 3rem;
      & .left {
        width: 400px;
        padding: 1rem;
        & h1{
            font-size: 1rem;
            text-align: left;
            margin-top: 2rem;
        }
        & h6{

        }
        & p{
            font-size: 11px;
            line-height: 18px;
            color: #838383;
        }
        & button{
            background-color: #b68c00;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 10px;
            
        }
      }
      & .right {
        width: 400px;
        padding: 1rem;
        & img{
            width: 100%;
        }
      }
    }
    & h1 {
      font-size: 1.5rem;
      text-align: center;
    }
    & .tabCon {
      margin: auto;
      margin-top: 2.5rem;
      & span {
        padding: 10px;
        border-top: 3px solid #eee;
        font-size: 13px;
        cursor: pointer;
        white-space: nowrap;
        &.active {
          border-top: 3px solid #d67200;
          color: #d67200;
        }
        &:hover {
          border-top: 3px solid #838383;
          color: #838383;
        }
      }
    }
    & .cardWrapper {
      margin-top: 3rem;
      & .card {
        position: relative;
        border: 1px solid #eee;
        width: 200px;

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
            color: #5e5e5e;
            font-weight: 600;
            margin: 10px auto;
          }
          & h2 {
            font-weight: 400;
            font-size: 13px;
            color: #d67200;
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
            & .icon {
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }
`;
export default OurFleet;
