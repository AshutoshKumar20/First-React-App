import { useState } from 'react';
import './App.css';
import ClassComponent from './pages/ClassComponent';
import FunctionalComponent from './pages/FunctionalComponent';
import { Routes, Route } from "react-router-dom";
//HOC Layout
import BaseHoc from "./hoc/BaseHoc";


function App() {
  const company = "MicroSoft";

  const [name, setName] = useState("Ashutosh")

  return (
    <Routes>]
      <Route path="/" element={<ClassComponent />} />
      <Route
        path="functional-component"
        element={
          <FunctionalComponent
            name={name}
            age={19}
            company={company}
            setName={setName}
          />
        }
      />
    </Routes>
  );
}

export default App;

/*<div className="App">
      <h1>Class Component</h1>
      <ClassComponent />
      <br />
      <h1>Functional Component</h1>
      <FunctionalComponent
        name={name}
        age={19}
        company={company}
        setName={setName} />
    </div> */