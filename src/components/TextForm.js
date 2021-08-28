import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, updateText] = useState();

  const notMode = (mode) => {
    if(mode === 'light'){
      return "dark"
    }
    else{
      return "light";
    }
  }

  const clearText = () => {
    updateText("");
  }
  
  const countChars = (str) => {
    if (str) {
      return str.split(" ").join("").length;
    } else {
      return 0;
    }
  };

  const countWords = (str) => {
    if (str) {
      return str.split(" ").length;
    } else {
      return 0;
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const reverseText = () => {
    let revText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      revText += text[i];
    }
    updateText(revText);
  };

  const handleChange = (event) => {
    updateText(event.target.value);
  };

  const convertUpper = () => {
    if (text) {
      updateText(text.toUpperCase());
    }
  };

  const convertLower = () => {
    if (text) {
      updateText(text.toLowerCase());
    }
  };

  const removeExtraSpaces = () => {
    if(text){
      updateText(text.split(/[ ]{2,}/).join(" "));
    }
  }

  const btnCss = () => {
    if(props.mode==="light"){
      return "btn border btn-success border-dark me-2 px-2 fs-6";
    }
    else{
      return "btn bg-pink btn-outline-success text-cream me-2 px-2 fs-6";
    }
  }

  return (
    <>
      <div className="container">
        <div className="my-3 text-center">
          <label htmlFor="text_box" className={`form-label fs-3 text-${props.mode==="light"?"dark":"light-blue"}`}>
            {props.heading}
          </label>
          <textarea
            className={`form-control bg-${props.mode==="light"?"light":"success"} text-${notMode(props.mode)} fs-5`}
            value={text}
            onChange={handleChange}
            id="text_box"
            rows="9"
          ></textarea>
        </div>
        <div className="d-flex justify-content-start">
        <button
            className={btnCss()}
            onClick={clearText}
          >
            Clear Text
          </button>
          <button
            className={btnCss()}
            onClick={convertUpper}
          >
            Conver to Uppercase
          </button>
          <button
            className={btnCss()}
            onClick={convertLower}
          >
            Conver to Lowercase
          </button>
          <button
            className={btnCss()}
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className={btnCss()}
            onClick={reverseText}
          >
            Reverse Text
          </button>
          <button
            className={btnCss()}
            onClick={copyText}
          >
            Copy To Clipboard
          </button>
        </div>
        <div className={`container my-3 text-${notMode(props.mode)}`}>
          <h4 className="my-2 text-decoration-underline">Text summary</h4>
          <p className="my-1">
            <strong className={`text-${props.mode==="light"?"primary":"warning"}`}>{countWords(text)}</strong> Words and{" "}
            <strong className={`text-${props.mode==="light"?"primary":"warning"}`}>{countChars(text)}</strong> Characters
          </p>
        </div>
      </div>
    </>
  );
}

TextForm.prototype = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Heading Goes Here!!",
};
