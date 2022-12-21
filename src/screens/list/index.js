import { React, Fragment } from "react";
import { Container, Section, Column, Title, Table } from "rbx"
import Header from "../../components/header";

const ListScreen = () => (

    <Fragment>
        <Header />
        <Section size="medium" className="home">
            <Container >
                <Column.Group>
                    <Column >
                        <Table bordered fullwidth hoverable narrow striped>
                            <Table.Head>
                                <Table.Row>
                                    <Table.Heading>One</Table.Heading>
                                    <Table.Heading>Two</Table.Heading>
                                    <Table.Heading>Three</Table.Heading>
                                    <Table.Heading>four</Table.Heading>
                                    <Table.Heading>five</Table.Heading>
                                    
                                </Table.Row>
                            </Table.Head>
                            <Table.Body>
                                {[
                                    ['Three', 'Four','Three', 'Four','Three'],
                                    ['Five', 'Six','Five', 'Six','Three'],
                                    ['Seven', 'Eight','Seven', 'Eight','Three'],
                                    ['Nine', 'Ten','Nine', 'Ten','Three'],
                                    ['Eleven', 'Twelve','Eleven', 'Twelve','Three'],
                                ].map(([v1, v2,v3,v4,v5], i) => (
                                    <Table.Row key={i}>
                                        <Table.Cell>{v1}</Table.Cell>
                                        <Table.Cell>{v2}</Table.Cell>
                                        <Table.Cell>{v3}</Table.Cell>
                                        <Table.Cell>{v4}</Table.Cell>
                                        <Table.Cell>{v5}</Table.Cell>
                                        
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default ListScreen;