import React, { useRef, useState } from 'react'

export default function ToolsLayout() {
  let [conversionText, setConversionText] = useState();

  let commaInsertionInputTextRef = useRef();
  let commaInsertionOutputTextRef = useRef();
  
  function convertText(e){
    e.preventDefault();
    let commaFilter = commaInsertionInputTextRef.current.value.replace(',', ' ');
    let filterReg = /(6|7|11|12|20|23)\d{6}/g
  
    //todo: set the value here
    commaInsertionOutputTextRef.value = commaFilter.value.match(filterReg).join();
  } 

  return (
    <div className="my-4 container">
        <h2> Comma Insertion </h2>
        <label 
          for="comma-insertion-input-text">
          Enter DSN's
        </label>

        <textarea
          ref={commaInsertionInputTextRef}
          id="comma-insertion-input-text"
          rows="15"
          cols="60"
          name="comma-insertion-input-text"
          className="comma-insertion-input-text">
        </textarea>
        
        <button 
          id="comma-insertion-button"
          onClick={convertText}>
          Insert Commas and Filter DSN 
        </button>

        <textarea 
          ref={commaInsertionOutputTextRef}
          id="comma-insertion-output-area"
          rows="15"
          cols="80"
          class="comma-insertion-output-area">
        </textarea>
    </div>
  )
}