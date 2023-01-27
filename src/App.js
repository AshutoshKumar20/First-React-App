import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent />
      <br />
      <h1>Functional Component</h1>
      <FunctionalComponent />
    </div>
  );
}

export default App;
