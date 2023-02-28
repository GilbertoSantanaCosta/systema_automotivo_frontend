import React from "react";
import { BrowserRouter, Routes , Route  } from "react-router-dom";
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login"
import ListScreen from "./screens/list"
import RegisterScreen from "./screens/register"
import UpdateScreen from "./screens/update"
import BuscaScreen from "./screens/busca"
const Routess = () => (

    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>}/>
            <Route exact path="/em_servico" element={<ListScreen/>}/>
            <Route exact path="/liberados" element={<ListScreen/>}/>
            <Route exact path="/retornos" element={<ListScreen/>}/>
            <Route exact path="/aguardando_liberacao" element={<ListScreen/>}/>
            <Route exact path="/login" element={<LoginScreen/>}/>
            <Route exact path="/cadastrar" element={<RegisterScreen/>}/>
            <Route exact path="/editar" element={<UpdateScreen/>}/>
            <Route exact path="/busca" element={<BuscaScreen/>}/>
        </Routes>
    </BrowserRouter>
)

export default Routess;