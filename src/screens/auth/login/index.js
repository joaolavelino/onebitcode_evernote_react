import React from "react";
import { Column, Section, Title, Container, Card } from "rbx";
import logoImage from "../../../assets/images/logo.png";
import "../../../styles/register.scss";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import LoginForm from "../../../components/auth/login_form";
import Header from "../../../components/header";

const LoginScreen = () => {
  return (
    <>
      <Header/>
      <Section size="medium" className="auth">
        <Container>
          <Column.Group centered>
            <Column size={3}>
              <Card>
                <Card.Content>
                  <Section>
                    <Column.Group centered>
                      <Column size={12}>
                        <img src={logoImage}></img>
                      </Column>
                    </Column.Group>
                    <ColumnGroup>
                      <Column size={12}>
                        <Title
                          size={4}
                          className="has-text-grey has-text-centered"
                        >
                          Your notes on the Cloud
                        </Title>
                      </Column>
                    </ColumnGroup>
                  </Section>
                  <LoginForm  />
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </>
  );
};

export default LoginScreen;
