import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddExercisePage from "./pages/AddExercisePage";
import EditExercisePage from "./pages/EditExercisePage";
import { useState } from "react";
import Navigation from "./components/Navigation"

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className = "title">Exercise Tracker</h1>
          <p>&#128293;Train <mark>insane</mark> or remain the <mark>same</mark>&#128293;</p>
        </header>
        <Navigation />
        <main className="main">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add-exercise">
            <AddExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit} />
          </Route>
        </main>
        <footer>
          <p>&copy; 2022 Sam DeMuth</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
