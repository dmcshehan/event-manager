import React, { useState } from "react";
import Modal from "react-bulma-components/lib/components/modal";
import EventForm from "../EventForm/EventForm";
import Button from "react-bulma-components/lib/components/button";
import Card from "react-bulma-components/lib/components/card";
import styles from "./EventModal.module.css";

const { Header, Footer, Content } = Card;
const { Title } = Header;

export default function AddEventModal({ onModalClose, ...props }) {
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
    console.log(formData);
  }

  return (
    <Modal show={true} onClose={onModalClose} {...props}>
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
