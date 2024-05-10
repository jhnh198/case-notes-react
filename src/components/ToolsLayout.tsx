import React, { useEffect, useRef, useState } from 'react'

export default function ToolsLayout() {
  let [conversionText, setConversionText] = useState<String>("");

  let commaInsertionInputTextRef = useRef<HTMLInputElement>();
  
  function convertText(){
    let commaFilter: string = commaInsertionInputTextRef.current!.value.replace(',', ' ');

    let filterReg = /(6|7|11|12|20|23)\d{6}/g
    
    setConversionText(commaFilter.match(filterReg)!.join());
  } 

  return (
    <div className="my-4 container">
        <h2> Comma Insertion </h2>
        <label 
          htmlFor="comma-insertion-input-text">
          Enter DSN's
        </label>

        <textarea
          ref={commaInsertionInputTextRef}
          id="comma-insertion-input-text"
          rows={15}
          cols={60}
          name="comma-insertion-input-text"
          className="comma-insertion-input-text">
        </textarea>
        
        <button 
          id="comma-insertion-button"
          onClick={convertText}>
          Insert Commas and Filter DSN 
        </button>

        <textarea 
          id="comma-insertion-output-area"
          rows={15}
          cols={80}
          className="comma-insertion-output-area"
          value={conversionText}>
        </textarea>
    </div>
  )
}