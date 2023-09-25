import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Counter from './components/Counter';
import ToDoList from './components/ToDo';
import Greetings from './components/Greetings';

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
            <Link to="/greetings">Greetings</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/greetings" element={<Greetings />} />
      </Routes>
    </Router>
  );
}

export default App;
