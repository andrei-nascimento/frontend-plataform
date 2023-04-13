import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Cadastro />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )    
}