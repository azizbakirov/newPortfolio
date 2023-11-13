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
import Todo from "../Components/image/todo.png"
import Weather from "../Components/image/weather.png";
import port from "../Components/image/port.png";
import Gallery from "./Assets/logo/THE GALLERY.png"
import Trello from "./Assets/logo/Trello.png"

function Main() {
  const resurceLang = [
    [
      {
        icon: "fa-brands fa-react",
        title: "React JS",
        info: "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.",
      },
      {
        info: "React Javasript librariy",
      },
    ],
    [
      {
        icon: "fa-brands fa-square-js",
        title: "JavaScript (JS)",
        info: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
      },
      {
        info: "Language",
      },
    ],
    [
      {
        icon: "fa-brands fa-sass",
        title: "SASS (css)",
        info: "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
      },
      {
        info: "CSS with superpowers",
      },
    ],
    
  ];

  const works = [
    [
      {
        class: "white",
        logo: Todo,
        name: "Todo List",
        url: "https://todouzweb.netlify.app/",
      },
    ],
    [
      {
        class: "green_old",
        logo: port,
        name: "Portfolio",
        url: "https://azizbakirov.netlify.app/",
      },
    ],
    [
      {
        class: "green",
        logo: Weather,
        name: "Weather",
        url: "https://weatherruz.netlify.app/",
      },
    ],
    [
      {
        class: "white",
        logo: Gallery,
        name: "THE GALLERY",
        url: "https://thegallerys.netlify.app",
      },
    ],
    [
      {
        class: "green",
        logo: Trello,
        name: "Trello Cloning",
        url: "https://thegallerys.netlify.app",
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
        aos: "zoom-in-up",
        duration: "500",
      },
    ],
    [
      {
        aos: "fade-in",
        duration: "500",
      },
    ],
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  console.log(animObj);

  return (
    <main>
      <div id="about" data-aos={animObj[1][0].aos} className="about">
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
      <div className="work" id="work">
        <Work anim={animObj[1]} work={works[0]} />
        <div className="work_item ">
          <Work anim={animObj[1]} work={works[2]} />
          <Work anim={animObj[1]} work={works[1]} />
          <Work anim={animObj[1]} work={works[3]} />
          <Work anim={animObj[1]} work={works[4]} />
        </div>
      </div>
      <div id="contact" className="contact">
        <Contact anim={animObj[1]} />
      </div>
      <div className="email_send">
        <Email />
      </div>
    </main>
  );
}

export default Main;
