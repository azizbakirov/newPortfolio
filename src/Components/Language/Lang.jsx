import "./lang.scss";


function Lang({ info, anim }) {
  

  return (
    <div className="lang">
      <div
        data-aos={anim[0].aos}
        data-aos-duration={anim[0].duration1}
        className="info_lan"
      >
        <div className="infos_icon">
          <i className={info[0].icon}></i>
        </div>
        <div className="infos">
          <p>{info[0].title}</p>
          <p>{info[0].info}</p>
        </div>
      </div>
      <div
        data-aos={anim[1].aos}
        data-aos-duration={anim[1].duration}
        className="my_infos"
      >
        <div className="title_info">
          <p>{info[1].info}</p>
          <p className="title">{info[0].title}</p>
        </div>
      </div>
    </div>
  );
}

export default Lang;
