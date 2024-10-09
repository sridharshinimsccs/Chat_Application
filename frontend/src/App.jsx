import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import About from './pages/About/About';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>

        <Route path="/" element={<About />} />

      
        <Route 
          path="/login" 
          element={authUser ? <Navigate to="/home" /> : <Login />} 
        />

      
        <Route 
          path="/signup" 
          element={authUser ? <Navigate to="/home" /> : <SignUp />} 
        />

        
        <Route 
          path="/home" 
          element={authUser ? <Home /> : <Navigate to="/login" />} 
        />

      
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
