import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Cadastro />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )    
}