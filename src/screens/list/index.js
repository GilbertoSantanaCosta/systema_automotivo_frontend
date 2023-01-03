import { React, Fragment } from "react";
import { Container, Section, Column, Title, Table } from "rbx"
import Header from "../../components/header";
import VeiculosNaOficina from "../../components/auth/listas/recolhidos"

const ListScreen = () => (

    <Fragment>
        <Header />
        <Section size="medium" className="home">
            <Container >
                <Column.Group>
                    <Column >
                       
                        <VeiculosNaOficina/>
                        
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default ListScreen;