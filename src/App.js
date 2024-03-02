
import { useState } from 'react';
import './App.css';
import Tittle from './Tittle';


function App() {
  const [name,setName] = useState(" Online");

  const [number,setNumber] = useState(1);
  // const name = "Rafsun";
  let instructor = "Rafsunnnnn Fortis Group";

  const handleClick = () => {
    setNumber(prevState => prevState + 1);
  }

  return (
    <div className="App">
      <h2>{number}</h2>
        <button onClick={handleClick}>Increase Number</button>
      <div>
        Learning React js From {name}
      </div>
        <button onClick={(e)=>setName("Youtube")}>
          click here
        </button>
      {/* props */}
      <Tittle instructor={instructor} />
    </div>
  );
}

export default App;
