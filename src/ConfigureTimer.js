import React from 'react';

function ConfigureTimer(props) {
  const setTimerMax = (e) => {
    props.setTimerMax(e.target.value)
  }

  return(
    <div className="ConfigureTimer">
      <input className="timerInput" type="number" onChange={setTimerMax} value={props.max} />
      <span>seconds</span>
    </div>
  )
}

export default ConfigureTimer