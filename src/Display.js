import React from 'react';

function Display(props) {
  const variant = () => {
    return props.variant.split("^")[0];
  }

  const superscripts = () => {
    return props.variant.split("^")[1];
  }

  return(
    <div className="Display">
      <h1>
        {props.note}
        <span className="variant">
          {variant()}
        </span>
        <span className="superscript">
          {superscripts()}
        </span>
      </h1>
    </div>
  )
}

export default Display;