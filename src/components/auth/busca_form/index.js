import React, { Fragment, useState } from "react";
import { Button, Field, Control, Input, Column, Section, Help, Label, Title } from "rbx";
import { Navigate } from "react-router-dom";
import Busca from "../lista_por_busca";

function BuscaForm(props) {


  const [fields, setFields] = useState({
    placa: '',
    sinistro: '',
    codigoParticular: ''

  })
  const handleFieldsChange = (e) => setFields({
    ...fields,
    [e.target.name]: e.target.value
  });

  const handleSubmit = event => {
    props.addVeiculos(fields)
    event.preventDefault();
  }

  return (

    <Fragment>



      <Title>Busca</Title>
      <Title subtitle>Para realizar a busca basta digitar em apenas um dos campos a baixo, de acordo com a informação que possui </Title>

      <form onSubmit={handleSubmit}>
        <Label size="small">Placa: </Label>
        <input
          type="text"
          name="placa"
          
          value={fields.placa}
          onChange={handleFieldsChange} />
        
        <Label size="small">Sinistro: </Label>
        <input
          type="text"
          name="sinistro"
          value={fields.sinistro}
          onChange={handleFieldsChange} />

        <Label size="small">Codigo: </Label>
        <input
          type="text"
          name="codigoParticular"
          value={fields.codigoParticular}
          onChange={handleFieldsChange} />



        <button type="submit">Enviar</button>
      </form>
    </Fragment>
  )
}

export default BuscaForm