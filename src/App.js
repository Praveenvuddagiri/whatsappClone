import React from 'react';
import './App.css';
import Main from './Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Router>

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
