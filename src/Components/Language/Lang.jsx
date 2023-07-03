import "./lang.scss";

function Lang({ info }) {
  return (
    <div className="lang">
      <div className="info_lan">
        <div className="infos_icon">
          <i className={info[0].icon}></i>
        </div>
        <div className="infos">
          <p>{info[0].title}</p>
          <p>{info[0].info}</p>
        </div>
      </div>
      <div className="my_infos">
        <div className="title_info">
          <p>{info[1].info}</p>
          <p className="title">{info[1].title}</p>
        </div>
      </div>
    </div>
  );
}

export default Lang;
