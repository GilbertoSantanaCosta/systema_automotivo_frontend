    import React, { Fragment, useState } from "react";
    import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
    import { Navigate } from "react-router-dom";

    function LoginForm() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [RedirectToRegister, setRedirectToRegister] = useState(false);
      const [RedirectToNotes, setRedirectToNotes] = useState(false);
      const [Error, setError] = useState(false);

      if(RedirectToRegister == true)
        return <Navigate to={{pathname: "/cadastrar"}}/>
      else if(RedirectToNotes == true)
        return <Navigate to={{pathname: "/list"}}/>

      return (
        <Fragment>
            <Column.Group centered>
              <form>
                <Column size={12}>
                  <Field>
                    <Label size="small">Email:</Label>
                    <Control>
                      <Input 
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        name="email"
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Label size="small">Password:</Label>
                    <Control>
                      <Input 
                        type="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        name="password"
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <Column.Group>
                        <Column>
                          <a onClick={e => setRedirectToRegister(true)} className="button is-white has-text-custom-purple">Register or</a>
                        </Column>
                        <Column>
                          <Button color="custom-purple" outlined>Login</Button>
                        </Column>
                      </Column.Group>
                    </Control>
                  </Field>
                  { Error && <Help color="danger">Email or Password invalid</Help> }
                </Column>
              </form>
            </Column.Group>
        </Fragment>
      )
    }

export default LoginForm