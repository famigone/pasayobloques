import React, { Component } from "react";
import { browserHistory } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

export default class CreateUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: "",
      hasError: false,
      isLoggingIn: false
    };
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({ isLoggingIn: true, hasError: false });

    Meteor.loginWithPassword(this.state.user, this.state.password, error => {
      this.setState({ isLoggingIn: false });

      if (error) {
        this.setState({ hasError: true });
        return false;
      } else {
        // successful log in
        //console.log("EXITOOOOOOOOOO");
        this.props.history.push("/secuencias");
      }
    });
  };

  onChangeUser = event => {
    this.setState({ user: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Row />
        <Grid.Row>
          <center>
            <Image src="/img/pasayo_bloques.png"  size='large'/>
          </center>{" "}
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="purple" textAlign="center" />

            <Form size="large" onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.onChangeUser}
                  value={this.state.user}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.onChangePassword}
                  value={this.state.password}
                />

              <Button color="teal" fluid size="large">
                  Crear Usuario
                </Button>
              </Segment>
            </Form>
            <Message>PASAYO BLOQUES es una plataforma comunitaria para aprender programación para niñas y niños en el espectro austa. Para solicitar usuario escribir a <b>C4@FI.UNCOMA.EDU.AR</b></Message>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row />
      </Grid>
    );
  }
}
