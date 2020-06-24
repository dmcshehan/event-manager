import React, { useState } from "react";
import {
  Field,
  Control,
  Label,
  Input,
} from "react-bulma-components/lib/components/form";

export default function AddEventForm({ formData, onFormValueChange }) {
  const { title, date, venue } = formData;

  return (
    <form action=''>
      <Field>
        <Label>Title</Label>
        <Control>
          <Input
            name='title'
            type='text'
            placeholder=''
            value={title}
            onChange={onFormValueChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Date</Label>
        <Control>
          <Input
            name='date'
            type='date'
            placeholder=''
            value={date}
            onChange={onFormValueChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Venue</Label>
        <Control>
          <Input
            name='venue'
            type='text'
            placeholder=''
            value={venue}
            onChange={onFormValueChange}
          />
        </Control>
      </Field>
    </form>
  );
}
