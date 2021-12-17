import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import MiBloque from "./MiBloque.jsx";
import { withTracker } from "meteor/react-meteor-data";
import { updateLocacion } from "/api/methods.js";
import { BlocklyWorkspace } from 'react-blockly';
import Alert from "react-s-alert";
import {experiencia} from "./experiencias"

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
      open:false,
      experiencia:this.props.experiencia,
      activeItem:"",
      objetivo: experiencia[this.props.experiencia].objetivo,
      narrativa: experiencia[this.props.experiencia].narrativa,
      demo: false
    };
  }


componentDidUpdate(prevProps) {
    if (
      prevProps.experiencia !== this.props.experiencia
    ) {
      this.setState({
      objetivo: experiencia[this.props.experiencia].objetivo,
      narrativa: experiencia[this.props.experiencia].narrativa,

      });
}}
  renderModal(){
    return(
      <Modal
      onClose={() => this.setState({open:false})}
      onOpen={() => this.setState({open:true}) }
      open={this.state.open}
      //trigger={<Button>Show Modal</Button>}
      size="fullscreen"
    >
      <Modal.Header>
      <Header as='h3'>
        <Icon name='bullseye' />
        <Header.Content>
          {this.state.objetivo}
          <Header.Subheader>{this.state.narrativa}</Header.Subheader>
        </Header.Content>
      </Header>
      </Modal.Header>
      <Modal.Content image>

        <Modal.Description>
            <MiBloque demo={this.state.demo} experiencia={this.props.experiencia}/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='violet' onClick={() => this.close()}>
          Salir
        </Button>
        
      </Modal.Actions>
    </Modal>
    )
  }
  show = () => this.setState({ open: true, demo: false });
  close = () => this.setState({ open: false });
  showDemo = () => this.setState({ open: true, demo: true });
  render() {
    
      return (
        <Segment.Group raised>
        <Segment >

          <Message
   icon='bullseye'
   header='Objetivo Didáctico'
   content={this.state.objetivo}
   size='big'
   color='teal'
 />
 <Segment fluid>

       <Header as='h2'>
      
        <Header.Content>
          Narrativa
          <Header.Subheader> {this.state.narrativa}
          </Header.Subheader>
        </Header.Content>
    </Header>





   </Segment>

        </Segment>
        <Segment>
          <Button content='Resolver' icon='up arrow' labelPosition='right' color="violet" onClick={this.show}/>
          <Button content='Solución' icon='play' labelPosition='right' color="violet" onClick={this.showDemo}/>
        </Segment>
        <Segment>
          {this.renderModal()}          
        </Segment>
      </Segment.Group>
      );
    }
  }
