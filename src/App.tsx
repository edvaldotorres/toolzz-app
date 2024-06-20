import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status: boolean) => {
    setIsLoggedIn(status);
  };

  return (
    <>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
