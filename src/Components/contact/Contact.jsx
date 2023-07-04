import "./contact.scss";
import Circle from "../Assets/Circle";
import img1 from "../image/text1.png";

function Contact({anim}) {
  return (
    <div data-aos={anim[0].aos} className="contact">
      <div className="card_one">
        <div className="info">
          <p>GET IN TOUCH!</p>
          <p className="title">
            To contact me, send me an email or contact me on social networks
          </p>
        </div>
        <div className="email_link">
          <div className="email_phone">
            <div className="phone">
              <a href="">azizbakirov9@gmail.com</a>
              <a href="">+998 (99) 868 - 78 - 45</a>
            </div>
            <div className="social">
              <a href="">Instagram</a>
              <a href="">Telegram</a>
              <a href="">Linkedln</a>
            </div>
          </div>
          <Circle img={img1} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
