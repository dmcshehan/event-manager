import React, { useState } from "react";
import Box from "react-bulma-components/lib/components/box";
import Columns from "react-bulma-components/lib/components/columns";
import {
  Field,
  Control,
  Label,
  Input,
  Select,
} from "react-bulma-components/lib/components/form";
import Button from "react-bulma-components/lib/components/button";

import classNames from "./InviteeForm.module.css";

const { Column } = Columns;

export default function InviteeForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    status: "",
  });

  const { name, status } = formValues;

  function changeFormValues(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleAddInvitee(e) {
    e.preventDefault();
  }

  return (
    <Box className={classNames.inviteeForm}>
      <form>
        <Columns>
          <Column size={6}>
            <Field>
              <Control>
                <Input
                  name='name'
                  placeholder='Invitee Name'
                  value={name}
                  onChange={changeFormValues}
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
                    onChange={changeFormValues}
                    className={classNames.status}
                  >
                    <option value='confirmed'>Confirmed</option>
                    <option value='confirm'>Unconfirm</option>
                  </select>
                </div>
              </Control>
            </Field>
          </Column>
          <Column size={2}>
            <Field>
              <Button className={classNames.submit} onClick={handleAddInvitee}>
                Add
              </Button>
            </Field>
          </Column>
        </Columns>
      </form>
    </Box>
  );
}
