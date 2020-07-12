import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bulma-components/lib/components/button";

import { deleteInvitee } from "../../store/actionCreators/invitee";
import { setUpdatableInvitee } from "../../store/actionCreators/invitee";

const { Group } = Button;

function Buttons({ inviteeId, name }) {
  const { selectedEvent } = useSelector((state) => state.eventInfo);

  const dispatch = useDispatch();
  const { title } = selectedEvent;

  function deleteInviteeFromEvent() {
    if (
      window.confirm(`Are you sure you want to remove ${name} from ${title}?`)
    ) {
      dispatch(deleteInvitee(inviteeId));
    }
  }

  function makeInviteeUpdatable() {
    dispatch(setUpdatableInvitee(inviteeId));
  }

  return (
    <Group>
      <Button color='info' size='small' onClick={makeInviteeUpdatable}>
        <i className='far fa-edit'></i>
      </Button>
      <Button color='danger' size='small' onClick={deleteInviteeFromEvent}>
        <i className='far fa-trash-alt'></i>
      </Button>
    </Group>
  );
}

export default Buttons;
