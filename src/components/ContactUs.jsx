import React from "react";
import styled from "styled-components";
import { CiLocationOn, CiMail } from "react-icons/ci";
import {
  IoCall,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
} from "react-icons/io5";

const contact = [
  {
    name: "Location",
    icon: <CiLocationOn />,
    label:
      "Unit 905, Pearl of The Orient Tower, Roxas Boulevard, Ermita, Manila",
  },
  {
    name: "mail",
    icon: <CiMail />,
    label: "info@8mgmtrading.com.ph",
  },
  {
    name: "Call",
    icon: <IoCall />,
    label: "+63 2 247 2854 / 247 0855",
  },
  {
    name: "instagram",
    icon: <IoLogoInstagram />,
    label: "8mgmtrading.com.ph",
  },
  {
    name: "linkedin",
    icon: <IoLogoLinkedin />,
    label: "company/8mgmtrading",
  },
  {
    name: "facebook",
    icon: <IoLogoFacebook />,
    label: "@8mgm_trading",
  },
];

const ContactUs = () => {
  return (
    <Con>
      <div className="wrapper">
        <div className="cardCon">
          <div className="card">
            {" "}
            <div className="form">
              <h1>LEAVE US A MESSAGE</h1>
              <form action="">
                <input type="text" id="name" placeholder="Your name" />
                <input type="email" id="email" placeholder="Email Address" />
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="9"
                  placeholder="Message"
                ></textarea>
                <div className="btn">
                  <button>SEND</button>
                </div>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="mapWrapper">
              {" "}
              <iframe
                style={{ width: "100%", height: "300px" }}
                class="gmap_iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?hl=en&amp;q=Corner,1240 Roxas Blvd Ermita, 667 Zone 072, Manila, 1000, Metro Manila, Philippines&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            <div className="header">
              <h1>CONTACT US</h1>
              <p>
                Feel free to contact us anytime, We will get back to you as soon
                as we can
              </p>
              <div className="contacts">
                <div className="left">
                  {contact.slice(0, 3).map((item, i) => {
                    return (
                      <div className="contact" key={i}>
                        {item.icon}
                        <p>{item.label}</p>
                      </div>
                    );
                  })}
                </div>{" "}
                <div className="right">
                  {contact.slice(3, 7).map((item, i) => {
                    return (
                      <div className="contact" key={i}>
                        {item.icon}
                        <p>{item.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Con>
  );
};

const Con = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  & .wrapper {
    width: 80%;

    & .cardCon {
      display: flex;
      background-color: #00a930;
      justify-content: center;
      border-radius: 20px;
      height: 600px;

      & .card {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 600px;
        & .form {
          background-color: #ffff;
          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          padding: 20px;
          width: 300px;
          height: 450px;
          margin-left: -10rem;

          align-items: center;
          & form {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          & h1{
            color: #393939;
            font-size: 20px;
            font-weight: bold;
            margin: 1rem;
            margin-top: 2rem;
          }
          & input,
          textarea {
            border: none;
            outline: none;
            font-size: 14px;
            width: 80%;
            margin: 0.5rem auto;
            // height: 30px;
            padding: 10px;
            color: #0c0c0c;
            background-color: #eeeeee6b;
            border: none;
            border-bottom: 1px solid;
            outline: none;
          }
          & .btn{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 1rem;
            & button{
                border: none;
                padding: 10px 30px;
                border-radius:20px;
                background-color: #00a930;
                color: #fff;
            }
          }
        }
      }
      & .right {
        width: 70%;
        & .mapWrapper {
          margin: 1rem auto;
        }
        & .header {
          & h1 {
            color: #fff;
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          & p {
            color: #efefef;
            font-size: 1rem;
            margin-top: -0.5rem;
          }
        }
        & .contacts {
          display: flex;

          justify-content: center;
          align-items: center;

          width: 100%;
          margin: 1rem;
          margin-top: 2rem;
          & .contact {
            color: #fff;
            font-size: 1rem;

            display: inline-flex;
            & p {
              margin-top: 0;
              font-size: 1rem;
              margin-left: 10px;
            }
          }
          & .left {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          & .right {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;

export default ContactUs;
