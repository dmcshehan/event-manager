import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "react-bulma-components/lib/components/box";
import Columns from "react-bulma-components/lib/components/columns";
import {
  Field,
  Control,
  Input,
} from "react-bulma-components/lib/components/form";
import Button from "react-bulma-components/lib/components/button";
import Card from "react-bulma-components/lib/components/card";

import { addInvitee } from "../../store/actionCreators/event";

import classNames from "./InviteeForm.module.scss";

const { Column } = Columns;

export default function InviteeForm() {
  const dispatch = useDispatch();

  const [inviteeInfo, setinviteeInfo] = useState({
    name: "",
    status: "confirmed",
  });

  const { name, status } = inviteeInfo;

  function changeinviteeInfo(e) {
    const { name, value } = e.target;
    setinviteeInfo({
      ...inviteeInfo,
      [name]: value,
    });
  }

  function handleAddInvitee(e) {
    e.preventDefault();
    dispatch(addInvitee(inviteeInfo));
  }

  return (
    <Card className={classNames.inviteeForm}>
      <form>
        <Columns>
          <Column size={6}>
            <Field>
              <Control>
                <Input
                  name='name'
                  placeholder='Invitee Name'
                  value={name}
                  onChange={changeinviteeInfo}
                />
              </Control>
            </Field>
          </Column>
          <Column size={4}>
            <Field>
              <Control>
                <div className={`select ${classNames.status}`}>
                  <select
                    name='status'
                    value={status}
                    onChange={changeinviteeInfo}
                    className={classNames.status}
                  >
                    <option value='confirmed'>Confirmed</option>
                    <option value='unconfirm'>Unconfirm</option>
                  </select>
                </div>
              </Control>
            </Field>
          </Column>
          <Column size={2}>
            <Field>
              <Button
                color='primary'
                className={classNames.submit}
                onClick={handleAddInvitee}
                disabled={inviteeInfo.name === ""}
              >
                Add Invitee
              </Button>
            </Field>
          </Column>
        </Columns>
      </form>
    </Card>
  );
}
