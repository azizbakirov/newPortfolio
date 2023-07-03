import React from 'react'
import img from '../image/text.jpg'
import './circle.scss'

function Circle({img}) {
  return (
    <div className="circles">
      <img src={img} alt="" />
      <i className="fa-solid fa-arrow-down"></i>
    </div>
  );
}

export default Circle