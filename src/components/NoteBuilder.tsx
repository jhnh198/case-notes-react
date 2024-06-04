import { Accordion, Dropdown, Fade, Form } from 'react-bootstrap'
import { InitialCheckboxData } from '../data/InitialCheckboxData'
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { StandardTemplates } from '../data/standard-templates';
import "../styles/copy-notification.css";

export default function NoteBuilder() {
  const [notes, setNotes] = useState({
    head: "",
    foot: "",
    bodyTitle: "Solution/ Troubleshooting:",
    body: [],
    additionalNotes: "Additional Notes:",
    additionalNotesBody: [],
  } as any);

  const [value, setValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);

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
  function handleAdditionalNotesChange(e: any) {
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
  
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  const handleTemplateNotes = (value: string) => {
    const template = StandardTemplates.find((template: any) => template.id === value);
    if (template) {
      setNotes({ ...notes, body: [template.bodyTitle, template.templateText, template.escalationText] });
    }
  }

  return (
    <>
      <Form>
      <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          
          <Button variant="primary m-4" onClick={copyToClipboard}>Copy</Button>

          <Fade in={showPopup}> 
            <div className="popup">
              Copied to clipboard
            </div>
          </Fade>
          <Form.Check >
            <Form.Check.Input type="checkbox" onChange={handleEmailChange}></Form.Check.Input>
            <Form.Check.Label>Email Template</Form.Check.Label>
          </Form.Check>

          <Dropdown>
        <Dropdown.Toggle className='my-3' variant="success" id="dropdown-basic">
          Standard Templates
        </Dropdown.Toggle>

        <Dropdown.Menu>
        <Form.Control 
          autoFocus
          placeholder="Search for a template"
          aria-label="Search for a template"
          aria-describedby="basic-addon2"
          className="mx-3 my-2 w-auto"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        {StandardTemplates.filter((template: any) => template.label.toLowerCase().includes(value.toLowerCase())).map((template: any) => {
          return (
            <Dropdown.Item key={template.id} onClick={() => handleTemplateNotes(template.id)}>
              {template.label}
            </Dropdown.Item>
          );
        })}
        </Dropdown.Menu>
      </Dropdown>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Contact Info</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="" /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Company ID</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="" /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Case Number</Form.Label>
                <Form.Control type="text" placeholder="" />
                </Form.Group>
            </Form>
            </Accordion.Body>
          </Accordion.Item>
      </Accordion>

          {/*readonly for the time being. Changing the field directly does not update the */}
          <Form.Control
            as="textarea"
            rows={15}
            readOnly
            value={`${notes.head}\n${notes.body.join('\n')}\n${notes.additionalNotes}\n${notes.additionalNotesBody.join('\n')}\n${notes.foot}`}
          />
         <Accordion> 
          <Accordion.Item eventKey="0">
            <Accordion.Header>Additional Notes</Accordion.Header>
            <Accordion.Body>
              <Form.Control
                value={notes.additionalNotes}
                as="textarea"
                rows={5}
                onChange={(e) => setNotes({ ...notes, additionalNotes: e.target.value })}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </Form.Group>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Troubleshooting Options</Accordion.Header>
            <Accordion.Body>
              {InitialCheckboxData.map((note: any) => (
                <Form.Check 
                  type="checkbox"
                  key={note.id}
                  id={`${note.id}`}
                  label={note.label}
                  onChange={(e) => handleCheckboxChange(e, note.value)}
                  />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Form>
    </>
  )
}