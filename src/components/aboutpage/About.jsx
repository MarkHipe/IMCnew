import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { GiBullseye } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";

import { Link } from "react-router-dom";
import styled from "styled-components";
import IMC from "../../assets/IMC.png";
import { IoDiamond } from "react-icons/io5";
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
SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

const year = [
  {
    year: 2019,
    details: [
      "At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going acreditation of ISO Certification. IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently",
      "At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going acreditation of ISO Certification. IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently",
      "At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going acreditation of ISO Certification. IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently",
    ],
  },
  {
    year: 2020,
    details: [
      "2 At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going acreditation of ISO Certification. IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently",
      "2 At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going acreditation of ISO Certification. IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently",
      "2 At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going acreditation of ISO Certification. IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently",
    ],
  },
  {
    year: 2021,
    details: [
      "3 At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going acreditation of ISO Certification. IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently",
      "3 At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going acreditation of ISO Certification. IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently",
      "3 At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going acreditation of ISO Certification. IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently",
    ],
  },
  {
    year: 2022,
    details: [
      "At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going acreditation of ISO Certification. IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently",
      "At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going acreditation of ISO Certification. IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently",
      "At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going acreditation of ISO Certification. IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently",
    ],
  },
];
const About = () => {
  const [active, setactive] = useState(0);
  const swiperRef = useRef();
  const swiperRef1 = useRef();

  return (
    <Con>
      <div className="wrap">
        <div className="nav">
          <Link className="link" to="/">
            Home
          </Link>
          <BsArrowRight className="icon" />
          <Link className="link" to="/about">
            About Us
          </Link>
        </div>
        <h1>About Us</h1>
      </div>
      <div className="details">
        <div className="left">
          <h1>OCEAN SHIPPING IN THE PHILIPPINES</h1>
          <span>
            <p>
              As one of the world's largest archipelagic nations with a total of
              7, 641 islands, the Philippines has the capability of optimizing
              shipment by sea. placed between international trade routes and
              numerous traits, its strategic location could greatly shorten
              travel periods and brings possibilities in penetrating global
              trade
            </p>
          </span>
          <p>
            By developing the country as a Maritime logistics hub, its vast
            growth potential could encourage an influx of investors thereby
            increasing the counbtry's Gross national Product. Moreover, it is a
            cost-efficient mode of delivery with an effective capacity of
            delivering bulk quantities of goods. ocean shipping, as a means of
            transporting goods through bodies of water by the usage of large
            vessel can transport massive quantities of materials in our shipment
          </p>
          <img src={IMC} alt="" />
        </div>
        <div className="right">
          <div className="card">
            <img
              src="https://www.ship-technology.com/wp-content/uploads/sites/8/2022/02/Yara-Birkeland-4-e1644410516217.jpg"
              alt=""
            />
            <div className="detail">
              <h3>
                this company is a dark horse that continuously brings innovation
                to the market and challenges old and new players alike. Truly a
                gem.
              </h3>
              <h4>Partners</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="next">
        <div className="left">
          <div className="wrapper">
            <h1>INDUSTRY MOVERS CORP. (IMC)</h1>
            <div className="boxWrap">
              {" "}
              <div className="box">
                <GiBullseye className="icon" />
                Our Mission
              </div>
              <div className="box">
                {" "}
                <AiFillEye className="icon" />
                Our Vision
              </div>{" "}
              <div className="box">
                <IoDiamond className="icon" />
                Core Values
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src="https://www.ship-technology.com/wp-content/uploads/sites/8/2022/02/Credit-Yara-International.-Yara-Birkeland-sailing-2-1024x576.png"
            alt=""
          />
          <div className="triangle"></div>
          <div className="card">
            <div className="header">
              <h3>INDUSTRY MOVERS CORP. (IMC)</h3>
            </div>
            <div className="details">
              <p>
                Industry Movers Corp. (IMC) came to existence with the aim of
                reaping the possiblities of advancing ocean shipping as an
                industry.
                <br />
                With an initial fleet of 45 vessels. IMC is determined to
                provide fast deliveries without delay and the the other premium
                servies with efficiency, accountability and reliability.
              </p>
              <h4>
                OUR SERVICES <BsArrowRight />
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="milestone">
        <div className="line"></div>
        <button className="left" onClick={() => swiperRef.current?.slidePrev()}>
          <TfiArrowLeft className="icon" />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={5}
          //   loop={true}
          //   pagination={{ clickable: true }}
          centeredSlides={true}
          // navigation
          style={{ height: "auto", width: "auto" }}
          className="swiper"
          onSlideChange={(swiper) => {
            console.log("Slide index changed to: ", swiper.activeIndex);
            setactive(swiper.activeIndex);
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {year.map((yr, i) => {
            return (
              <SwiperSlide className="perSlide" key={i}>
                <h1 className={i === active ? "active" : ""}>{yr.year}</h1>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="right"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <TfiArrowRight className="icon" />
        </button>
      </div>
      <div className="yearDetails">
        <button
          className="left"
          onClick={() => swiperRef1.current?.slidePrev()}
        >
          <TfiArrowLeft className="icon" />
        </button>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          //   loop={true}
          //   pagination={{ clickable: true }}
          centeredSlides={true}
          // navigation
          style={{ height: "auto", width: "auto" }}
          className="swipers"
          onBeforeInit={(swiper) => {
            swiperRef1.current = swiper;
          }}
        >
          {year[active].details.map((yr, i) => {
            return (
              <SwiperSlide className="perSlides" key={i}>
                <h1>{yr}</h1>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          className="right"
          onClick={() => swiperRef1.current?.slideNext()}
        >
          <TfiArrowRight className="icon" />
        </button>
      </div>
      <div className="achievement">
        <div className="wrapper">
          <div className="left">
            <div className="wrapDetails">
              <h1>WHAT WE ACHIEVED</h1>
              <h6>Support Filipino Workers</h6>
              <span>
                <h1>565</h1>
                <p>Exemplary Skills in Seafaring</p>
              </span>
              <p>
                Supporting Filipino workers and to uplift their morale in the
                art of seafaring are only two of the main objectives of IMC.
                once IMC's target of becoming a global transport entity has been
                met. Filipinos will also be known worldwide and will be branded
                as virtuoso mariners
              </p>
            </div>
          </div>
          <div className="right">
            <div className="wrapDetails">
              <div className="progressWrapper">
                <div className="label">SHOREBASED</div>
                <div className="progress">
                  <div className="data"  style={{height:"13%"}}>
                    <span>13%</span>
                  </div>
                </div>
              </div>
              <div className="progressWrapper">
                <div className="label">SEABASED</div>
                <div className="progress">
                  <div className="data" style={{height:"78%"}}>
                    <span>78%</span>
                  </div>
                </div>
              </div>
              <div className="progressWrapper">
                <div className="label">VACANT</div>
                <div className="progress">
                  <div className="data"  style={{height:"9%"}}>
                    <span>9%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h4>" LOGISTICS FOR THE REAL WORLD "</h4>
        <span>
          MAKE AN APPOINTMENT <BsArrowRight className="icon" />
        </span>
      </div>
    </Con>
  );
};
const Con = styled.div`
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
  & .details {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin: auto;
    /* width: 850px; */
    flex-wrap: wrap;
    padding: 3rem 0;
    & .left {
      width: 400px;
      margin: 1rem;

      & h1 {
        font-size: 1.1rem;
      }
      & span {
        & p {
          font-size: 13px;
          font-weight: 600;
          line-height: 20px;
          color: #686868;
        }
      }
      & p {
        font-size: 13px;

        line-height: 20px;
        color: #686868;
      }
    }
    & .right {
      width: 400px;
      display: flex;
      & img {
        width: 400px;
      }
      & .detail {
        background-color: #d38f10;
        padding: 1rem;
        margin-top: -0.5rem;
        & h3 {
          font-size: 14px;
          color: #fff;
          font-style: italic;
        }
        & h4 {
          font-size: 14px;
          color: #fff;
          /* font-style: italic; */
        }
      }
    }
  }
  & .next {
    background-color: #dfdfdf;
    display: flex;
    flex-wrap: wrap;
    //max-height: 400px;
    @media (max-width: 915px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    & .left {
      display: flex;
      flex-direction: column;
      /* justify-content: flex-end; */
      width: 50%;
      right: 0;
      & .wrapper {
        position: relative;
        width: 400px;
        right: 0;
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        z-index: 5;
        padding: 2rem;
        @media (max-width: 915px) {
          align-self: center;
        }
        & h1 {
          font-size: 1.2rem;
        }
        & .boxWrap {
          display: flex;
          justify-content: center;
          & .box {
            background-color: #fff;
            height: 100px;
            width: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px;
            font-size: 13px;
            font-weight: 600;
            & .icon {
              font-size: 30px;
              color: #a7a7a7;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
    & .right {
      width: 50%;
      position: relative;
      overflow: hidden;
      @media (max-width: 915px) {
        width: 100vw;
        height: 300px;
        margin-bottom: 2rem;
      }
      & img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        position: relative;
        z-index: 2;
        @media (max-width: 915px) {
          width: 100vw;
          height: 300px;
          margin-bottom: 2rem;
        }
      }
      & .triangle {
        position: absolute;
        height: 550px;
        width: 200px;
        background-color: #dfdfdf;
        top: -4rem;
        z-index: 3;
        transform: rotate(10deg);
        left: -7rem;
        @media (max-width: 915px) {
          display: none;
        }
      }
      & .card {
        position: absolute;
        top: 2rem;
        background-color: #fff;
        width: 210px;
        left: 5rem;
        padding: 1rem;
        /* position: relative; */
        z-index: 5;
        @media (max-width: 915px) {
          // position: relative;
          display: flex;
          flex-direction: column;
          align-self: center;
          top: 0rem;
          background-color: #494949ac;

          left: 0;
          margin: auto;
        }
        & .header {
          & h3 {
            font-size: 13px;
            @media (max-width: 915px) {
              color: #fdfdfd;
            }
          }
          border-bottom: 1px solid #e6e6e6;
        }
        & .details {
          padding: 1rem 0;
          padding-bottom: 0;
          & p {
            font-size: 11px;
            line-height: 18px;
            font-weight: 600;
            color: #686868;
            @media (max-width: 915px) {
              color: #e0e0e0;
            }
          }
          & h4 {
            font-size: 13px;
            text-align: left;
            @media (max-width: 915px) {
              color: #f3f3f3;
            }
          }
        }
      }
    }
  }
  & .milestone {
    padding: 3rem 0;
    // display: inline-flex;
    width: 100vw;
    position: relative;
    & .line {
      height: 1px;
      width: 80vw;
      background-color: #686868;
      margin: auto;
      position: relative;
      top: 13px;
    }
    & .left {
      position: absolute;
      left: 6%;
      background-color: transparent;
      border: none;
      font-size: 1rem;
    }
    & .right {
      position: absolute;
      right: 6%;
      top: 3rem;
      background-color: transparent;
      border: none;
      font-size: 1rem;
    }
    & .swiper {
      background-color: transparent;
      width: 80vw !important;
      & .perSlide {
        display: flex;
        justify-content: center;
        align-items: center;
        & h1 {
          font-weight: 100;
          font-size: 16px;
          margin: auto;
          background-color: #ffffff;
          padding: 0 20px;
          &.active {
            font-weight: 600;
            font-size: 2rem;
            margin-top: -5px;
          }
        }
      }
    }
  }
  & .yearDetails {
    position: relative;
    width: 100vw;
    margin: auto;
    padding: 3rem 0;
    & .left {
      position: absolute;
      left: 6%;
      border: none;
      font-size: 1rem;
      top: 6rem;
      background-color: #fff;
      border-radius: 100%;
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      z-index: 10;
    }
    & .right {
      position: absolute;
      right: 6%;
      top: 6rem;
      border: none;
      font-size: 1rem;
      background-color: #fff;
      border-radius: 100%;
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      z-index: 10;
    }
    & .swipers {
      /* width: 80vw; */
      width: 100%;
      overflow: visible;

      & .perSlides {
        /* width: 70vw; */
        h1 {
          background-color: #e9e9e9;
          width: 60vw;
          margin: auto;
          font-size: 13px;
          padding: 3rem;
          color: #686868;
          position: relative;
          &:before {
            content: " ";
            position: absolute;
            width: 0;
            height: 0;
            left: 30vw;
            right: auto;
            top: -35px;
            bottom: auto;
            border: 20px solid;
            z-index: 10;
            border-color: #e9e9e9 #e9e9e9 transparent transparent;
            transform: rotate(90deg);
          }
        }
      }
    }
  }
  & .achievement {
    background-color: #00052eef;
    padding: 3rem 0;
    & .wrapper {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      & .left {
        width: 400px;
        & h1 {
          color: #dfdfdf;
          font-size: 1.5rem;
        }
        & h6 {
          color: #d3b610;
          font-size: 13px;
          font-weight: 100;
        }
        & span {
          display: inline-flex;
          display: flex;
          justify-content: center;
          align-items: center;
          & h1 {
            font-size: 2rem;
            margin-right: 1rem;
          }
          & p {
            background-color: #ad870a;
            padding: 5px;
            font-size: 10px;
            color: #dfdfdf;
          }
        }
        & p {
          font-size: 13px;
          line-height: 18px;
          color: #adbbb9;
        }
      }
      & .right {
        width: 400px;
        & .wrapDetails {
          margin: 1rem;
          & .progressWrapper {
            display: inline-flex;
            margin: 1rem;
            & .label {
              writing-mode: vertical-rl; 
              text-orientation: upright;
              font-weight: 600;
              color: #dfdfdf;
              line-height: 20px;
              display: flex;
              align-self: flex-end;
              margin-right: .5rem;
            }
            & .progress {
              width: 55px;
              height: 230px;
              background-color: transparent;
              border: 1px solid #eeeeee89;
              display: flex;
              justify-content: flex-end;
              & .data {
                width: 100%;
                /* height: 13%; */
                background-color: #d3b61090;
                display: flex;
                align-self: flex-end;
                & span {
                  position: relative;
                  top: -1.5rem;
                  margin: 0 auto;
                  color: #d3b610;
                }
              }
            }
          }
        }
      }
    }
  }
  & .banner {
    background-color: #ad870a;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    flex-wrap: wrap;
    & h4 {
      font-weight: 100;
      margin: 0;
    }
    & span {
      border-bottom: 1px solid #fff;
      font-size: 13px;
      cursor: pointer;
    }
  }
`;
export default About;
