import React from "react";
import { BrowserRouter, Routes , Route  } from "react-router-dom";
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login"
import ListScreen from "./screens/list"
import RegisterScreen from "./screens/register"
import UpdateScreen from "./screens/update"

const Routess = () => (

    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>}/>
            <Route exact path="/lista" element={<ListScreen/>}/>
            <Route exact path="/login" element={<LoginScreen/>}/>
            <Route exact path="/cadastrar" element={<RegisterScreen/>}/>
            <Route exact path="/editar" element={<UpdateScreen/>}/>
        </Routes>
    </BrowserRouter>
)

export default Routess;