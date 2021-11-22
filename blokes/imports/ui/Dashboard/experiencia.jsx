import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import MiBloque from "./MiBloque.jsx";
import { withTracker } from "meteor/react-meteor-data";
import { updateLocacion } from "/api/methods.js";
import { BlocklyWorkspace } from 'react-blockly';
import Alert from "react-s-alert";
import {
  Icon,
  Label,
  Menu,
  Message,
  Table,
  Segment,
  Button,
  Divider,
  Form,
  Card,
  Grid,
  Image,
  Dropdown,
  Modal,
  Header
} from "semantic-ui-react";

//const App = () => (

export default class Experiencia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open:false, experiencia:0, activeItem:""
    };
  }

  renderModal(){
    return(
      <Modal
      onClose={() => this.setState({open:false})}
      onOpen={() => this.setState({open:true}) }
      open={this.state.open}
      trigger={<Button>Show Modal</Button>}
      size="fullscreen"
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>

        <Modal.Description>
          <Header>Default Profile Image</Header>
            <MiBloque/>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => this.close()}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
    )
  }
  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  render() {

      return (
        <Segment.Group raised>
        <Segment >

          <Message
   icon='book'
   header='Narrativa'
   content='Una noche, 3 Amigos estaban jugando en el parque, cuando de pronto aparecieron 5 Zombis! Que susto!.'
   size='big'
 />
 <Segment fluid>

       <Header as='h2'>
      <Image circular src='/img/zombi.png' />
        <Header.Content>
          Objetivo Didáctico
          <Header.Subheader>El objetivo de esta experiencia es modelar entidades de datos
            en el formato de variables.
          </Header.Subheader>
        </Header.Content>
    </Header>





   </Segment>
 
        </Segment>
        <Segment>
          <Button content='Resolver' icon='up arrow' labelPosition='right' color="violet" onClick={this.show}/>
        </Segment>
        <Segment>
          {this.renderModal()}

        </Segment>
      </Segment.Group>
      );
    }
  }
