import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Modal from "react-bulma-components/lib/components/modal";
import EventForm from "../EventForm/EventForm";
import Button from "react-bulma-components/lib/components/button";
import Card from "react-bulma-components/lib/components/card";

//actionCreators
import { addEvent } from "../../store/actionCreators/event";
import { closeModal } from "../../store/actionCreators/modal";

//styles
import styles from "./EventModal.module.css";

const { Header, Footer, Content } = Card;
const { Title } = Header;

export default function AddEventModal() {
  const dispatch = useDispatch();
  const { currentlyOpenModal } = useSelector((state) => state.modal);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    venue: "",
  });

  function onFormValueChange(clickEvent) {
    const { name, value } = clickEvent.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function onFormSubmit() {
    dispatch(addEvent(formData));
  }
  function onModalClose() {
    dispatch(closeModal());
  }

  return (
    <Modal show={currentlyOpenModal === "event"} onClose={onModalClose}>
      <Card className={styles.eventModal}>
        <Header>
          <Title>Add An Event</Title>
        </Header>
        <Content>
          <EventForm
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
