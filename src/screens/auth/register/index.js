import { Card, Column, Container, Section, Title } from 'rbx';
import logoImage from '../../../assets/images/logo.png'
import React from 'react';
import "../../../styles/register.scss"
import RegisterForm from '../../../components/auth/register_form';
import Header from '../../../components/header';

const RegisterScreen  = () => {
  return(
      <>
        <Header />
        <Section size="medium" className="auth">
          <Container>
            <Column.Group centered>
              <Column size="4">
                <Card>
                  <Card.Content>
                    <Section>
                      <Column.Group centered>
                        <Column size={12}>
                          <img src={logoImage} alt="Javascript Notes"/>
                        </Column>
                      </Column.Group>

                      <Column.Group>
                        <Column size={12}>
                          <Title size={4} className="has-text-grey has-text-centered">
                            Your notes on the Cloud
                          </Title>
                        </Column>
                      </Column.Group>
                      <RegisterForm/>
                    </Section>
                  </Card.Content>
                </Card>
              </Column>
            </Column.Group>
          </Container>
        </Section>
      </>
  )
}

export default RegisterScreen