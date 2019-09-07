import React, { useState, useEffect } from 'react';
import Display from './Display.js';
import TimerBar from "./TimerBar.js";
import Trainer from "./Trainer.js";
import ConfigureTimer from "./ConfigureTimer.js";
import ConfigureNotes from "./ConfigureNotes.js";
import ConfigureVariants from "./ConfigureVariants.js";
import Classifier from "./Classifier.js";
import './App.css';

function App() {
  const random = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const [notes, setNotes] = useState(["C"]);
  const [variants, setVariants] = useState([""]);
  const [timerMax, setTimerMax] = useState(4);
  const [count, setCount] = useState(0);

  const [note, setNote] = useState("C");
  const [variant, setVariant] = useState("");

  const [pastNote, setPastNote] = useState("");
  const [pastVariant, setPastVariant] = useState("");

  useEffect(() => {
    let interval = null;

    if (count >= timerMax) {
      // never choose the same note
      const nextNotes = notes.filter(existingNote => existingNote !== note)

      setPastNote(note)
      setPastVariant(variant)

      nextNotes.length > 0 ? setNote(random(nextNotes)) : setNote(note)
      variants.length > 0 ? setVariant(random(variants)) : setVariant(variant)

      setCount(0)
    } else { interval = setInterval(() => { 
      setCount(count + 1)
    }, 1000) }

    return () => clearInterval(interval);
  }, [count, notes, note, variants, variant, timerMax]);

  return (
    <div className="App">
      <TimerBar count={count} max={timerMax} />
      <ConfigureNotes notes={notes} setNotes={setNotes} />
      <ConfigureVariants variants={variants} setVariants={setVariants} />
      <header className="App-header">
        <Display 
          note={note} 
          variant={variant}
          pastNote={pastNote}
          pastVariant={pastVariant}
        />
      </header>
      <Trainer variant={pastVariant} />
      <ConfigureTimer max={timerMax} setTimerMax={setTimerMax} />
    </div>
  );
}

export default App;
