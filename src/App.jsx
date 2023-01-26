import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import NavCon from "./components/NavCon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContents from "./components/MainContents";
import { InView } from "react-intersection-observer";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
import About from "./components/aboutpage/About";
import NewsNUpdate from "./components/newsNUpdatePage/NewsNUpdate";
import OurFleet from "./components/ourFleetPage/OurFleet";
import Careers from "./components/careersPage/Careers";
import ContactUs from "./components/contactusPage/ContactUs";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
function App() {
  const [inview, setinview] = useState(0);
  const [active, setactive] = useState("home");
  const [mobile, setmobile] = useState("open");
  const nav = useRef(null);
  const home = useRef(null);
  const about = useRef(null);
  const products = useRef(null);
  const contact = useRef(null);

  return (
    <Router>
      <Con className="App">
        <div className="bar">
          <FaBars
            className={mobile === "open" ? "open active" : "open"}
            onClick={() => {
              setmobile("close");
            }}
          />
          <AiOutlineClose
            className={mobile === "close" ? "close active" : "close"}
            onClick={() => {
              setmobile("open");
            }}
          />
        </div>
        <div className="Main" ref={home}>
          <InView onChange={setinview}>
            <div ref={nav}>
              <NavCon
                active={setactive}
                currActive={active}
                inView={inview}
                mobilepop={mobile}
              />
            </div>
          </InView>
          <MainNav active={setactive} currActive={active} mobilepop={mobile} />
          {/* <MainContents actives={setactive} /> */}
          {/* <About /> */}
          {/* <NewsNUpdate/> */}
          {/* <OurFleet/> */}
          {/* <Careers /> */}
          <Routes>
            <Route path="/" element={<MainContents actives={setactive} />} />{" "}
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<NewsNUpdate />} />
            <Route path="/ourfleet" element={<OurFleet />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
          {/* <ContactUs/> */}
          <Footer />
        </div>

        {/* <div className="ContactUs" ref={contact}>
          <ContactUs />
        </div> */}
      </Con>
      <style jsx>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        nav,
        span,
        div {
          font-family: "Roboto", sans-serif !important;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          top: 0;
          left: 0;
          margin: auto;
          overflow-x: hidden;
        }
      `}</style>
    </Router>
  );
}
const Con = styled.div`
  display: flex;
  flex-direction: column;
  //height: 100vh;
  //position: fixed;
  max-width: 2400px;
  // overflow: hidden;
  width: 100%;
  margin: auto;
  & .bar {
    position: fixed;
    right: 2rem;
    top: 2rem;
    font-size: 1.8rem;
    z-index: 30;
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
    & .close {
      display: none;

      &.active {
        display: flex;
        cursor: pointer;
      }
    }
    & .open {
      display: none;
      &.active {
        display: flex;
        cursor: pointer;
      }
    }
  }
  & .Main {
    //  height: 100vh;
    width: 100%;
    // max-height: 800px;
    position: relative;
    top: 0;
    z-index: 2;
    //opacity: 0;
  }
`;

export default App;
