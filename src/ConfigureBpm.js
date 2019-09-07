import React from 'react';

function ConfigureBpm(props) {
  const setBpm = (e) => {
    props.setBpm(e.target.value)
  }

  return(
    <div className="ConfigureBpm">
      <input className="bpmInput" type="number" onChange={setBpm} value={props.bpm} />
      <span>BPM</span>
    </div>
  )
}

export default ConfigureBpm