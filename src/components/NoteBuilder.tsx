import { Dropdown, Form } from 'react-bootstrap'
import { InitialCheckboxData } from '../data/InitialCheckboxData'
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { StandardTemplates } from '../data/standard-templates';

export default function NoteBuilder() {
  const [notes, setNotes] = useState({
    body: [],
    bodyTitle: "Case Notes:",
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

  const handleTemplateNotes = (value: string) => {
    const template = StandardTemplates.find((template: any) => template.id === value);
    console.log(template);
    if (template) {
      setNotes({ ...notes, body: [template.templateText] });
    }
  }

  return (
    <>
      <Form>
      <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Button variant="primary m-4" onClick={copyToClipboard}>Copy</Button>

          <Form.Control
            as="textarea"
            rows={15}
            onChange={handleChange}
            value={`${notes.head}\n${notes.body.join('\n')}\n${notes.additionalNotes}\n${notes.additionalNotesBody.join('\n')}\n${notes.foot}`}
          />
          <Form.Label className="mt-3">Additional Notes</Form.Label>
          <Form.Control
            value={notes.additionalNotesBody.join("\n")}
            as="textarea"
            rows={5}
            onChange={handleChange}
          />  


          <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Standard Templates
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {StandardTemplates.map((template: any) => {
              return (
                <Dropdown.Item key={template.id} onClick={() => handleTemplateNotes(template.id)}>
                  {template.id}
                </Dropdown.Item>
              ); // Modify the onClick event handler to pass the selected template value
            })}
          </Dropdown.Menu>
        </Dropdown>
          <Form.Check >
            <Form.Check.Input type="checkbox" onChange={handleEmailChange}></Form.Check.Input>
            <Form.Check.Label>Email Template</Form.Check.Label>
          </Form.Check>
      </Form.Group>
      {InitialCheckboxData.map((note: any) => (
        <Form.Check 
          type="checkbox"
          key={note.id}
          id={`${note.id}`}
          label={note.label}
          onChange={(e) => handleCheckboxChange(e, note.value)}
          />
        ))}
      </Form>
    </>
  )
}