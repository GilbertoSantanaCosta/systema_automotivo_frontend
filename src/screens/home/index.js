import { React, Fragment } from "react";
import { Container, Section, Column, Title } from "rbx"
import Header from "../../components/header";
import carros from "../../imagens/carros.png"
import {Link} from "react-router-dom"


function HomeScreen() {

    return (
        <Fragment>
            <Header />
            <Section size="medium" className="home">
                <Container >
                    <Column.Group>
                        <Column size={5} >
                            <Title size={2} spaced className="has-text-black">
                                Create notes easily and access when you wants on the cloud
                            </Title>
                            <Title size={5} spaced className="has-text-black" subtitle>
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.<br /><br />
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
                            </Title>
                            <Link className="button is-outlined is-success is-large">
                                <strong>Register for free Now</strong>
                            </Link>
                        </Column>
                        <Column size={6} offset={1}>
                            <img src={carros}/>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    )
}

export default HomeScreen;