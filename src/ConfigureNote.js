import React from 'react';

function ConfigureNote(props) {
  const onClick = (e) => {
    e.stopPropagation();
    props.onClick(props.note)
  }

  return(
    <div 
     className={`ConfigureNote ${props.active ? 'ConfigureNote--active' : ''}`}
     onClick={onClick}>
     {props.note}
    </div>
  );
}

export default ConfigureNote