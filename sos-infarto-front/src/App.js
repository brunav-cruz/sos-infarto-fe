import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home/Home';
import SaibaMais from './pages/SaibaMais/SaibaMais';
import LocalSaude from './pages/LocalSaude/LocalSaude'
import FormularioRisco from './pages/Formulario/FormularioRisco'
import PrimeirosSocorros from './components/PrimeirosSocorros/PrimeirosSocorros';


function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={3000} />
    <Routes>
      <Route path="" element={<Navigate to="/Home" />} />
      <Route default path="/Home" element={<Home />} />
      <Route path="/SaibaMais" element={<SaibaMais />} />
      <Route path="/PrimeirosSocorros" element={<PrimeirosSocorros />} />
      <Route path="/LocalSaude" element={<LocalSaude />} />
      <Route path="" element={<Navigate to="/Formulario" />} />
      <Route default path="/Formulario" element={<FormularioRisco />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
