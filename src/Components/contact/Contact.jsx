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
              <a href="mailto:azizbakirov9@gmail.com" target="_blank">azizbakirov9@gmail.com</a>
              <a href="tel:+998998687845" target="_blank">+998 (99) 868 - 78 - 45</a>
            </div>
            <div className="social">
              <a
                href="https://www.instagram.com/azizoficiall_/"
                target="_blank"
              >
                Instagram
              </a>
              <a href="https://t.me/azizbakirov" target="_blank">
                Telegram
              </a>
              <a
                href="https://www.linkedin.com/in/aziz-bakirov-742018243/"
                target="_blank"
              >
                Linkedln
              </a>
            </div>
          </div>
          <Circle img={img1} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
