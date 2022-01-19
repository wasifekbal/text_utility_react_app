import React from "react";

export default function About(props) {
  return (
    <div className="container mt-5">
      <div className="accordion" id="accordionExample">
        <div className={`accordion-item ${props.mode==="dark"?"bg-dark text-light border":""}`}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${props.mode==="dark"?"bg-dark text-info":""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is this all about ?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Textutils</strong> is a text fomatter. It helps to modify
              and clean certain text.
            </div>
          </div>
        </div>
        <div className={`accordion-item ${props.mode==="dark"?"bg-dark text-light border":""}`}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${props.mode==="dark"?"bg-dark text-info":""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How this is built ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This application is built using react js which a javascript
              framework which runs at client side. It's a really fantasic
              framework. For more details{" "}
              <a href="https://reactjs.org/">
                <strong>click here</strong>
              </a>
            </div>
          </div>
        </div>
        <div className={`accordion-item ${props.mode==="dark"?"bg-dark text-light border":""}`}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button ${props.mode==="dark"?"bg-dark text-info":""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
