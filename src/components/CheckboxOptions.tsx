import { Accordion, Button, Form } from "react-bootstrap";

//include options to map
export function CheckboxOptions(){
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