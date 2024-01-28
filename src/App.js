import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Login from "./Components/Login/Login"
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Navbar/> */}
    </div>
  <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/login' element={<Login/>} />

  </Routes>
  </BrowserRouter>
    
  );
}

export default App;
