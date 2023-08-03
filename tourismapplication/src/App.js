import './App.css';
import Signup from './Components/signup';
import Signin from './Components/signin';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (

    <div>

      {/* <Signup></Signup> */}
      <Navbar></Navbar>

    </div>
  );
}

export default App;
