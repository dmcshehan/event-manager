import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Modal from "react-bulma-components/lib/components/modal";
import InviteeForm from "../InviteeForm/InviteeForm";
import Button from "react-bulma-components/lib/components/button";
import Card from "react-bulma-components/lib/components/card";

//actionCreators
import {
  addInvitee,
  clearUpdatableInvitee,
  updateInvitee,
} from "../../store/actionCreators/invitee";
import { closeModal } from "../../store/actionCreators/modal";

//styles
import styles from "./InviteeModal.module.css";

const { Header, Footer, Content } = Card;
const { Title } = Header;

export default function AddInviteeModal() {
  const dispatch = useDispatch();
  const { currentlyOpenModal } = useSelector((state) => state.modal);
  const { updatableInvitee } = useSelector((state) => state.invitee);

  const [formData, setFormData] = useState({
    name: "",
    status: "confirmed",
  });

  useEffect(() => {
    if (updatableInvitee) {
      setFormData({
        ...updatableInvitee,
      });
    }
  }, [updatableInvitee]);

  function onFormValueChange(clickEvent) {
    const { name, value } = clickEvent.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function resetState() {
    setFormData({
      name: "",
      status: "confirmed",
    });
  }

  function onFormSubmit() {
    if (updatableInvitee) {
      return dispatch(updateInvitee(formData)).then(resetState);
    }
    dispatch(addInvitee(formData)).then(resetState);
  }

  function onModalClose() {
    if (updatableInvitee) {
      return dispatch(clearUpdatableInvitee());
    }
    dispatch(closeModal());
  }

  return (
    <Modal
      show={currentlyOpenModal === "invitee" || updatableInvitee !== null}
      onClose={onModalClose}
    >
      <Card className={styles.eventModal}>
        <Header>
          <Title>
            {updatableInvitee ? "Update Invitee" : "Add An Invitee"}
          </Title>
        </Header>
        <Content>
          <InviteeForm
            formData={formData}
            onFormValueChange={onFormValueChange}
          />
        </Content>
        <Footer className={styles.footer}>
          {updatableInvitee ? (
            <Button
              className={styles.submitButton}
              color='info'
              onClick={onFormSubmit}
            >
              Update Invitee
            </Button>
          ) : (
            <Button
              className={styles.submitButton}
              color='primary'
              onClick={onFormSubmit}
            >
              Add Invitee
            </Button>
          )}
        </Footer>
      </Card>
    </Modal>
  );
}
