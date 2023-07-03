import "./work.scss";
// import logo from "./logo/logo1.png";

function Work({work}) {

  // console.log(work[0]);
  return (
    <a href={work[0].url} target="_blank">
      <div className={`work hover_click`}>
        <div className={`main_work  ${work[0].class}`}>
          <div className="item_desc">
            <p>01.</p>
            <p>Feture</p>
          </div>
          <div className="logo_work">
            <img src={work[0].logo} alt="logos" />
          </div>
          <div className="item_info">
            <p>{work[0].name}</p>
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Work;
