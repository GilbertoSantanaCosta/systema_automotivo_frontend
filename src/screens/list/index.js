import { React, Fragment } from "react";
import { Container, Section, Column, Title, Table } from "rbx"
import Header from "../../components/header";
import VeiculosEmServico from "../../components/auth/listas/recolhidos"

const ListScreen = () => (

    <Fragment>
        <Header />
        <Section  className="home">
            <Container >
                <Column.Group>
                    <Column >
                       
                        <VeiculosEmServico/>
                        
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default ListScreen;