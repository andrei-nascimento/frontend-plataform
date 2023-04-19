import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Conta from "../pages/Conta/Conta";
import { PrivateRoutes } from "./PrivateRoutes";

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/home' element={<PrivateRoutes />}>
                    <Route path='/home' element={<Home />} />
                </Route>
                <Route path='/conta' element={<Conta />} />
            </Routes>
        </BrowserRouter>
    )    
}