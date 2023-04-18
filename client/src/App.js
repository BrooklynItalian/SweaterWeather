import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import SignUp from './pages/signup';
import Login from './pages/login';
import WeatherData from './pages/weather-data';
import AddData from './pages/add-data';

  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/weather-data' element={<WeatherData/>} />
        <Route path='/add-data' element ={<AddData/>} />
    </Routes>
    </Router>
);
}
  
export default App;