import {React, Fragment, useState, useEffect} from "react";
import {Table, Title} from "rbx";
import Api from "../../../../sevices/api";

function VeiculosEmServico() {
    
    const [veiculo, setVeiculo] = useState();

    useEffect(() => {
        Api
          .get("/work/in_the_workshop/1")
          .then((response) => setVeiculo(response))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);



    return(<Fragment>
        <Table bordered fullwidth hoverable narrow striped>
                            <Table.Head>
                                <Table.Row>
                                    <Table.Heading>Carro</Table.Heading>
                                    <Table.Heading>Placa</Table.Heading>
                                    <Table.Heading>Entrada</Table.Heading>
                                    <Table.Heading>Saida</Table.Heading>
                                    
                                </Table.Row>
                            </Table.Head>
                            <Table.Body>
                                {[
                                    ['Gol', 'abc1234', '28/12/2022','06/01/2023'],
                                    ['Gol', 'abc1234', '28/12/2022','06/01/2023'],
                                    ['Gol', 'abc1234', '28/12/2022','06/01/2023'],
                                    ['Gol', 'abc1234', '28/12/2022','06/01/2023'],
                                    ['Gol', 'abc1234', '28/12/2022','06/01/2023'],
                                ].map(([v1, v2,v3,v4], i) => (
                                    <Table.Row key={i}>
                                        <Table.Cell>{v1}</Table.Cell>
                                        <Table.Cell>{v2}</Table.Cell>
                                        <Table.Cell>{v3}</Table.Cell>
                                        <Table.Cell>{v4}</Table.Cell>
                                        
                                        
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
    </Fragment>)
    

}

export default VeiculosEmServico;