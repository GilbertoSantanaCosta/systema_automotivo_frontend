import { React, Fragment } from "react";
import { Container, Section, Column, Title, Table } from "rbx"
import Header from "../../components/header";
import BuscaForm from "../../components/auth/busca_form"
import Busca from "../../components/auth/lista_por_busca"

const BuscaScreen = () => (

    <Fragment>
        <div>
        <Header />
        </div>
        
        <div>
        <Busca/> 
        </div>
       
                      
                   
    </Fragment>
)

export default BuscaScreen;