import React from "react";
import {
  Field,
  Control,
  Label,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Help,
  InputFile,
} from "react-bulma-components/lib/components/form";

export default function AddEventForm() {
  return (
    <div>
      <form action=''>
        <Field>
          <Label>Email</Label>
          <Control>
            <Input name='email' type='email' placeholder='Email input' />
          </Control>
        </Field>
        <Field>
          <Label>Name</Label>
          <Control>
            <Input name='name' type='text' placeholder='Name input' />
          </Control>
        </Field>
      </form>
    </div>
  );
}
