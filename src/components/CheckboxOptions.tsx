import { Accordion, Form } from "react-bootstrap";
import InitialCheckboxData from "../data/InitialCheckboxData"

type CheckBoxOptionProps = {
  onClick: () => void
}

type CheckboxOptionsType = {
  id: string
  value: string
  label: string
  type: string
  checked: boolean
}

//include options to map
export function CheckboxOptions({onClick} : CheckBoxOptionProps){
  return (
    <Accordion>
      <Accordion.Header> Issues </Accordion.Header>
      <Accordion.Body>
        {
          InitialCheckboxData.map(cb_data => (
            return (
              <Form.Check 
              label={cb_data.label}
            />
            ) 
          ))
        }
      </Accordion.Body>
    </Accordion>
  )
}

/* {note.tags.map(tag => (
  <Badge key={tag.id} className="text-truncate"> {tag.label}</Badge>
  ))} */