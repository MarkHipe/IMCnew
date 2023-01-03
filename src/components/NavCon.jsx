import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from ".././assets/logo.png";

const NavCon = ({ active }) => {
  const [nav, setnav] = useState("home");
  return (
    <Con>
      <div className="content">
        <span>
          <img className="logo" src={logo} alt="" /> <h1>8MGM Trading Inc.</h1>
        </span>
        <div className="nav">
          <Link
            to=""
            className={nav === "home" ? "navs active" : "navs"}
            onClick={() => {
              active("home");
            }}
          >
            Home
          </Link>
          <Link
            to=""
            className={nav === "about" ? "navs active" : "navs"}
            onClick={() => {
              active("about");
            }}
          >
            About Us
          </Link>
          <Link
            to=""
            className={nav === "products" ? "navs active" : "navs"}
            onClick={() => {
              active("products");
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
  & .content {
    position: relative;
    width: 80%;
    margin: auto;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }
  & .logo {
    height: 40px;
    width: 40px;
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
