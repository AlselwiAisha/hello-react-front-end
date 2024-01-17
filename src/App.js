import './App.css';
import { Route, Routes } from 'react-router-dom';
import Greeting from './Components/Greeting';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
         <Route path="/" exact component={Greeting} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
