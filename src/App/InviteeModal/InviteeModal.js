import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Modal from "react-bulma-components/lib/components/modal";
import InviteeForm from "../InviteeForm/InviteeForm";
import Button from "react-bulma-components/lib/components/button";
import Card from "react-bulma-components/lib/components/card";

//actionCreators
import { addInvitee } from "../../store/actionCreators/invitee";
import { closeModal } from "../../store/actionCreators/modal";

//styles
import styles from "./InviteeModal.module.css";

const { Header, Footer, Content } = Card;
const { Title } = Header;

export default function AddInviteeModal() {
  const dispatch = useDispatch();
  const { currentlyOpenModal } = useSelector((state) => state.modal);

  const [formData, setFormData] = useState({
    name: "",
    status: "confirmed",
  });

  function onFormValueChange(clickEvent) {
    const { name, value } = clickEvent.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function onFormSubmit() {
    dispatch(addInvitee(formData)).then(() => {
      setFormData({
        name: "",
        status: "confirmed",
      });
    });
  }
  function onModalClose() {
    dispatch(closeModal());
  }

  return (
    <Modal show={currentlyOpenModal === "invitee"} onClose={onModalClose}>
      <Card className={styles.eventModal}>
        <Header>
          <Title>Add An Invitee</Title>
        </Header>
        <Content>
          <InviteeForm
            formData={formData}
            onFormValueChange={onFormValueChange}
          />
        </Content>
        <Footer className={styles.footer}>
          <Button
            className={styles.submitButton}
            color='primary'
            onClick={onFormSubmit}
          >
            Submit
          </Button>
        </Footer>
      </Card>
    </Modal>
  );
}
