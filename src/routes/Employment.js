import React, { useState } from "react";
import Modal from "../components/Modal";
import Tile from "../components/Tile";
import "./Employment.css";

function Employment() {
  const [modal, setModal] = useState(false);
  const [modalBody, setModalBody] = useState("");
  const width = "30vw";
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
          setModalBody("Consultant at Deloitte (2021-2024)");
        }}
      />
      <Tile
        title="Verizon"
        width={width}
        height={height}
        onClick={() => {
          setModal(true);
          setModalBody("Software Engineer III at Verizon (2024-present)");
        }}
      />
      {modal && <Modal body={modalBody} onExit={onModalExit} />}
    </div>
  );
}

export default Employment;
