import './App.css';
import { Routes, Route, NavLink as Link } from "react-router-dom"
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <nav>
            <ul>
              <li>
                <Link to="/" activeClassName="active">Home</Link>
              </li>
              <li>
                <Link to="dashboard" activeClassName="active">Dashboard</Link>
              </li>
              <li>
                <Link to="about" activeClassName="active">About</Link>
              </li>
            </ul>
      </nav>
          <div className="main">
            {/* Define all the routes */}
            <Routes>
              <Route path="/" element={<Dashboard/>}></Route>
              {/* <Route path="about" element={<About />}></Route>
              <Route path="*" element={<NotFound />}></Route> */}
            </Routes>
          </div>
      </div>
  );
}

export default App;
