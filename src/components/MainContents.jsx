import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import PMI from "../assets/PMI.png";
import MBI from "../assets/MBI.jpg";
import Obanana from "../assets/obanana.png";
import CSC from "../assets/CSC.png";
import MAC from "../assets/MAC.png";
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
//import { ScrollSmoother } from "gsap/all";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import Footer from "./Footer";
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
//gsap.registerPlugin( ScrollSmoother);
const MainContents = ({ actives }) => {
  const [active, setactive] = useState(0);
  const swiperRef = useRef();
  return (
    <Con id="smooth-wrapper">
      <div className="backgroundImg">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          style={{ height: "auto", width: "auto" }}
          className="swiper"
        >
          <SwiperSlide className="perSlide" key="">
            <img
              className="img"
              style={{
                height: "auto",
                width: "100%",
                position: "relative",
                zIndex: 5,
              }}
              src="http://cdn.cnn.com/cnnnext/dam/assets/220212144422-01-wonder-of-the-seas-royal-caribbean.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="perSlide" key="">
            <img
              className="img"
              style={{
                height: "auto",
                width: "100%",
                position: "relative",
                zIndex: 5,
              }}
              src="http://cdn.cnn.com/cnnnext/dam/assets/211223182641-03-storylines-residential-cruise-ship-concept.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="perSlide" key="">
            <img
              className="img"
              style={{
                height: "auto",
                width: "100%",
                position: "relative",
                zIndex: 5,
              }}
              src="https://www.ge.com/news/sites/default/files/Reports/2022-08/serenadeoftheseas_alaska_0.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="Info">
        <div className="left">
          <div className="wrap">
            <h1>WHAT WE ARE AIMING TO DO FOR YOU</h1>

            <h4>
              Industry Movers Corp. (IMC) came to existence with the aim of
              reaping the possibilities of advancing ocean shipping as an
              industry{" "}
            </h4>
            <p>
              With an initial fleet of 45 vessels, IMC is determined to provide
              fast deliveries without delay and other premium services with
              efficiency, accountability and reliability. Furthermore, the
              company plans to acquire more vessels to improve currently
              provided services and to answer the call for increasing demand in
              the market
            </p>
          </div>
        </div>
        <div className="right">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            style={{ height: "350px", width: "325px" }}
            className="swiper"
          >
            <SwiperSlide className="perSlide">
              <div className="card">
                <div className="header">CORE VALUES</div>
                <div className="details">
                  <p>1.Safety</p>

                  <p>2. High Level of Accountability</p>

                  <p>3. Innovative Solutions</p>

                  <p>4. Passion</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="perSlide">
              <div className="card">
                <div className="header">CORE VALUES</div>
                <div className="details">
                  <p>1.Safety</p>

                  <p>2. High Level of Accountability</p>

                  <p>3. Innovative Solutions</p>

                  <p>4. Passion</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="perSlide">
              <div className="card">
                <div className="header">CORE VALUES</div>
                <div className="details">
                  <p>1.Safety</p>

                  <p>2. High Level of Accountability</p>

                  <p>3. Innovative Solutions</p>

                  <p>4. Passion</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="OurServices">
        <div className="wrap">
          {" "}
          <div className="card">
            {" "}
            <div className="header">
              <h1>OUR SERVICES</h1>
            </div>
            <div className="details">
              <br />
              <p>
                We are offering a sea shipment services across the country with
                most efficient and economical cost.
              </p>
            </div>
          </div>
          <div className="card">
            {" "}
            <div className="header">
              CORE VALUES <span>01</span>
            </div>
            <div className="details">
              <h4>Loose cargo</h4>

              <p>A loose cargo load, also known as an LCL,...</p>
            </div>
          </div>
          <div className="card">
            {" "}
            <div className="header">
              CORE VALUES<span>02</span>
            </div>
            <div className="details">
              <h4>Rolling Cargo</h4>

              <p>
                IMC moves vehicles or trucks. From the part of the origin...
              </p>
            </div>
          </div>
          <div className="card">
            {" "}
            <div className="header">
              CORE VALUES<span>03</span>
            </div>
            <div className="details">
              <h4>Dredging Works</h4>

              <p>
                Dredging generates sufficient room to build significant bridges,
                dykes, and...
              </p>
            </div>
          </div>
          <div className="card">
            {" "}
            <div className="header">
              CORE VALUES<span>04</span>
            </div>
            <div className="details">
              <h4>Crane Barge- pile driving Works</h4>

              <p>When a weight is put above a pile, it releases...</p>
            </div>
          </div>
          <div className="card">
            {" "}
            <div className="header">
              CORE VALUES<span>05</span>
            </div>
            <div className="details">
              <h4>Delivery of Aggregates in Bulks</h4>

              <p>Any construction, be a tiny structure, a road, or...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="OurPorts">
        <div className="wrap">
          <h1>OUR PORTS</h1>
          <div className="cardWrap">
            {" "}
            <div className="card">
              <img
                src="https://www.marineinsight.com/wp-content/uploads/2020/11/Ship-and-boat-1.png"
                alt=""
              />
              <div className="details">
                <h1>HOMEPORTS</h1>
                <p>
                  NCR-Manila| REGION IV-A Batangas| REGION VII - Cebu | REGION
                  VIII - Tacloban \ REGION XII - Gen San | REGION XIII - Surigao
                </p>
                <button>PLAY VIDEO</button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://www.marineinsight.com/wp-content/uploads/2020/11/Ship-and-boat-1.png"
                alt=""
              />
              <div className="details">
                <h1>HOMEPORTS</h1>
                <p>
                  NCR-Manila| REGION IV-A Batangas| REGION VII - Cebu | REGION
                  VIII - Tacloban \ REGION XII - Gen San | REGION XIII - Surigao
                </p>
                <button>PLAY VIDEO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FindYourCareer">
        <div className="wrap">
          <div className="left">
            {/* <video src=""></video> */}
            <img
              src="https://images.squarespace-cdn.com/content/v1/57ad8de5ff7c50d12ce76b68/1565000509464-XBVYERJXN1LQ851EHYS9/Engage-Architectural-22.jpg?format=1000w"
              alt=""
            />
          </div>
          <div className="right">
            <div className="details">
              <div className="header">
                <h1>FIND YOUR CAREER AT INDUSTRY MOVERS CORP. (IMC)</h1>
              </div>
              <p>
                Logistics has always been an important factor in any industry
                that needs transportation of products. it is the movement of
                tangible goods such as materials supplies, equipment and other
                consumables.
              </p>
              <div className="list">
                <span>
                  <h1>MARINE SUPERINTENDENT</h1>{" "}
                  <p>Assemblers and fabricators put together pieces...</p>
                </span>
                <span>
                  <h1>DEPUTY TECHNICAL MANAGERT</h1>{" "}
                  <p>
                    Quality control inspectors examine materials and products...
                  </p>
                </span>

                <h6>SEE ALL POSITIONS</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="LogisticBanner">
        <div className="wrap">
          <h1>Logistics for the Real World</h1>
          <p>
            we are an integrated maritime company composed of agile and
            experienced maritome engineers skilled in various scopes of
            industrial work, assured plant availability, and operational
            security
          </p>
          <button>
            MEET OUR TEAM <BsArrowRight className="icon" />
          </button>
        </div>
      </div>
      <div className="NewsUpdate">
        <div className="wrap">
          <div className="header">
            <h1>NEWS & UPDATE</h1>
          </div>
          <div className="blogWrap">
            <div className="nav">
              {" "}
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <TfiArrowLeft className="icon" />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <TfiArrowRight className="icon" />
              </button>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              // pagination={{ clickable: true }}
              className="swiper"
              //  centeredSlides={true}
              breakpoints={{
                1: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide
                className="perSlide"
                style={{ width: "100%" }}
                key=""
              >
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
                    <h6>By Onin Reyes, Blessing, Post Info</h6>
                    <h2>Blessing LCT-IMC 25</h2>
                    <p>
                      The newly acquired vessel LCT IMC 25 will soon be deployed
                      to open sea for commercial...
                    </p>
                    <h5>
                      Read More <BsArrowRight className="icon" />
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="perSlide"
                style={{ width: "100%" }}
                key=""
              >
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
                    <h6>By Onin Reyes, Blessing, Post Info</h6>
                    <h2>Blessing LCT-IMC 25</h2>
                    <p>
                      The newly acquired vessel LCT IMC 25 will soon be deployed
                      to open sea for commercial...
                    </p>
                    <h5>
                      Read More <BsArrowRight className="icon" />
                    </h5>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide
                className="perSlide"
                style={{ width: "100%" }}
                key=""
              >
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
                    <h6>By Onin Reyes, Blessing, Post Info</h6>
                    <h2>Blessing LCT-IMC 25</h2>
                    <p>
                      The newly acquired vessel LCT IMC 25 will soon be deployed
                      to open sea for commercial...
                    </p>
                    <h5>
                      Read More <BsArrowRight className="icon" />
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="Testimonials">
        <div className="wrap">
          <div className="header">
            <h1>TESTIMONIALS</h1>
          </div>

          <div className="swiperCon">
            <div className="circle"></div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              className="swiper"
              //  centeredSlides={true}
              breakpoints={{
                1: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                //1200: { slidesPerView: 3 },
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide
                className="perSlide"
                style={{ width: "100%" }}
                key=""
              >
                <div className="card">
                  <div className="label">
                    <p>
                      i was skeptical at first because they are relatively new
                      to the field, but I am happy that I did not let my
                      skeptism get in the way of engaging...
                    </p>
                    <h5>Valued Customer,</h5>
                    <div className="iconCon">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="perSlide"
                style={{ width: "100%" }}
                key=""
              >
                <div className="card">
                  <div className="label">
                    <p>
                      When it comes to this kind of industry, many companies
                      offers you promises, but this company helps you make
                      things happen
                    </p>
                    <h5>Partners,</h5>
                    <div className="iconCon">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide
                className="perSlide"
                style={{ width: "100%" }}
                key=""
              >
                <div className="card">
                  <div className="label">
                    <p>
                      When it comes to this kind of industry, many companies
                      offers you promises, but this company helps you make
                      things happen
                    </p>
                    <h5>Partners,</h5>
                    <div className="iconCon">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <div className="CompanyPartners">
        <div className="wrap">
          <h1>We work with our partners to provide project perfection</h1>
          <div className="companies">
            <div className="img">
              <img src={MAC} alt="" />
            </div>
            <div className="img">
              <img src={CSC} alt="" />
            </div>
            <div className="img">
              <img src={PMI} alt="" />
            </div>
            <div className="img">
              <img src={Obanana} alt="" />
            </div>
            <div className="img">
              <img src={MBI} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  color: #070707;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
 
  & .backgroundImg {
    box-shadow: inset 0px 0px 100px 75px rgba(0, 0, 0, 0.65);

    & img {
      // position: absolute;
      width: 100vw;
      max-width: 2400px;
      height: 700px !important;
      //  top: 0;
      object-fit: cover;
    }
    & .swiper {
      height: 700px;
      & .swiper-button-prev:after,
      .swiper-button-next:after {
        color: #070707;
        font-size: 20px;
        background-color: #fff;
        padding: 1rem;
      }
    }
    & .swiper-pagination-bullet {
      background-color: #94490b;
      height: 10px;
      width: 10px;
      animation: width-shrink 0.3s ease-in-out both;

      &.swiper-pagination-bullet-active {
        width: 25px;
        border-radius: 25px;
        animation: width-expand 0.3s ease-in-out both;
      }
    }

    @keyframes width-expand {
      0% {
        -webkit-width: 10px;
        width: 10px;
      }
      50% {
        -webkit-width: 20px;
        width: 20px;
      }
      100% {
        -webkit-width: 25px;
        width: 25px;
      }
    }
    @keyframes width-shrink {
      0% {
        -webkit-width: 25px;
        width: 25px;
      }
      50% {
        -webkit-width: 20px;
        width: 20px;
      }
      100% {
        -webkit-width: 10px;
        width: 10px;
      }
    }
  }
  & .Info {
    display: flex;
    flex-wrap: wrap;
    // height: 400px;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    width: 60%;
    margin: auto;
    @media (max-width: 1680px) {
      width: 80%;
    }
    & .left {
      max-width: 600px;
      /* margin: 2rem; */

      & .wrap {
        padding: 1rem;
        max-width: 600px;
        // margin-left: auto;
        // margin-right: 3rem;
        & h1 {
          font-size: 1.3rem;
        }
        & h4 {
          font-size: 1.1rem;
          line-height: 25px;
        }
        & p {
          font-size: 15px;
          line-height: 25px;
          font-weight: 600;
          color: #5e5e5e;
        }
      }
    }
    & .right {
      width: 300px;
      & .swiper {
        display: flex;
        justify-content: center;
        align-items: center;
        & .swiper-pagination {
          display: flex;
          margin-left: 2rem;
          margin-bottom: 3.5rem;
        }
        & .swiper-pagination-bullet {
          background-color: #94490b;
          height: 10px;
          width: 10px;
          animation: width-shrink 0.3s ease-in-out both;

          &.swiper-pagination-bullet-active {
            width: 25px;
            border-radius: 25px;
            animation: width-expand 0.3s ease-in-out both;
          }
        }

        @keyframes width-expand {
          0% {
            -webkit-width: 10px;
            width: 10px;
          }
          50% {
            -webkit-width: 20px;
            width: 20px;
          }
          100% {
            -webkit-width: 25px;
            width: 25px;
          }
        }
        @keyframes width-shrink {
          0% {
            -webkit-width: 25px;
            width: 25px;
          }
          50% {
            -webkit-width: 20px;
            width: 20px;
          }
          100% {
            -webkit-width: 10px;
            width: 10px;
          }
        }
      }
      & .card {
        width: 270px;
        box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
        margin: auto;
        height: 300px;
        margin-top: 1rem;
        padding: 0 1.2rem;
        & .header {
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #eee;
        }
        & .details {
          padding-top: 1rem;
          & p {
            color: #5e5e5e;
            margin-bottom: -10px;
          }
        }
      }
    }
  }
  & .OurServices {
    background-color: #00052eef;
    //height: 600px;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    & .wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 920px;
      & .card {
        // background-color: #eee;
        height: 170px;
        width: 270px;
        border: 1px solid #9999992f;
        padding: 0 1rem;
        & .header {
          height: 50px;
          display: flex;
          // justify-content: center;
          align-items: center;
          // border-bottom: 1px solid #eee;
          color: #eeee;
          font-size: 0.8rem;
          & h1 {
            font-size: 1rem;
          }
          & span {
            position: relative;
            right: -150px;
            font-size: 1.4rem;
            color: #eeeeee52;
          }
        }
        & .details {
          //  padding-top: 1rem;
          & h4 {
            font-size: 0.9rem;
            color: #d1d1d1;
          }
          & p {
            color: #8b91a7;
            font-size: 13px;
            margin-bottom: -10px;
          }
        }
      }
    }
  }
  & .OurPorts {
    padding: 3rem 0;
    & .wrap {
      width: 60%;
      margin: auto;
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 1.5rem;
        margin-left: 2rem;
      }
      & .cardWrap {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
        & .card {
          width: 350px;
          box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
          margin: 1rem;
          & img {
            width: 100%;
          }
          & .details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            & h1 {
              font-size: 14px;
              margin-left: 0;
            }
            & p {
              text-align: center;
              font-size: 13px;
              width: 90%;
              color: #5e5e5e;
              margin-bottom: 0.5rem;
            }
            & button {
              border: none;
              font-size: 12px;
              color: #333;
              padding: 10px 20px;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  }
  & .FindYourCareer {
    padding: 3rem 0;
    & .wrap {
      width: 80%;
      margin: auto;
      display: flex;
      padding: 1rem 0;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      & .left {
        width: 500px;
        & img {
          width: 500px;
        }
      }
      & .right {
        width: 500px;
        & .details {
          margin: 1rem;
          margin-left: 2rem;
          & .header {
            margin-bottom: 1rem;
            & h1 {
              font-size: 1.5rem;
            }
          }
          & p {
            color: #5e5e5e;
            line-height: 25px;
          }
          & .list {
            margin-left: 2rem;
            & span {
              & h1 {
                font-size: 1rem;
              }
            }
            & h6 {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
  & .LogisticBanner {
    background-color: #00052eef;
    //height: 600px;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    & .wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 60%;

      & h1 {
        color: #e6e6e6;
        font-size: 1.5rem;
      }
      & p {
        color: #acacac;
        font-size: 1rem;
        line-height: 30px;
        text-align: center;
      }
      & button {
        border: none;
        background-color: #ad820c;
        padding: 13px 20px;
        border-radius: 20px;
        font-size: 13px;
        color: #c5c5c5;
        margin-top: 1rem;
        display: flex;
        & .icon {
          font-size: 1rem;
          margin: auto 10px;
        }
      }
    }
  }
  & .NewsUpdate {
    padding: 3rem 0;
    & .wrap {
      display: flex;
      flex-direction: column;
      width: 60%;
      margin: auto;
      & .header {
        & h1 {
          font-size: 1.5rem;
        }
      }
      & .blogWrap {
        padding-top: 1rem;
        & .nav {
          display: flex;
          justify-content: flex-end;
          margin: 1rem;
          & button {
            border-radius: 100%;
            height: 35px;
            width: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border: 1px solid #ccc;
            margin: 0 6px;
            cursor: pointer;
          }
        }
        & .swiper {
          & .perSlide {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          & .card {
            border: 1px solid #eee;
            width: 300px;
            & img {
              height: 200px;
              width: 100%;
              //object-fit: cover;
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
      }
    }
  }
  & .Testimonials {
    padding: 3rem 0;
    background-color: #f1f1f1;
    & .wrap {
      width: 70%;
      margin: auto;
      & .header {
        & h1 {
          text-align: center;
          font-size: 1.5rem;
        }
      }

      & .swiperCon {
        margin-top: 2rem;
        display: flex;
        & .circle {
          height: 70px !important;
          width: 70px !important;
          margin: auto 1rem;
          background-color: #fff;
          border-radius: 100%;
        }
        & .swiper {
          width: 80%;
          height: 300px;
          & .swiper-pagination-bullet {
            background-color: #94490b;
            height: 10px;
            width: 10px;
            animation: width-shrink 0.3s ease-in-out both;
            position: relative;

            &.swiper-pagination-bullet-active {
              width: 25px;
              border-radius: 25px;
              animation: width-expand 0.3s ease-in-out both;
            }
          }

          @keyframes width-expand {
            0% {
              -webkit-width: 10px;
              width: 10px;
            }
            50% {
              -webkit-width: 20px;
              width: 20px;
            }
            100% {
              -webkit-width: 25px;
              width: 25px;
            }
          }
          @keyframes width-shrink {
            0% {
              -webkit-width: 25px;
              width: 25px;
            }
            50% {
              -webkit-width: 20px;
              width: 20px;
            }
            100% {
              -webkit-width: 10px;
              width: 10px;
            }
          }
          & .perSlide {
            display: flex;
            justify-content: center;
            align-items: center;
            & .card {
              background-color: #fff;
              padding: 1rem;
              width: 300px;
              & p {
                font-size: 13px;
                color: #8b91a7;
              }
              & h5 {
                font-size: 13px;
              }
              & .iconCon {
                color: #b3b3b3;
                margin-top: -1rem;
                font-size: 13px;

                & .star {
                  color: #ecc900;
                }
              }
            }
          }
        }
      }
    }
  }
  & .CompanyPartners {
    padding: 3rem 0;
    & .wrap {
      width: 70%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & h1 {
        font-size: 1.5rem;
      }
      & .companies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        & .img {
          height: 70px;
          width: 170px;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1rem;
          border: 1px solid #dfdfdf;
          & img {
            height: 70px;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

export default MainContents;
