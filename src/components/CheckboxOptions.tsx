import { Accordion, Form } from "react-bootstrap";
import {InitialCheckboxData} from "../data/InitialCheckboxData"
import { useState } from "react";

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
  const [notes, setNotes] = useState<String[]>([
    
  ]);


  function updateNotes((e: Event) => {
    const target = e.target as HTMLInputElement;
    if(target.checked) {
      notes.push(target.value)
    } else {
      const updatedNotes = notes.filter((noteText) => {
        return noteText != target.value
      })
      setNotes(updatedNotes)
    }

  });

  return (
    <Accordion>
      <Accordion.Header> Issues </Accordion.Header>
      <Accordion.Body> 
          {InitialCheckboxData.map((cb_data, index) => (
              <Form.Check key={cb_data.id} label={cb_data.label} onChange={(e) => updateNotes()}/>
          ))}
      </Accordion.Body>
    </Accordion>
  )
}

/* {note.tags.map(tag => (
  <Badge key={tag.id} className="text-truncate"> {tag.label}</Badge>
  ))} */