import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Counter from './components/Counter';
import ToDoList from './components/ToDo';
import Countdown from './components/Countdown';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">To-Do List</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/countdown">Countdown</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/countdown" element={<Countdown />} />
      </Routes>
    </Router>
  );
}

export default App;
