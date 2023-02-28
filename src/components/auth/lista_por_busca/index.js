
import { React, Fragment, useState, useEffect } from "react";
import Api from "../../../../src/services/api";
import moment from 'moment';
import { useLocation } from "react-router-dom";
import { Container, Section, Column, Title, Table, Help } from "rbx"
import BuscaForm from "../busca_form";


function Busca() {
  const [veiculoPlaca, setVeiculoPlaca] = useState([]);
  const [veiculoCodigo, setVeiculoCodigo] = useState();
  const [err, setErr] = useState("");
  const location = useLocation();
  const path = location.pathname;

  const [valores, setValores] = useState({
    placa: '',
    sinistro: '',
    codigoParticular: ''
  });

  const addVeiculos = (newValor) => {
    setValores({ ...valores, ...newValor })
  }

  useEffect(() => {
    if (valores.placa ) {
      setErr("");
      Api
        .get(caminho())
        .then((response) => setVeiculoPlaca(response.data))
        .catch((e) => {
          setErr("Placa digitada não esta cadastrada " + e);
        });
    } else if (valores.sinistro || valores.codigoParticular) {
      setErr("");
      Api
        .get(caminho())
        .then((response) => setVeiculoCodigo(response.data))
        .catch((e) => {
          setErr("Sinistro ou codigo digitado não esta cadastrado " + e);
        });
      } else {

      }

  }, [valores]);




  const caminho = () => {
    let direcionamento = "";

    if (valores.placa && !valores.sinistro && !valores.codigoPrivado) {
      direcionamento = `/work/car/${valores.placa}/workshop/1`
    } else if (valores.sinistro && !valores.placa && !valores.codigoPrivado) {
      direcionamento = `/work/sinister/${valores.sinistro}/workshop/1`
    } else if (!valores.sinistro && !valores.placa && valores.codigoPrivado) {
      direcionamento = `/work/privateCode/${valores.codigoParticular}/workshop/1`
    }

    return direcionamento;
  }

  if (valores.placa && !valores.sinistro && !valores.codigoParticular && !err) {
    return (

      <Fragment>
        <BuscaForm addVeiculos={addVeiculos} />
        {console.log(caminho())}
        <Help color="danger">{err}</Help>

          <Table bordered fullwidth hoverable narrow striped>
          <Table.Head>
            <Table.Row>

              <Table.Heading>Carro</Table.Heading>
              <Table.Heading>Placa</Table.Heading>
              <Table.Heading>Sinistro</Table.Heading>
              <Table.Heading>Codigo</Table.Heading>


            </Table.Row>
          </Table.Head>
          <Table.Body>
            {veiculoPlaca.map((carro, index) => (
              <Table.Row key={index}>
               
                <Table.Cell>{carro.car.name}</Table.Cell>
                <Table.Cell>{carro.car.board}</Table.Cell>
                <Table.Cell>{carro.sinister}</Table.Cell>
                <Table.Cell>{carro.privateCode}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>


      </Fragment>


    );
  } else if ((valores.sinistro || valores.codigoParticular) && !valores.placa && !err) {
    return (

      <Fragment>

        <BuscaForm addVeiculos={addVeiculos} />
        <Help color="danger">{err}</Help>
        <Table bordered fullwidth hoverable narrow striped>
          <Table.Head>
            <Table.Row>
              <Table.Heading>Carro</Table.Heading>
              <Table.Heading>Placa</Table.Heading>
              <Table.Heading>Sinistro</Table.Heading>
              <Table.Heading>Codigo</Table.Heading>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{veiculoCodigo?.car.name}</Table.Cell>
              <Table.Cell>{veiculoCodigo?.car.board}</Table.Cell>
              <Table.Cell>{veiculoCodigo?.sinister}</Table.Cell>
              <Table.Cell>{veiculoCodigo?.privateCode}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Fragment>


    );
  }else {

    return(
    <Fragment>
      <BuscaForm addVeiculos={addVeiculos} />
      <Help color="danger">{err}</Help>
      
      <Table bordered fullwidth hoverable narrow striped>
        <Table.Head>
          <Table.Row>
            <Table.Heading>Carro</Table.Heading>
            <Table.Heading>Placa</Table.Heading>
            <Table.Heading>Sinistro</Table.Heading>
              <Table.Heading>Codigo</Table.Heading>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
          </Table.Row>
        </Table.Body>
      </Table>
    </Fragment>);
    
  }
}

export default Busca;