import React from 'react'

export default function ToolsLayout() {
  return (
    <div className="my-4 container">
        <h2> Comma Insertion </h2>
        <label 
          for="comma-insertion-input-text">
           Enter DSN's
         </label>
        <textarea 
          id="comma-insertion-input-text"
          rows="15"
          cols="60"
          name="comma-insertion-input-text"
          className="comma-insertion-input-text">
          </textarea>
        
        <button id="comma-insertion-button"> Insert Commas and Filter DSN </button>

        <textarea 
          id="comma-insertion-output-area"
          rows="15"
          cols="80"
          class="comma-insertion-output-area">
        </textarea>

    </div>
  )
}
