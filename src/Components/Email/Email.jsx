import React from 'react'
import "./email.scss"

function Email() {
  return (
    <form>
      <div className="forms">
        <div className="names">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
        </div>
        <div className="area">
          <textarea
            name="Message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
      <div className="btn hover_click">
        <button>
          <i class="fa-regular fa-paper-plane"></i>
          <p>Send</p>
        </button>
      </div>
    </form>
  );
}

export default Email