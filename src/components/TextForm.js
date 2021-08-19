import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, updateText] = useState();
  const [toggleTheme, setToggleTheme] = useState("")

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

  const changeTheme = () => {
    
  }

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-secondary text-cream bg-pink"
            type="submit"
            onClick={changeTheme}
          >
            Enable light Mode
          </button>
        </div>
      </div>
      <div className="container">
        <div className="my-3 text-center">
          <label htmlFor="text_box" className="form-label text-light-blue fs-3">
            {props.heading}
          </label>
          <textarea
            className="form-control bg-success text-light fs-5"
            value={text}
            onChange={handleChange}
            id="text_box"
            rows="9"
          ></textarea>
        </div>
        <div className="d-flex justify-content-start">
          <button
            className="btn bg-pink btn-outline-success text-cream me-2 px-2 fs-6"
            onClick={convertUpper}
          >
            Conver to Uppercase
          </button>
          <button
            className="btn bg-pink btn-outline-success text-cream me-2 px-2 fs-6"
            onClick={convertLower}
          >
            Conver to Lowercase
          </button>
          <button
            className="btn bg-pink btn-outline-success text-cream me-2 px-2 fs-6"
            onClick={copyText}
          >
            Copy To Clipboard
          </button>
          <button
            className="btn bg-pink btn-outline-success text-cream me-2 px-2 fs-6"
            onClick={reverseText}
          >
            Reverse Text
          </button>
        </div>
        <div className="container my-3 text-light">
          <h4 className="my-2 text-decoration-underline">Text summary</h4>
          <p className="my-1">
            <span className="text-warning">{countWords(text)}</span> Words and{" "}
            <span className="text-warning">{countChars(text)}</span> Characters
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
