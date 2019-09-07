import React from 'react';

function ConfigureTimeSignature(props) {
  const setBeatUnit = (e) => {
    props.setBeatUnit(e.target.value)
  }

  return(
    <div className="ConfigureTimeSignature">
      <input className="beatUnitInput" type="number" onChange={setBeatUnit} value={props.max} />
      <span>beats per bar</span>
    </div>
  )
}

export default ConfigureTimeSignature