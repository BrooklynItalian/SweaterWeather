import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import useToken from './components/Token/token';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import SignUp from './pages/signup';
import Login from './pages/login';
import WeatherData from './pages/weather-data';
import AddData from './pages/add-data';

// function setToken(userToken) {
//     sessionStorage.setItem('token', JSON.stringify(userToken));
//   }
  
// function getToken() {
// const tokenString = sessionStorage.getItem('token');
// const userToken = JSON.parse(tokenString);
// return userToken?.token
// }


function App() {
    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

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

