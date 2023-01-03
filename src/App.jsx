import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NavCon from "./components/NavCon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContents from "./components/MainContents";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import img8 from "./assets/image8.png";
import OurProducts from "./components/OurProducts";
import MeetOurTeam from "./components/MeetOurTeam";
import ContactUs from "./components/ContactUs";
import blob from "./assets/greenBlob.svg";
import { useIsInViewport } from "./utils/UseInView";
function App() {
  const [count, setCount] = useState(0);
  const [active, setactive] = useState("");
  const home = useRef(null);
  const about = useRef(null);
  const products = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);

  const homeView = useIsInViewport(home);
  useEffect(() => {
    let ref = "";
    if (active === "") {
      ref = top;
    } else if (active === "home") {
      ref = home;
    } else if (active === "about") {
      ref = about;
    } else if (active === "products") {
      ref = products;
    } else if (active === "services") {
      ref = services;
    } else if (active === "contact") {
      ref = contact;
    }
    if (ref && ref.current) {
      const executeScroll = (ref) =>
        ref.current.scrollIntoView({ behavior: "smooth" });
      executeScroll(ref);
      // useMountEffect(executeScroll); // Scroll on mount
    }
    //setchange(true);
    setactive("")
  }, [active]);
  return (
    <Router>
      <Con className="App">
        <div className="backgroundImg">
          <img src={blob} alt="" />
          {/* <div className="shadow"></div> */}
        </div>
        <div className="Main" ref={home}>
          <NavCon active={setactive} />
          <MainContents actives={setactive} />
        </div>
        <div className="AboutUs" ref={about}>
          <AboutUs />
        </div>
        <div className="OurServices" ref={services}>
          <OurServices />
          <div className="imgBanner">
            <img src={img8} alt="" />
            <div className="button">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className="OurProducts" ref={products}>
          <OurProducts />
        </div>
        <div className="MeetOurTeam">
          <MeetOurTeam />
        </div>
        <div className="ContactUs" ref={contact}>
          <ContactUs />
        </div>
      </Con>
    </Router>
  );
}
const Con = styled.div`
  display: flex;
  flex-direction: column;
  & .backgroundImg {
    // box-shadow: inset 0px 0px 100px 75px rgba(0, 0, 0, 0.65);
    height: 100vh;
    z-index: 1;
    position: absolute;
    width: 100%;

    & img {
      position: absolute;
      width: 75%;
      object-fit: fill;
      //  max-width: 1800px;
      height: 650px;
      top: 0;
      object-fit: cover;
    }
    & .shadow {
      position: absolute;
      width: 100vw;
      max-width: 1800px;
      height: 100vh;
      top: 0;
      background-color: #16161699;
    }
  }
  & .Main {
    height: 100vh;
    width: 100%;
    max-height: 800px;
    position: relative;
    top: 0;
    z-index: 2;
  }
  & .AboutUs {
    // height: 100vh;
    width: 100%;

    background-color: #fff;
  }
  & .OurServices {
    width: 100%;
    & .imgBanner {
      display: flex;
      margin-top: 2rem;
      height: 300px;
      justify-content: center;
      & img {
        width: 100%;
        position: absolute;
        height: 300px;
        object-fit: cover;
      }
      & button {
        background: rgba(90, 185, 117, 0.4);
        border: 3px solid #24753b;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px 30px;
        position: relative;
        text-transform: uppercase;
        //left: 45vw;
        bottom: -210px;
        cursor: pointer;
        color: #fff;
        font-size: 20px;
        // text-shadow:  0px 2px rgba(0, 0, 0, 0.25);
        &:hover {
          background: #24753b;
        }
      }
    }
  }
`;

export default App;
