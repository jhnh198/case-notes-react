import { Accordion, Form } from "react-bootstrap";

type CheckBoxOptionProps = {
  onClick: () => void
}


//include options to map
export function CheckboxOptions({onClick} : CheckBoxOptionProps){
  return (
    <Accordion>
      <Accordion.Header> Issues </Accordion.Header>
      <Accordion.Body>
      <Form.Check 
        label={'test'}
      />
      </Accordion.Body>
    </Accordion>
  )
}