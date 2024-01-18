import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Greeting from './Components/Greeting';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" exact component={Greeting} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
