import './App.css';
import { Routes,Route,NavLink } from 'react-router-dom';
import Home from './Components/Home'
import Support from './Components/Support'
import About from './Components/About';
import NotFound from './Components/NotFound';
import Labs from './Components/Labs';
function App() {
  return (

    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home
            </NavLink>
          </li>

          <li>
            <NavLink to='/support'>Support
            </NavLink>
          </li>

          <li>
            <NavLink to='/about'>About
            </NavLink>
          </li>

          <li>
            <NavLink to='/labs'>Labs
            </NavLink>
          </li>

          
          
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/support" element={<Support/>}></Route>
        <Route path="/labs" element={<Labs></Labs>}></Route>
        <Route path="*" element={<NotFound/>}></Route>



      </Routes>
    </div>
  );
}

export default App;
