import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help , Label } from "rbx";
import { Navigate, Link } from "react-router-dom";
import UserService from '../../../services/users';

function RegisterForm() {

    const [name, setName] = useState("");
      const [login, setLogin] = useState("");
      const [password, setPassword] = useState("");
      const [cpf, setCpf] = useState("");
      const [rg, setRg] = useState("");
      const [workshop, setWorkshop] = useState({
        id: 0,
        name: '',
      });
      const [profile, setProfile] = useState([]);
      const [redirectToLogin, setRedirectToLogin] = useState(false);
      const [error, setError] = useState(false);

      const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
          const user = await UserService.register({name: name,login: login,password: password, cpf: cpf, 
                                                   rg: rg, workshop: workshop});
          setRedirectToLogin(true);
        } catch (error) {
          setError(true)
        }
      }

      if(redirectToLogin === true)
        return <Navigate to={{pathname: "/login"}}/>


    return (
      <Fragment>
          <Column.Group centered>
            <form onSubmit={handleSubmit}>
              <Column size={12}>
                <Field>
                  <Label size="small">Nome</Label>
                  <Control>
                    <Input 
                      type="name"
                      required
                      name="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label size="small">CPF</Label>
                  <Control>
                    <Input 
                      type="cpf"
                      required
                      name="cpf"
                      value={cpf}
                      onChange={e => setCpf(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label size="small">RG</Label>
                  <Control>
                    <Input 
                      type="rg"
                      required
                      name="rg"
                      value={rg}
                      onChange={e => setRg(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label size="small">Email</Label>
                  <Control>
                    <Input 
                      type="email"
                      required
                      name="email"
                      value={login}
                      onChange={e => setLogin(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label size="small">Senha:</Label>
                  <Control>
                    <Input 
                      type="password" 
                      required
                      name="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label size="small">CNPJ Oficina</Label>
                  <Control>
                    <Input 
                      type="workshop.id" 
                      required
                      name="workspace.id"
                      value={workshop.id}
                      onChange={e => setWorkshop(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <Column.Group breakpoint="mobile">
                      <Column>
                        <Link className="button is-white has-text-custom-purple"
                        onClick={e => setRedirectToLogin(true)}>Entrar</Link>
                      </Column>
                      <Column>
                        <Button color="custom-purple" outlined>Cadastrar</Button>
                      </Column>
                    </Column.Group>
                  </Control>
                </Field>
                { error && <Help color="danger">Email or senha invalido</Help> }
              </Column>
            </form>
          </Column.Group>
      </Fragment>
    )
  }

  export default RegisterForm;