import React from "react";
import "./Main.scss";
import Lang from "./Language/Lang";
import Work from "./Work/Work";
import logo from "./Work/logo/logo1.png";
import Contact from "./contact/Contact";
import Circle from "./Assets/Circle";
import img from "./image/text.jpg";
import Email from "./Email/Email";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Main() {
  const resurceLang = [
    [
      {
        icon: "fa-brands fa-react",
        title: "Lorem ipsum ",
        info: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
      },
      {
        title: "lorem",
        info: "Lorem ipsum dolor sit amet.",
      },
    ],
    [
      {
        icon: "fa-brands fa-square-js",
        title: "Lorem ipsum ",
        info: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
      },
      {
        title: "lorem",
        info: "Lorem ipsum dolor sit amet.",
      },
    ],
    [
      {
        icon: "fa-brands fa-sass",
        title: "Lorem ipsum ",
        info: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
      },
      {
        title: "lorem",
        info: "Lorem ipsum dolor sit amet.",
      },
    ],
  ];

  const works = [
    [
      {
        class: "white",
        logo: logo,
        name: "Weather",
        url: "google.com",
      },
    ],
    [
      {
        class: "green_old",
        logo: logo,
        name: "Weather",
        url: "google.com",
      },
    ],
    [
      {
        class: "green",
        logo: logo,
        name: "Weather",
        url: "google.com",
      },
    ],
  ];

  const animObj = [
    [
      {
        aos: "fade-left",
        duration: "500",
        offset: 500,
      },
      {
        aos: "fade-right",
        duration: "500",
      },
    ],
    [
      {
        aos: "zoom-in",
        duration: "500",
      },
    ],
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <div className="about">
        <div className="wrapper">
          <div className="info">
            <p>ABOUT ME</p>
          </div>
          <div className="item_info">
            <p>
              I am a frontend developer, Currently, I am deeply organizing the
              field of programming, My programming languages
            </p>
            <div className="circle_text">
              <Circle img={img} />
            </div>
          </div>
        </div>
      </div>
      <div className="language">
        <Lang anim={animObj[0]} info={resurceLang[0]} />
        <Lang anim={animObj[0]} info={resurceLang[1]} />
        <Lang anim={animObj[0]} info={resurceLang[2]} />
      </div>
      <div className="work">
        <Work anim={animObj[1]} work={works[0]} />
        <div className="work_item ">
          <Work anim={animObj[1]} work={works[2]} />
          <Work anim={animObj[1]} work={works[1]} />
        </div>
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="email_send">
        <Email />
      </div>
    </main>
  );
}

export default Main;
