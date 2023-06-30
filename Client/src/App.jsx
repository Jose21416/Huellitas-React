import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>HomePage</h1>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/contacto" element={<h1>Contacto</h1>}></Route>
          <Route path="/cuidados" element={<h1>Cuidados</h1>}></Route>
          <Route path="/productos" element={<h1>Productos</h1>}></Route>
          <Route path="/servicios" element={<h1>Servicios</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;