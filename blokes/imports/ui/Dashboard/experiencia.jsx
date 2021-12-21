import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import MiBloque from "./MiBloque.jsx";
import { withTracker } from "meteor/react-meteor-data";
import { updateLocacion } from "/api/methods.js";
import { BlocklyWorkspace } from 'react-blockly';
import Alert from "react-s-alert";
import {experienciaArreglo} from "./experienciasArreglo"
import Experiencias from "/imports/api/experiencias.js";
import { insertExperiencia } from "/api/methods.js";
import BotonRedirect from "./BotonRedirect"
import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';


import {
  Icon,
  Label,
  Menu,
  Message,
  Table,
  Segment,
    Confirm,
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
      openWorkspace:false,
      experiencia:this.props.experiencia,
      activeItem:"",
      objetivo: experienciaArreglo[this.props.experiencia].objetivo,
      narrativa: experienciaArreglo[this.props.experiencia].narrativa,
      demo: false,
      share: false,
      esColab:false

    };
  }


componentDidUpdate(prevProps) {
    if (
      prevProps.experiencia !== this.props.experiencia
    ) {
      this.setState({
      objetivo: experienciaArreglo[this.props.experiencia].objetivo,
      narrativa: experienciaArreglo[this.props.experiencia].narrativa,

      });
}}
  renderModal(){
    return(
      <Modal
      onClose={() => this.setState({openWorkspace:false})}
      onOpen={() => this.setState({openWorkspace:true}) }
      open={this.state.openWorkspace}
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
            <MiBloque demo={this.state.demo} experiencia={this.props.experiencia} esColab={this.state.esColab}/>
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
  show = () => this.setState({ openWorkspace: true, demo: false, esColab:false });
  close = () => this.setState({ openWorkspace: false });
  showDemo = () => this.setState({ openWorkspace: true, demo: true, esColab:false });
  showCompartir = () => this.setState({ share:true });
  //aquí
  handleConfirm = () => {
    //creamos la experiencia 
    const exp = {codigo:this.state.experiencia,
                  xml:"_",
                  activo:true
    }
    //console.log("XML "+exp.xml)
    
    const id = insertExperiencia.call(exp, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(<Redirect to={"/experiencia/"+id} />);
          
          return <Redirect to={"/experiencia/"+id} />
        }
      });
    //this.setState({ share: false, openWorkspace:true, esColab:true });
    //this.eliminar();
  };
  


    handleSacudir = () => {
    //creamos la experiencia 
    const exp = {codigo:this.state.experiencia,
                  xml:"_",
                  activo:true
    }
    //console.log("XML "+exp.xml)
    
    const id = insertExperiencia.call(exp, (err, res) => {
        if (err) {
          console.log(err);
        }
      });
    //this.setState({ share: false, openWorkspace:true, esColab:true });
    //this.eliminar();
  };
  handleCancel = () => this.setState({ share: false });
  
  render() {
    
      return (
         <div
      
      >
     
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
        <Grid>
          <Grid.Row>
          <Grid.Column size={1}/>
          <Button content='Resolver' icon='up arrow' labelPosition='right' color="violet" onClick={this.show}/>
          <Button content='Solución' icon='play' labelPosition='right' color="blue" onClick={this.showDemo}/>          
          <BotonRedirect experiencia={this.props.experiencia}/>

          </Grid.Row>
        </Grid>  
          <Confirm
                  open={this.state.share}
                  header= "Con esta opción tendrás disponible un link para compartir e interactuar con otros en la programación de la experiencia."
                  content="Simplemente, enviales el link de la experiencia que te daremos a continuación."
                  onCancel={this.handleCancel}
                  onConfirm={this.handleConfirm}
                  cancelButton='Cancelar'
                  confirmButton="Compartir"
                />
        </Segment>
        <Segment>
          {this.renderModal()}          
        </Segment>
      </Segment.Group>
      </div>

      );
    }
  }
