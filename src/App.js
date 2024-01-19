import './App.css';
import { Routes, Route } from 'react-router-dom';
import Greeting from './Components/Greeting';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
