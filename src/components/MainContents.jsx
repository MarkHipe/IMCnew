import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  IoCall,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
} from "react-icons/io5";

import { CiLocationOn, CiMail } from "react-icons/ci";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import logo from ".././assets/logo.png";


SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

const member = [
  {
    id: 0,
    name: "Lee Kyoungyoon",
    images:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/acne-1624642769.jpg?crop=0.500xw:1.00xh;0,0&resize=640:*",
  },
  {
    id: 1,
    name: "Kim Sehyeon",
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbw7N7R4KoscLIrqNHw7eab_iO130K4LDWOw&usqp=CAU",
  },
  {
    id: 2,
    name: "Jeon Mingyu",
    images:
      "https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center-relaunch/en-us/general/brands/colgate-total-12-regimen.jpg",
  },
  {
    id: 3,
    name: "Jang Munik",
    images:
      "https://jnj-content-lab.brightspotcdn.com/dims4/default/ed3caa1/2147483647/strip/true/crop/1079x1079+0+0/resize/360x360!/quality/90/?url=http%3A%2F%2Fjnj-brightspot.s3.amazonaws.com%2F99%2Fd8%2F3094caf34f7ea52a0e3f375d3841%2Fproducts-landinage-page-silhouette-pharma.jpg",
  },
  {
    id: 4,
    name: "Park Jaechan",
    images:
      "http://images.summitmedia-digital.com/preview/images/2021/03/05/most-expensive-skincare-nm.jpg",
  },
];

const MainContents = ({ actives }) => {
  const [active, setactive] = useState(0);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to(".logos", { duration: 1, css: { y: 0, width:"100px" } }, "+=1");

    tl.to(".first-text", { duration: 1, css: { opacity: 1 } });

    tl.to(".second-text", { duration: 1, css: { opacity: 1, y:0, left:"20px" } });
    tl.to(".second-text", { duration: 0.5, css: { opacity: 0 } },"+=1");
    tl.to(".first-text", { duration: .5, css: { opacity: 0 } },"-=2");

    tl.to(".logos", { duration: 1, css: {x:"-35vw",y:-120} },"-=1" );
    //tl.to(".logos", { duration: 1, css: {y:-120} }, );

    tl.to(".wrap", { duration: 1, css: { y: 0 } });
    tl.to(".swiperCon", { duration: 1, css: { x: 0 } }, "-=1");

  }, []);

  return (
    <Con>
      <div className="intro">
     
          <img className="logos" src={logo} alt="" /> 
       
       <div className="introText">
       <h2 className="first-text">Need It?</h2>
        <h1 className="second-text">WE HAVE IT!</h1>
       </div>
      </div>
      <div className="wrap">
        <div className="left">
          <div className="header">
            <h2>Need It?</h2>
            <h1>WE HAVE IT!</h1>
            <p>
              We supply different products And equipment for schools, hospitals,
              offices, casinos
            </p>
            <div className="buttons">
              <button
                className="services"
                onClick={() => {
                  actives("services");
                }}
              >
                Our Services
              </button>
              <button
                className="contacts"
                onClick={() => {
                  actives("contact");
                }}
              >
                Contact Us
              </button>
             
            </div>
          </div>
        </div>
        <span className="sns">
          <div className="line"></div>
          <IoLogoFacebook className="icon" />
          <IoLogoLinkedin className="icon" />
          <CiMail className="icon" />
          <IoLogoInstagram className="icon" />
          <div className="line"></div>
        </span>
        <div className="right">
          <div className="circle"></div>
          <div className="swiperCon">
            <Swiper
              spaceBetween={5}
              slidesPerView={2}
              initialSlide={0}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              onInit={(swiper) => console.log(swiper)}
              onSlideChange={(swiper) => {
                // console.log("Slide index changed to: ", swiper.activeIndex);
                setactive(swiper.activeIndex);
              }}
              // onReachEnd={() => console.log("Swiper end reached")}
            >
              {member?.map((mem, index) => (
                <SwiperSlide
                  key={index}
                  className={active === index ? "swipeCon active" : "swipeCon"}
                >
                  <img
                    src={mem.images}
                    alt={mem?.name}
                    className={active === index ? "active" : ""}
                    style={{
                      position: "relative",
                      className: active === index ? "slide active" : "slide",
                      width: active === index ? "280px" : "200px",
                      height: active === index ? "400px" : "300px",
                      borderRadius: "15px",
                      boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.3)",
                      top: active === index ? "0rem" : "7vh",
                      // right: active === index ? "0rem" : "3vh",
                      // zIndex: active === index ? "20" : "10",
                      overflow: "hidden",
                      objectFit: "cover",
                      filter:
                        active === index ? "brightness(1)" : "brightness(0.90)",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  color: #fff;
  & .intro {
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -6rem;
    flex-direction: column;
    & .introText{
      display: inline-flex;
    }
    & h1,
    h2 {
      font-size: 6rem;
      letter-spacing: 4px;
      opacity: 1;
    }
   
      & img.logos{
        width: 400px;
        border-radius: 100%;
        transform: translateY(200px);
      }
    
    & h3{
      font-size: 3rem;
    }
    & .first-text {
      opacity: 0;
    }
    & .second-text {
      opacity: 0;
      transform: translateY(200px);
    }
  }
  & span.sns {
    position: absolute;
    margin-top: 30vh;
    float: left;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    & .icon {
      margin: 0.5rem 1.5rem;
    }
    & .line {
      height: 3rem;
      width: 1px;
      background-color: #d7d7d7;
      margin: auto;
    }
  }
  & .wrap {
    width: 100%;
    height: 90vh;
    max-height: 800px;
    display: flex;
    // background-color: #95ffff54;
    transform: translateY(1000px);

    & .left {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      & .header {
        width: 70%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: -3rem;
        & h2 {
          font-size: 2.5rem;
          margin: 0;
        }

        & h1 {
          font-size: 3.5rem;
          margin: 0 3rem;
          color: #75bbff;
        }
        & p {
          //text-transform: uppercase;
          color: #e3e3e3;
          margin-top: 3rem;
        }
        & span {
          font-size: 25px;
          margin-top: 8rem;
          white-space: nowrap;
          color: #d8d8d8;
          & .icon {
            margin-right: 0.5rem;
          }
        }
        & .buttons {
          margin-top: 3rem;
          & button {
            border: none;
            border-radius: 20px;
            padding: 10px 40px;
            margin-right: 2rem;
            text-transform: uppercase;
            font-weight: 600;
            cursor: pointer;
            &.services {
              color: #24753b;
              background-color: #ffe9e9;
              padding: 11px 40px;
              &:hover {
                background-color: #44ff79;
              }
            }
            &.contacts {
              border: 2px solid #d7d7d7;
              background-color: transparent;
              color: #fff;
              &:hover {
                color: #fff;
                background-color: #0cff5155;
                border: 2px solid #0cff5155;
              }
            }
          }
        }
      }
    }
    & .right {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      & .circle {
        position: absolute;
        width: 350px;
        height: 350px;
        left: 70%;
        top: 270px;

        background: #005cb4;
        border-radius: 368.5px;
      }
      & .swiperCon {
        position: relative;
        font-family: sans-serif;
        text-align: center;
        margin: auto;
        width: 80%;
        transform: translateX(1000px);
        //height: 550px;
        justify-content: center;
        align-self: center;
        right: 4rem;
        top: 2rem;
        & img {
          position: relative;
          z-index: 5;
          &.active {
            z-index: 8;
          }
        }
        & .swipeCon {
          z-index: 5;
          &.active {
            z-index: 8;
          }
        }
      }
    }
  }
`;

export default MainContents;
