import './App.css';
import ManualTable from './components/ManualTable';
import LeftPane from './components/LeftPane';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [display,setDisplay] = useState(false);
  return (
    <div className="App">
      <Header/>
      <LeftPane display={display} setDisplay={setDisplay}/>
      {/* <DataTable display={display}/> */}
      <ManualTable display={display}/>
    </div>
  );
}

export default App;
