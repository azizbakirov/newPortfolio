import "./Header.scss";
import logo from "./logo.png";


function Header() {
  function hoverMouseWork() {
    document.querySelector(".hover_text").style.opacity = 1;
  }
  function hoverLeaveWork() {
    document.querySelector(".hover_text").style.opacity = 0;
  }
  function hoverMouseAbout() {
    document.querySelector(".about .hover_text").style.opacity = 1;
  }
  function hoverLeaveAbout() {
    document.querySelector(".about .hover_text").style.opacity = 0;
  }

  return (
    <header>
      <div className="headers">
        <div className="my_info hover_click">
          <div className="logos infos">
            <div className="item_title">Frontend Developer</div>
            <div className="my_logo">
              <img src={logo} alt="Aziz Bakirov logo" />
            </div>
          </div>
          <div className="title">
            <div className="marquee">
              <div>
                <span>Hi, I am Aziz Bakirov Frontend developer. </span>
                <span>Hi, I am Aziz Bakirov Frontend developer. </span>
              </div>
            </div>
          </div>
          <div className="info infos">
            <p>Se our service</p>
            <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
        <div className="temps">
          <div className="temp">
            <div
              onMouseEnter={() => hoverMouseWork()}
              onMouseLeave={() => hoverLeaveWork()}
              className="work hover_click"
            >
              <div className="hover_text">Click to see my work</div>
              <div className="item">
                <p>Work</p>
                <i className="fa-solid fa-terminal"></i>
              </div>
            </div>
            <div
              onMouseEnter={() => hoverMouseAbout()}
              onMouseLeave={() => hoverLeaveAbout()}
              className="about hover_click"
            >
              <div className="hover_text">Learn more About Us.</div>
              <div className="item">
                <p>About Us</p>
                <i className="fa-regular fa-address-card"></i>
              </div>
            </div>
          </div>
          <div className="contact hover_click">
            <div className="hover_text">
              Contact me if you have any questions
            </div>
            <div className="item">
              <p>Contact Us</p>
              <i className="fa-regular fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
