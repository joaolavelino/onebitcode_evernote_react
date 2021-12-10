import { Button, Column, Control, Field, Help, Input, Label } from "rbx";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import UsersService from "../../../services/users";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  if (redirectToLogin) return <Navigate to={{ pathname: "/login" }} />;

  const HandleSubmit = async (event) => {
    event.preventDefault()
    try{
      console.log('try-catch')
      const user = await UsersService.register({
        name:name,
        email:email,
        password:password
      })
      setRedirectToLogin(true)
    } catch(e) {
      setError(true)
    }
  }

  return (
    <>
      <Column.Group centered>
        <form onSubmit={HandleSubmit}>
          <Column size={12}>
            <Field>
              <Label size="small">Name:</Label>
              <Control>
                <Input
                  type="name"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">E-mail:</Label>
              <Control>
                <Input
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Password:</Label>
              <Control>
                <Input
                  type="password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Column.Group breakpoint="mobile">
                  <Column>
                    <a className="button is-white has-text-custom-purple" onClick={e=>setRedirectToLogin(true)}>
                      Login or
                    </a>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>
                      Register
                    </Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            {/* essa é uma sintaxe oneline do if - if error, render: */}
            {error && <Help color="danger">Invalid Email or Password</Help>}
          </Column>
        </form>
      </Column.Group>
    </>
  );
};

export default RegisterForm;
