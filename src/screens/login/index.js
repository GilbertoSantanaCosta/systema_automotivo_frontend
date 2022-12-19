import {React, Fragment} from "react";
import Header from "../../components/header"
import { Column, Section, Title, Container, Card } from "rbx";
import LoginForm from "../../components/auth/login_form"

const LoginScreen = () => (

    
       <Fragment>
        <Header />
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={4}>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Column.Group centered>
                                        <Column size={12}>
                                           <Title>Sistema Automotivo</Title> 
                                        </Column>
                                    </Column.Group>

                                    <Column.Group>
                                        <Column size={12}>
                                            <Title size={6} className="has-text-grey has-text-centered">
                                                O controle do seu negocio em suas mãos
                                            </Title>
                                        </Column>
                                    </Column.Group>
                                    <LoginForm/>
                                </Section>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default LoginScreen;