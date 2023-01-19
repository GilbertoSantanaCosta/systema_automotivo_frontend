import { React, Fragment, useState, useEffect } from "react";
import { Table, Title } from "rbx";
import Api from "../../../../../src/services/api";
import moment from 'moment';
import { useLocation } from "react-router-dom";


function VeiculosEmServico() {

  const [veiculo, setVeiculo] = useState([]);
  const location = useLocation();
  const path = location.pathname;

  const caminho = () => {
    let direcionamento = "";
    switch (path) {
      case '/em_servico':
        direcionamento = "/work/in_the_workshop/1";
        break;
      case '/liberados':
        direcionamento = "/work/input/workshop/1";
        break;
      case '/retornos':
        direcionamento = "/work/status/workshop/1";
        break;
      default:
        direcionamento = "";
        break;
    }

    return direcionamento;
  }

  const status = (veiculo) => {
    let local = ""
    switch (veiculo) {
      case 'FUNILARIA':
        local = "F";
        break;
      case 'PINTURA':
        local = "P";
        break;
      case 'DESMONTAGEM':
        local = "D";
        break;
      case 'LIBERADO':
        local = "L";
        break;
      case 'MONTAGEM':
        local = "MON";
        break;
      case 'RETORNO':
        local = "R";
        break;
      case 'ESTACIONAMENTO':
        local = "E";
        break;
      case 'MECANICA':
        local = "M";
        break;
      case 'ENTREGUE':
        local = "EN";
        break;
      default:
        local = "";
        break;
    }
    return local;
  }

  const origem = (tipo) => {
    let direcionamento = "";
    switch (tipo) {
      case 'SEGURO':
        direcionamento = "S";
        break;
      case 'PARTICULAR':
        direcionamento = "P";
        break;
      case 'SEGURO_PARTICULAR':
        direcionamento = "2";
        break;
      default:
        direcionamento = "";
        break;
    }

    return direcionamento;
  }

  const fornecimento = (tipo) => {
    let direcionamento = "";
    switch (tipo) {
      case 'SEGURO':
        direcionamento = "F.S";
        break;
      case 'OFICINA':
        direcionamento = "F.O";
        break;
      case 'OFICINA_SEGURO':
        direcionamento = "2";
        break;
      default:
        direcionamento = "OK";
        break;
    }

    return direcionamento;
  }
  useEffect(() => {
    Api
      .get(caminho())
      .then((response) => setVeiculo(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  if (path === '/em_servico') {
    return (

     
      <Fragment>
         <Title>Em Serviço </Title>
         <Title subtitle>Veiculos em reparo </Title>
        <Table bordered fullwidth hoverable narrow striped>
          <Table.Head>
            <Table.Row>

              <Table.Heading>Carro</Table.Heading>
              <Table.Heading>Placa</Table.Heading>
              <Table.Heading>Previsão Saida</Table.Heading>


            </Table.Row>
          </Table.Head>
          <Table.Body>
            {veiculo.map((carro, index) => (
              <Table.Row key={index}>

                <Table.Cell>{carro.veiculo.name}</Table.Cell>
                <Table.Cell>{carro.veiculo.board}</Table.Cell>
                <Table.Cell>{moment(carro.deliveryForecast).format("DD/MM/YYYY")}</Table.Cell>
                <Table.Cell>{origem(carro.type)}</Table.Cell>
                <Table.Cell>{status(carro.status)}</Table.Cell>
                <Table.Cell>{fornecimento(carro.supply)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

      </Fragment>)
  }

  if (path === '/liberados') {
    return (

      <Fragment>
        <Title>Reparos Liberados </Title>
         <Title subtitle>Veículos que estão liberados para dar entrada na oficina </Title>
        <Table bordered fullwidth hoverable narrow striped>
          <Table.Head>
            <Table.Row>

              <Table.Heading>Carro</Table.Heading>
              <Table.Heading>Placa</Table.Heading>


            </Table.Row>
          </Table.Head>
          <Table.Body>
            {veiculo.map((carro, index) => (
              <Table.Row key={index}>

                <Table.Cell>{carro.veiculo.name}</Table.Cell>
                <Table.Cell>{carro.veiculo.board}</Table.Cell>
                <Table.Cell>{origem(carro.type)}</Table.Cell>
                <Table.Cell>{status(carro.status)}</Table.Cell>
                <Table.Cell>{fornecimento(carro.supply)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

      </Fragment>)
  }

  if (path === '/retornos') {
    return (

      <Fragment>
        <Title>Retorno </Title>
         <Title subtitle>Retornou na oficina para realizar correção de serviço </Title>
        <Table bordered fullwidth hoverable narrow striped>
          <Table.Head>
            <Table.Row>

              <Table.Heading>Carro</Table.Heading>
              <Table.Heading>Placa</Table.Heading>
              <Table.Heading>Previsão Saida</Table.Heading>


            </Table.Row>
          </Table.Head>
          <Table.Body>
            {veiculo.map((carro, index) => (
              <Table.Row key={index}>
                <Table.Cell>{carro.veiculo.name}</Table.Cell>
                <Table.Cell>{carro.veiculo.board}</Table.Cell>
                <Table.Cell>{moment(carro.deliveryForecast).format("DD/MM/YYYY")}</Table.Cell>
                <Table.Cell>{origem(carro.type)}</Table.Cell>
                <Table.Cell>{status(carro.status)}</Table.Cell>
                <Table.Cell>{fornecimento(carro.supply)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

      </Fragment>)
  }


}

export default VeiculosEmServico;