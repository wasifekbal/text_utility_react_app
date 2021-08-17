import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, updateText] = useState();

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

  return (
    <div className="container mt-3">
      <div className="my-3 text-center">
        <label htmlFor="text_box" className="form-label text-light fs-3">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          id="text_box"
          rows="9"
        ></textarea>
      </div>
      <div className="d-flex justify-content-start">
        <button className="btn btn-primary me-2 px-3 fs-6" onClick={convertUpper}>
          Conver to Uppercase
        </button>
        <button className="btn btn-primary me-2 px-3 fs-6" onClick={convertLower}>
          Conver to Lowercase
        </button>
        {/* <button className="btn btn-primary px-3 fs-6">Count Words</button> */}
      </div>
      <div className="container my-3 text-light">
        <h4 className="my-2 text-decoration-underline">Text summary</h4>
        <p className="my-1">
          <span className="text-warning">{countWords(text)}</span> Words and{" "}
          <span className="text-warning">{countChars(text)}</span> Characters
        </p>
      </div>
    </div>
  );
}

TextForm.prototype = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Heading Goes Here!!",
};
