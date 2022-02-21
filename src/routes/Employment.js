import React, { useState } from "react";
import Modal from "../components/Modal";
import Tile from "../components/Tile";
import "./Employment.css";

function Employment() {
  const [modal, setModal] = useState(false);
  const [modalBody, setModalBody] = useState("");
  const width = "35vw";
  const height = "30vh";

  const onModalExit = () => {
    setModal(false);
    setModalBody("");
  };

  return (
    <div className="employment">
      <Tile
        title="Wipro"
        width={width}
        height={height}
        onClick={() => {
          setModal(true);
          setModalBody("Project Engineer at Wipro (2019-2021)");
        }}
      />
      <Tile
        title="Deloitte"
        width={width}
        height={height}
        onClick={() => {
          setModal(true);
          setModalBody("Analyst at Deloitte (2021-present)");
        }}
      />
      {modal && <Modal body={modalBody} onExit={onModalExit} />}
    </div>
  );
}

export default Employment;
