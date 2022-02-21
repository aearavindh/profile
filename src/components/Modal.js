import React from "react";
import "./Modal.css";

function Modal({ body, onExit }) {
  return (
    <div className="modal">
      <div onClick={onExit} className="modal__backdrop"></div>
      <div className="modal__box">
        <p>{body}</p>
        <button onClick={onExit}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
