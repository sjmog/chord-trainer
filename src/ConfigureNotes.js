import React from 'react';
import ConfigureNote from './ConfigureNote';

function ConfigureNotes(props) {
  const POSSIBLE_NOTES = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "Bb",
    "B",
    "Db",
    "Eb",
    "Gb",
    "Ab"
  ]

  const isActive = (note) => {
    return props.notes.includes(note);
  }

  const unique = (array) => {
    return [...new Set(array)]
  }

  const toggleNote = (note) => {
    let newNotes

    if(isActive(note)) {
      newNotes = unique(props.notes.filter(existingNote => existingNote !== note))
    } else {
      newNotes = unique(props.notes.concat([note]))
    }

    props.setNotes(newNotes)
  }

  return(
    <div className="ConfigureNotes">
    {
      POSSIBLE_NOTES
       .map(note => <ConfigureNote 
                     note={note}
                     active={isActive(note)} 
                     key={note}
                     onClick={toggleNote} />)
    }
    </div>
  );
}

export default ConfigureNotes