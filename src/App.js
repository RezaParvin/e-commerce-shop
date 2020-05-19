import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" render={() => <h2>Hats Page Hello</h2>} />
    </div>
  );
}

export default App;
