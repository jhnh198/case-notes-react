import { Form } from 'react-bootstrap'
import { InitialCheckboxData } from '../data/InitialCheckboxData'
import { useState } from 'react'
import { Button } from 'react-bootstrap';

export default function NoteBuilder() {
  //todo: create an object that contains a header, notes, and a footer
  const [notes, setNotes] = useState({
    body: [],
    head: "Header",
    foot: "Footer",
    additionalNotes: "Additional Notes:",
    additionalNotesBody: [],
  } as any);

  const emailTemplateHeader = "Thank you for contacting Trimble Transportation. Please see below for case notes on your issue \n\n";
  const emailTemplateFooter = "Please reply to this email if you have any further questions or concerns. \n\n" + "Trimble Transportation";

  const handleCheckboxChange = (e: any, value: any) => {
    if (e.target.checked) {
      setNotes({ ...notes, body: [...notes.body, value] });
    } else {
      setNotes({ ...notes, body: notes.body.filter((note: any) => note !== value)});
    }
  };

  const handleEmailChange = (e: any) => {
    if (e.target.checked) {
      setNotes({ ...notes, head: emailTemplateHeader, foot: emailTemplateFooter});
    } else {
      setNotes({ ...notes, head: "", foot: ""});
    }
  }

  //todo: set an onchange event for the textarea to update the state of the additional notes body every few seconds
  function handleChange(e: any) {
    setNotes({ ...notes, additionalNotesBody: e.target.value.split("\n") });
  }

  // Function to copy text to clipboard
  const copyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = `${notes.head}\n${notes.body.join('\n')}\n${notes.additionalNotes}\n${notes.additionalNotesBody.join('\n')}\n${notes.foot}`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <>
      <Form>
      <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Button variant="primary m-4" onClick={copyToClipboard}>Copy</Button>

          <Form.Control
            as="textarea"
            rows={15}
            value={`
            ${notes.head}
            ${notes.body.join("\n")}
            ${notes.additionalNotes}
            ${notes.additionalNotesBody.join("\n")}
            ${notes.foot}
            `}
          />
          <Form.Label className="mt-3">Additional Notes</Form.Label>
          <Form.Control
            value={notes.additionalNotesBody.join("\n")}
            as="textarea"
            rows={5}
            onChange={handleChange}
          />
          <Form.Check >
            <Form.Check.Input type="checkbox" onChange={handleEmailChange}></Form.Check.Input>
            <Form.Check.Label>Email Template</Form.Check.Label>
          </Form.Check>
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