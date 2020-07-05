import React from "react";
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
  return (
    <Box className={classNames.inviteeForm}>
      <form>
        <Columns>
          <Column size={6}>
            <Field>
              <Control>
                <Input
                  placeholder='Text input'
                  value={"hi"}
                  onChange={() => {}}
                />
              </Control>
            </Field>
          </Column>
          <Column size={4}>
            <Field>
              <Control>
                <div className={`select ${classNames.status}`}>
                  <select
                    value='hi'
                    onChange={() => {}}
                    className={classNames.status}
                  >
                    <option value='hi'>Confirmed</option>
                    <option>Unconfirm</option>
                  </select>
                </div>
              </Control>
            </Field>
          </Column>
          <Column size={2}>
            <Field>
              <Button className={classNames.submit}>Add</Button>
            </Field>
          </Column>
        </Columns>
      </form>
    </Box>
  );
}
