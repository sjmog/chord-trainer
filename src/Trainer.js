import React, { useState } from 'react';

function Trainer(props) {
  const REMARKS = {
    "": "The regular",
    "^6": "Add sixth",
    "^6/9": "Add perfect fourth from sixth",
    "ma^7": "Add seventh",
    "ma^9": "Add third from seventh",
    "ma^13": "Add bare fifth from second",
    "^7": "Add flat seventh",
    "^9": "Add minor triad on the fifth",
    "^13": "Add dominant seventh and bare fifth from second",
    "mi": "Flat third",
    "mi^6": "Add natural six",
    "mi^6/9": "Add perfect fourth from natural sixth",
    "mi^7": "Add flat seventh",
    "mi^9": "Add minor triad on the fifth",
    "mi^11": "Add subtonic major"
  }

  const remarkFor = variant => REMARKS[variant]

  const [showImage, setShowImage] = useState(true)
  const toggleShowImage = (e) => {
    setShowImage(e.target.checked)
  }

  const [showRemark, setShowRemark] = useState(true)
  const toggleShowRemark = (e) => {
    setShowRemark(e.target.checked)
  }

  const imgSrc = () => {
    if(props.variant === "") return "img/no-variant.png";

    return "img/" + props.variant.replace("/", "|") + ".png";
  }

  const showImageOrNothing = () => {
    return(
      showImage ? <img alt={props.remark} src={imgSrc()} /> : null
    )
  }

  const showRemarkOrNothing = () => {
    return(
      showRemark ? <p>{remarkFor(props.variant)}</p> : null
    )
  }

  return(
    <div className="Trainer">
      <div className="Trainer__Controls">
        <label htmlFor="toggleImage">Image
          <input name="toggleImage" checked={showImage} onChange={toggleShowImage} type="checkbox" />
        </label>
        <label htmlFor="toggleRemark">Remark
          <input name="toggleRemark" checked={showRemark} onChange={toggleShowRemark} type="checkbox" />
        </label>
      </div>
      {showImageOrNothing()}
      {showRemarkOrNothing()}
    </div>
  )
}

export default Trainer;