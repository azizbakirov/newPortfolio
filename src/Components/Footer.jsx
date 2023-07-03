import "./footer.scss"
import logo from './image/logo.png'

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
        <div className="sv">My RESUME</div>
      </div>
    </footer>
  );
}

export default Footer