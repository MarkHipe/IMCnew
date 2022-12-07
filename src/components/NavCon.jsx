import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavCon = () => {
  return (
    <Con>
      <span>
        <img className="logo" src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/306969817_406350201653299_6015307366123745659_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGoeF8pVs5T_iEGPFC9xqUYCPGCLqHTaNAI8YIuodNo0KaiGNd3YSyx8zAfL4OuEG04VJighG2izOm9KVTEbSHA&_nc_ohc=Z7ICQ-yb2GQAX_Advqi&_nc_ht=scontent.fmnl3-3.fna&oh=00_AfBpP7nzdN9WUz5Gto55SIiYJvcYzJki80E8oyZVnH6HbQ&oe=63944322" alt="" /> <h1>8MGM Trading Inc.</h1>
      </span>
      <div className="nav">
        <Link to="" className="navs active">
          Home
        </Link>
        <Link to="" className="navs">
          About Us
        </Link>
        <Link to="" className="navs">
          Products
        </Link>
        <Link to="" className="navs">
          Blogs
        </Link>
        <Link to="" className="navs">
          Careers
        </Link>
      </div>
    </Con>
  );
};
const Con = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;
  & .logo{
    height: 40px;
    width: 40px;
    border-radius: 100%;
    margin-left: 2rem;
    margin-right: 10px;
  }
  & h1 {
    font-size: 1.3rem;
    color: #f5f5f5;
    font-weight: bold;
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
      color: #f5f5f5;
      text-decoration: none;
      text-transform: uppercase;
      &.active{
        color: #2DFFA7;
        font-weight: bold;
        border-bottom: 3px solid #2DFFA7;
      }
    }
    margin-right: 2.5rem;
  }
`;
export default NavCon;
