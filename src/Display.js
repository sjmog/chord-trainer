import React from 'react';

function Display(props) {
  const extensions = (variant) => {
    return variant.split("^")[0];
  }

  const superscripts = (variant) => {
    return variant.split("^")[1];
  }

  return(
    <div className="Display">
      <div className="next-up">
        <label>Next up</label>
        <h3>
          {props.note}
          <span className="variant">
            {extensions(props.variant)}
          </span>
          <span className="superscript">
            {superscripts(props.variant)}
          </span>
        </h3>
      </div>

      <h1>
        {props.pastNote}
        <span className="variant">
          {extensions(props.pastVariant)}
        </span>
        <span className="superscript">
          {superscripts(props.pastVariant)}
        </span>
      </h1>
    </div>
  )
}

export default Display;