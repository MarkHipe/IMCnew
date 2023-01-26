import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from ".././assets/logo.png";
import gsap from "gsap";
import { IoCall } from "react-icons/io5";
import IMC from "../assets/IMC.png";

const MainNav = ({currActive, active, inView, mobilepop }) => {
  const [nav, setnav] = useState("home");
  // const [active, setactive] = useState()
  const navigate = useNavigate();
  return (
    <Con className={mobilepop === "close" ? "float" : ""}>
      <div className={mobilepop === "close" ? "content pop" : "content"}>
        <span>
          <img className="logo" src={IMC} alt="" />
        </span>
        <div className="nav">
          <nav
            className={currActive === "home" ? "navs active" : "navs"}
            onClick={() => {
              active("home");
              setnav("home");
              navigate("");
              console.log("home");
            }}
          >
            Home
          </nav>
          <nav
            className={currActive === "about" ? "navs active" : "navs"}
            onClick={() => {
              active("about");
              setnav("about");
              navigate("/about");
            }}
          >
            About Us
          </nav>
          <nav
            className={currActive === "News & Updates" ? "navs active" : "navs"}
            onClick={() => {
              active("News & Updates");
              setnav("News & Updates");
              navigate("/news");
            }}
          >
            news & Updates
          </nav>
          <nav
            className={currActive === "ourfleet" ? "navs active" : "navs"}
            onClick={() => {
              active("ourfleet");
              setnav("ourfleet");
              navigate("/ourfleet");
            }}
          >
            Our Fleet
          </nav>
          <nav
            className={currActive === "careers" ? "navs active" : "navs"}
            onClick={() => {
              active("careers");
              setnav("careers");
              navigate("/careers");
            }}
          >
            Careers
          </nav>
          <nav
            className={currActive === "contactus" ? "navs active" : "navs"}
            onClick={() => {
              active("contactus");
              setnav("contactus");
              navigate("/contactus");
            }}
          >
            Contact Us
          </nav>
          <span>
            <IoCall className="icon" /> +63(02) 7003-5009
          </span>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  //margin-top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 19;

  & nav {
    cursor: pointer;
  }

  &.float {
    position: fixed;
    top: -2rem;
    left: 0;
    right: 0;
    background-color: #fff;
    padding-top: 1rem;
    z-index: 17;
    box-shadow: 2px 0px 4px 1px rgba(0, 0, 0, 0.15);
    height: 75px;
    overflow: hidden;
    // height 50px;
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @media (max-width: 768px) {
      height: auto;
      position: fixed;
      & .content {
        height: 80px;
        &.pop {
          -webkit-animation: slide-in-top 0.5s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0;
          & .nav {
            display: flex;
            flex-direction: column;
            justify-content: left;
            left: 0;
            & .navs {
              margin: 1rem;
              width: 80vw;
              padding-bottom: 10px;
            }
            & span {
              margin: auto;
              /* margin-left: -6rem; */
              margin-top: 3rem;
            }
          }
        }
      }
    }
    & .logo {
      height: 80px;
      width: 80px;
      border-radius: 100%;
      margin-left: 2rem;
      opacity: 1;
      height: auto;
      @media (max-width: 992px) {
        margin-left: 0;
      }
    }
    & h1 {
      color: #1f1f1f;
      font-weight: 500;
    }
    @-webkit-keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  & .content {
    position: relative;
    width: 80%;
    margin: auto;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    /// opacity: 0;
  }
  & .logo {
    height: 80px;
    width: 80px;
    border-radius: 100%;
    margin-left: 2rem;
  }
  & h1 {
    font-size: 1.1rem;
    color: #f5f5f5;
    font-weight: 400;
  }
  & span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    @media (max-width: 768px) {
      display: none;
    }
    & span {
      margin-left: 1rem;
      margin-right: -1rem;
      font-size: 1.5rem;
      position: relative;
      right: -3rem;
      color: #484848;
      white-space: nowrap;
      @media (max-width: 992px) {
        display: none;
      }
    }
    & .navs {
      display: flex;
      margin: auto 10px;
      color: #1f1f1f;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.8rem;
      border-bottom: 3px solid transparent;
      white-space: nowrap;
      &.active {
        color: #001027;
        font-weight: bold;
        border-bottom: 3px solid #001027;
      }
      &:hover {
        color: #001027;
        border-bottom: 3px solid #7b7b7c;

        //font-weight: bold;
        // border-bottom: 3px solid #24753b;
      }
    }
    // margin-right: 2.5rem;
  }
`;
export default MainNav;
