import React from 'react';

function ConfigureVariant(props) {
  const onClick = (e) => {
    e.stopPropagation();
    props.onClick(props.variant)
  }

  const variant = () => {
    return props.variant.split("^")[0];
  }

  const superscripts = () => {
    return props.variant.split("^")[1];
  }

  return(
    <div 
     className={`ConfigureVariant ${props.active ? 'ConfigureVariant--active' : ''}`}
     onClick={onClick}>
     <span className="variant">
       {variant()}
     </span>
     <span className="superscript">
       {superscripts()}
     </span>
    </div>
  );
}

export default ConfigureVariant