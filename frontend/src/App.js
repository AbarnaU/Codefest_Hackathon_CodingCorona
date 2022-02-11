import './App.css';
import { Routes, Route, NavLink as Link } from "react-router-dom"
import Dashboard from './Dashboard';
import Income from './pages/Income';
import Expense from './pages/Expense';

function App() {
  return (
    <div className="App">
      <nav>
            <ul>
              <li>
                <Link to="/" activeClassName="active">Home</Link>
              </li>
              <li>
                <Link to="income" activeClassName="active">Income</Link>
              </li>
              <li>
                <Link to="expense" activeClassName="active">Expense</Link>
              </li>
            </ul>
      </nav>
          <div className="main">
            {/* Define all the routes */}
            <Routes>
              <Route path="/" element={<Dashboard/>}></Route>
              <Route path="/income" element={<Income />}></Route>
              <Route path="/expense" element={<Expense />}></Route>
            </Routes>
          </div>
      </div>
  );
}

export default App;
