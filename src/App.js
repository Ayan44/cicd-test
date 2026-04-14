import React from "react";
import Joke from "./components/Joke.js";

function App() {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", null, "Joke Generator Using React and Joke API"),
    React.createElement(Joke, null)
  );
}

export default App;
