
import './App.css';
import Tittle from './Tittle';



function App() {
  const name = "Rafsun Jani shuvo 1" ;
  let instructor = "Rafsunnnnn Fortis Group"
  return (
    <div className="App">
      {name}
      {/* props */}
      <Tittle instructor={instructor}/>
    </div>
  );
}

export default App;
