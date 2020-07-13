import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Modal from "react-bulma-components/lib/components/modal";
import EventForm from "../EventForm/EventForm";
import Card from "react-bulma-components/lib/components/card";

//actionCreators
import { addEvent, updateEvent } from "../../store/actionCreators/event";
import { closeModal } from "../../store/actionCreators/modal";

//hooks
import useUpdatableEvent from "../../hooks/useUpdatableEvent";

//styles
import styles from "./EventModal.module.css";

const { Header, Footer, Content } = Card;
const { Title } = Header;

export default function AddEventModal() {
  const dispatch = useDispatch();
  const { currentlyOpenModal } = useSelector((state) => state.modal);
  const { updatableEvent } = useSelector((state) => state.eventAction);

  const isAnyEventUpdatable = useUpdatableEvent();

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
    dispatch(addEvent(formData)).then(() => {
      setFormData({
        title: "",
        date: "",
        venue: "",
      });
    });
  }

  function onModalClose() {
    dispatch(closeModal());
  }

  function onEventUpdate() {
    dispatch(updateEvent(formData)).then(() => {
      setFormData({
        title: "",
        date: "",
        venue: "",
      });
    });
  }

  useEffect(() => {
    if (updatableEvent) {
      setFormData({ ...updatableEvent });
    }
  }, [updatableEvent]);

  return (
    <Modal
      show={currentlyOpenModal === "event" || isAnyEventUpdatable}
      onClose={onModalClose}
    >
      <Card className={styles.eventModal}>
        <Header>
          <Title>{isAnyEventUpdatable ? "Update Event" : "Add An Event"}</Title>
        </Header>
        <Content>
          <EventForm
            formData={formData}
            onFormValueChange={onFormValueChange}
          />
        </Content>
        <Footer className={styles.footer}>
          {isAnyEventUpdatable ? (
            <button
              className='button is-info is-fullwidth'
              onClick={onEventUpdate}
            >
              Update Event
            </button>
          ) : (
            <button
              className={`button is-success is-fullwidth ${styles.submitButton}`}
              onClick={onFormSubmit}
            >
              Submit
            </button>
          )}
        </Footer>
      </Card>
    </Modal>
  );
}
