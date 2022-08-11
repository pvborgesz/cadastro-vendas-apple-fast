import React from "react";
import { Modal } from "react-bootstrap";
import "./Alert.css";

interface Props {
  hide: any;
  msg: string;
  status: string;
}

export default function indexAlert(props: Props): JSX.Element {
  return (
    <>
      <Modal
        className="modal-alert"
        show={true}
        onHide={() => props.hide()}
        animation={false}
        backdropClassName="modal-alert-backdrop"
      >
        <Modal.Header closeButton className={props.status}>
          <div className="alert-icon"></div>
          <div className="alert-msg">{props.msg}</div>
        </Modal.Header>
      </Modal>
    </>
  );
}
