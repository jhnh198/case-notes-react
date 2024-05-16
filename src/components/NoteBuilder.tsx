import { Form } from 'react-bootstrap'
import { InitialCheckboxData } from '../data/InitialCheckboxData'
import { useState } from 'react'

export default function NoteBuilder() {
  const [notes, setNotes] = useState<string[]>([]);

  const handleCheckboxChange = (e: any, value: any) => {
    if (e.target.checked) {
      console.log(value)
      setNotes((prevNotes: string[]) => [...prevNotes, value]);
    } else {
      console.log(value)
      setNotes((prevNotes: string[]) => prevNotes.filter(note => note !== value));
    }
  };
  return (
    <>
      <Form>
      <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={15}
            value={notes.join("\n")}
          />
      </Form.Group>
      {InitialCheckboxData.map((note: any) => (
        <Form.Check 
          type="checkbox"
          id={`${note.id}`}
          label={note.label}
          onChange={(e) => handleCheckboxChange(e, note.value)}
          />
        ))}
      </Form>
    </>

  )
}

