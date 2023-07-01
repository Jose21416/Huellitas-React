import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage";
import Contacto from "./pages/Contacto";
import Productos from "./pages/productos";
import Servicios from "./pages/Servicios";
import Cuidados from "./pages/Cuidados";
import ProfilePage from "./pages/ProfilePage";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route path="/cuidados" element={<Cuidados></Cuidados>}></Route>
          <Route path="/productos" element={<Productos></Productos>}></Route>
          <Route path="/servicios" element={<Servicios></Servicios>}></Route>

          <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route path="/perfil" element={<ProfilePage></ProfilePage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
