import React from 'react'
import { CheckboxOptions } from './CheckboxOptions'
import { Form } from 'react-bootstrap'

export default function NoteBuilder() {
  return (
    <>
      <Form>
      <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={15}
          />
      <CheckboxOptions />
      </Form.Group>
      </Form>
    </>

  )
}
