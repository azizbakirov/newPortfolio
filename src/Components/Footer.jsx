import "./footer.scss"
import logo from './image/logo.png'
// import SV from "../Files/Aziz.pdf"

function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="copright">
          <p>Copyright © 2023</p>
        </div>
        <a target="_blank" download={"Resume Aziz"} className="sv">My RESUME</a>  
      </div>
    </footer>
  );
}

export default Footer