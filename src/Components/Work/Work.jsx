import "./work.scss";

function Work({work, anim}) {



  return (
    <a href={work[0].url} target="_blank">
      <div className={`work hover_click`}>
        <div data-aos={anim[0].aos} className={`main_work  ${work[0].class}`}>
          <div className="item_desc">
            <p>Feture</p>
          </div>
          <div className="logo_work">
           <div className="photo">
             <img  src={work[0].logo}  />
             <p>{work[0].title}</p>
           </div>
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
