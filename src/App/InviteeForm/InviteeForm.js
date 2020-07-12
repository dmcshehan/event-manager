import React from "react";

import {
  Field,
  Control,
  Input,
} from "react-bulma-components/lib/components/form";

import classNames from "./InviteeForm.module.scss";

export default function InviteeForm({ formData, onFormValueChange }) {
  const { name, status } = formData;
  return (
    <form>
      <Field>
        <Control>
          <Input
            name='name'
            placeholder='Invitee Name'
            value={name}
            onChange={onFormValueChange}
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <div className={`select ${classNames.status}`}>
            <select
              name='status'
              value={status}
              onChange={onFormValueChange}
              className={classNames.status}
            >
              <option value='confirmed'>Confirmed</option>
              <option value='unconfirm'>Unconfirm</option>
            </select>
          </div>
        </Control>
      </Field>
    </form>
  );
}
