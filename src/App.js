import React, {
    useState
} from 'react';
import NameItem from './components/NameItem';
import './App.css';

function App() {
    const [activeName, setActiveName] = useState("");

  return (
    <>
      <h1>De actieve naam is: {activeName}</h1>
      <ul>
        <NameItem name="Henk" setActiveName={setActiveName} activeName={activeName}/>
        <NameItem name="Piet" setActiveName={setActiveName} activeName={activeName}/>
        <NameItem name="Jan" setActiveName={setActiveName} activeName={activeName}/>
      </ul>
    </>
  );
}

export default App;
