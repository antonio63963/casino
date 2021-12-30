import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './routes/main/MainPage';
import GamblingPage from './routes/games/GamblingPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <MainPage /> }/>
          <Route path="/gambling" element={ <GamblingPage /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
