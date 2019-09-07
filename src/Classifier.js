import React, { useState, useEffect } from 'react'

function Classifier(props) {
  const MIDI_PITCH_TO_NOTE = {
    "21": "A0",
      "22": "Bb0",
    "23": "B0",
    "24": "C1",
      "25": "C#1",
    "26": "D1",
      "27": "Eb1",
    "28": "E1",
    "29": "F1",
      "30": "F#1",
    "31": "G1",
      "32": "Ab1",
    "33": "A1",
      "34": "Bb1",
    "35": "B1",
    "36": "C2",
      "37": "C#2",
    "38": "D2",
      "39": "Eb2",
    "40": "E2",
    "41": "F2",
      "42": "F#2",
    "43": "G2",
      "44": "Ab2",
    "45": "A2",
      "46": "Bb2",
    "47": "B2",
    "48": "C3",
      "49": "C#3",
    "50": "D3",
      "51": "Eb3",
    "52": "E3",
    "53": "F3",
      "54": "F#3",
    "55": "G3",
      "56": "Ab3",
    "57": "A3",
      "58": "Bb3",
    "59": "B3",
    "60": "C4",
      "61": "C#4",
    "62": "D4",
      "63": "Eb4",
    "64": "E4",
    "65": "F4",
      "66": "F#4",
    "67": "G4",
      "68": "Ab4",
    "69": "A4",
      "70": "Bb4",
    "71": "B4",
    "72": "C5",
      "73": "C#5",
    "74": "D5",
      "75": "Eb5",
    "76": "E5",
    "77": "F5",
      "78": "F#5",
    "79": "G5",
      "80": "Ab5",
    "81": "A5",
      "82": "Bb5",
    "83": "B5",
    "84": "C6",
      "85": "C#6",
    "86": "D6",
      "87": "Eb6",
    "88": "E6",
    "89": "F6",
      "90": "F#6",
    "91": "G6",
      "92": "Ab6",
    "93": "A6",
      "94": "Bb6",
    "95": "B6",
    "96": "C7",
      "97": "C#7",
    "98": "D7",
      "99": "Eb7",
    "100": "E7",
    "101": "F7",
      "102": "F#7",
    "103": "G7",
      "104": "Ab7",
    "105": "A7",
      "106": "Bb7",
    "107": "B7",
    "108": "C8"
  }


  const [playedNotes, setPlayedNotes] = useState([])
  const [mediaRecorder, setMediaRecorder] = useState(null)

  const setupMediaRecorder = function(stream) {
    if(props.count === 2) { mediaRecorder.stop() }
    if(props.count !== 0) { return; }

    const options = {mimeType: 'audio/webm'};
    const mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.addEventListener('dataavailable', function(e) {
      if(e.data.size > 0) {
        window.MODEL.transcribeFromAudioFile(e.data)
          .then((sequence) => {
            if(sequence.notes.length > 0) {
              const longNotes = sequence.notes.filter((note) => {
                return (note.endTime - note.startTime) > 0.2
              })

              const heardNotes = longNotes.map(note => MIDI_PITCH_TO_NOTE[String(note.pitch)])

              setPlayedNotes(heardNotes)
            }
          })
          .catch(err => { console.log(err.message) })
      }
    });

    setMediaRecorder(mediaRecorder)
  };

  useEffect(() => {
    if(!mediaRecorder) {
      navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then(setupMediaRecorder)
    } else if (mediaRecorder.state == "'inactive") {
      
    } else if ((props.count === 0) && (mediaRecorder.state == "inactive")) {
      mediaRecorder.start()
    } else if ((props.count === 1) && mediaRecorder.state == "recording") {
      // only record a single count of music - this may not be enough, especially at higher BPMs
      mediaRecorder.requestData()
      mediaRecorder.stop()
    }

  }, [mediaRecorder, props.count, setupMediaRecorder])

  return(
    <div className="Classifier">
      { playedNotes }
    </div>
  )
}

export default Classifier