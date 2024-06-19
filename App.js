import React from "react";
import ReactDOM from "react-dom";

let element = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World Namaste"
);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
