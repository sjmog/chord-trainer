import React from 'react';

function TimerBar(props) {
  const bars = () => {
    const bars = []

    for(let i = 0; i < props.max; i++) {
      bars.push(
        <div 
        className={`bar ${i < props.count ? 'bar--active' : ''}`}
        key={i} />
      )
    }

    return bars
  }

  return(
    <div className="TimerBar">
      {bars()}
    </div>
  )
}

export default TimerBar;