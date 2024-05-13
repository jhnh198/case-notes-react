import { Accordion, Form } from "react-bootstrap";
import {InitialCheckboxData} from "../data/InitialCheckboxData"
import { useState } from "react";

type CheckBoxOptionProps = {
  notes: string[],
  updateNotes: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type CheckboxOptionsType = {
  id: string
  value: string
  label: string
  type: string
  checked: boolean
}

//include options to map
export function CheckboxOptions({notes, updateNotes} : CheckBoxOptionProps){

  return (
    <Accordion>
      <Accordion.Header> Issues </Accordion.Header>
      <Accordion.Body> 
          {InitialCheckboxData.map((cb_data, index) => (
              <Form.Check 
                key={cb_data.id}
                label={cb_data.label}
                onChange={(e) => updateNotes(e)}
              />
          ))}
      </Accordion.Body>
    </Accordion>
  )
}
  