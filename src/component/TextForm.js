import React from "react";

export default function TextForm(props) {
  return (
    <div className="container  ">
      <div className="my-3">
      <h1>{props.heading}</h1>
      <textarea className="form-control" id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary">Convert to upper case</button>
    </div>
  );
}
