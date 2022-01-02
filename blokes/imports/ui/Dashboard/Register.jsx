import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import React, { useState } from "react";
import { browserHistory } from "react-router";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

import {
  BrowserRouter as Router,
  Switch,
 // Route,
  Link,
 // Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import { Redirect, Route } from "react-router";


export const Register = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [exito, setExito] = useState(true);


  function handleValueChangeMail(e) {
    const {
      target: { value, name }
    } = e;
    
    
      setEmail(value);
    
  }
function handleValueChangePass(e) {
    const {
      target: { value, name }
    } = e;
    
    
    setPassword(value);
    
  }
  function handleRegister() {

    Accounts.createUser(
      { email: email, password: password },
      error => {
        console.log(error);
        // if not error
        // After register code goes here
        console.log("supuestamente anduvo");
       //return(<Redirect to="/selector" />)
       setExito(false)
      }
      
    );
    
  }

  return (

  <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >

        <Grid.Row />
        <Grid.Row>

          <center>
            <Image src="/img/pasayo_bloques.png"  />
          </center>{" "}
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="purple" textAlign="center" />
        <GoogleReCaptchaProvider
    reCaptchaKey="6LdIsuQdAAAAAO-cjGPbbeBV8ph9UwgvEQzBlHHb"    
    scriptProps={{
      async: false, // optional, default to false,
      defer: false, // optional, default to false
      appendTo: 'head', // optional, default to "head", can be "head" or "body",
      nonce: undefined // optional, default undefined
    }}
  >
            <Form size="large" onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  type="email"                  
                  value={email}
                  onChange={handleValueChangeMail}                  
                  
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"                  
                  value={password}                  
                  onChange={handleValueChangePass}
                  
                  
                />
    
  
              ,
                <Button color="teal" fluid size="large" onClick={handleRegister}>
                    Crear Cuenta PASAYO
                  </Button>      
              </Segment>
                     <Message
    icon='inbox'
    hidden= {exito}
    color= "blue"
    header='Felicitaciones! '
    content='Ahora debes logearte presionando el botón Ya Tengo Cuenta.'
  />
              <Link to="/login">
                  <Button color="teal" fluid size="large">
                    Ya tengo cuenta
                  </Button>      
                </Link>
            </Form>
    
    
  </GoogleReCaptchaProvider>,
            <Message>PASAYO BLOQUES es una plataforma comunitaria para aprender programación para niñas y niños en el espectro austa. Para solicitar usuario escribir a <b>C4@FI.UNCOMA.EDU.AR</b></Message>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row />
      </Grid>


    
  );
};
