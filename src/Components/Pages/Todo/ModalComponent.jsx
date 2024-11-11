import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  height: "350px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: "20px",
  textAlign: "center",
};

export default function ModalComponent({ children, showModal, setShowModal }) {
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        maskClosable={false}
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}