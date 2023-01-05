import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from ".././assets/logo.png";
import gsap from "gsap";


const NavCon = ({ active, inView,  }) => {
  const [nav, setnav] = useState("home");
  useLayoutEffect(() => {
    const tl = gsap.timeline();
   

    tl.to(".content", { duration: 1, css: { opacity: 1 }} ," +=6");
  }, [])
  
  return (
    <Con className={inView === false ? "float" : ""}>
      <div className="content">
        <span>
         {/* <img className="logo" src={logo} alt="" /> */}
        </span>
        <div className="nav">
          <Link
            to=""
            className={nav === "home" ? "navs active" : "navs"}
            onClick={() => {
              active("home");
              setnav("home");
            }}
          >
            Home
          </Link>
          <Link
            to=""
            className={nav === "about" ? "navs active" : "navs"}
            onClick={() => {
              active("about");
              setnav("about");
            }}
          >
            About Us
          </Link>
          <Link
            to=""
            className={nav === "products" ? "navs active" : "navs"}
            onClick={() => {
              active("products");
              setnav("products");
            }}
          >
            Products
          </Link>
          <Link to="" className={nav === "blogs" ? "navs active" : "navs"}>
            Blogs
          </Link>
          <Link to="" className={nav === "careers" ? "navs active" : "navs"}>
            Careers
          </Link>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
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
    // height 50px;
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    & h1{
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
    opacity: 0;
  }
  & .logo {
    height: 80px;
    width: 80px;
    border-radius: 100%;
    margin-left: 2rem;
    margin-right: 10px;
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
    & .navs {
      display: flex;
      margin: auto 10px;
      color: #1f1f1f;
      text-decoration: none;
      text-transform: uppercase;
      &.active {
        color: #24753b;
        font-weight: bold;
        border-bottom: 3px solid #24753b;
      }
      &:hover {
        color: #24753b;
        //font-weight: bold;
        // border-bottom: 3px solid #24753b;
      }
    }
    // margin-right: 2.5rem;
  }
`;
export default NavCon;
