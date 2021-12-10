import { Button, Column, Control, Field, Help, Input, Label } from "rbx";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import UsersService from "../../../services/users";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToRegister, setRedirectToRegister] = useState(false);
  const [redirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (event) => {
    event.preventDefault();
    try{
      const user = await UsersService.login({
        email:email,
        password:password
      });
      if(localStorage.getItem('user')){ setRedirectToNotes(true)}
    } catch(e) {
      setError(true)
    }
  }

  if (redirectToRegister == true)
    return <Navigate to={{ pathname: "/register" }} />;
  else if (redirectToNotes == true)
    return <Navigate to={{ pathname: "/notes" }} />;

  return (
    <>
      <Column.Group centered>
        <form onSubmit={HandleSubmit}> 
          <Column size={12}>
            <Field>
              <Label size="small">Email:</Label>
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
                    <a className="button is-white has-text-custom-purple" onClick={e=>setRedirectToRegister(true)}>
                      Register or
                    </a>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>
                      Login
                    </Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            {error && <Help color="danger">Invalid email or password</Help>}
          </Column>
        </form>
      </Column.Group>
    </>
  );
}

export default LoginForm;
