import { useState } from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  const company = "MicroSoft";

  const [name, setName] = useState("Ashutosh")

  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent />
      <br />
      <h1>Functional Component</h1>
      <FunctionalComponent
        name={name}
        age={19}
        company={company}
        setName={setName} />
    </div>
  );
}

export default App;
