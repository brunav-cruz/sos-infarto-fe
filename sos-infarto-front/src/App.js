import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={3000} />
    <Routes>
      <Route path="" element={<Navigate to="/Home" />} />
      <Route default path="/Home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
