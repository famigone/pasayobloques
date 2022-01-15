import "./App.css";
import "./customBlocks/custom_Blocks";
import { Meteor } from 'meteor/meteor'
import React, { useState, useRef, useCallback } from "react";
import { useTracker } from 'meteor/react-meteor-data';
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import {solucion} from "./soluciones"
import {toolbar} from "./toolbar"
import BlocklyJS from 'blockly/javascript';

import { insertExperienciaC4 } from "/api/methods.js";
import ExperienciasC4 from "/imports/api/experienciasC4.js";
import LoaderExampleText from "/imports/ui/Dashboard/LoaderExampleText.js";
import ListaExperiencias from "/imports/ui/Dashboard/ListaExperiencias.jsx";
import MiBloqueC4 from "/imports/ui/Dashboard/MiBloqueC4.jsx";
import {
  Icon,
  Label,
  Menu,
  Message,
  Radio,
  Table,
  Segment,
  Button,
  Divider,  
  Form,
  Card,
  Grid,
  TextArea,
  Image,
  Dropdown,
  Modal,
  Header
} from "semantic-ui-react";
export default function Home() {
////////////////////////////////////////////////////////////////////////////////////
let [open, setOpen] = useState(false);  
let [objetivo, setObjetivo] = useState("");  
let [narrativa, setNarrativa] = useState("");  
let [interes, setInteres] = useState("");  
let [categoria, setCategoria] = useState("");  
let [btnGuardar, setbtnGuardar] = useState(false);  
let [msgOk, setmsgOk] = useState(true);  
let [filtroUsuario, setfiltroUsuario] = useState(true);  
let [filtroCategoria, setfiltroCategoria] = useState(false);  
////////////////////////////////////////////////////////////////////////////////////
function renderSelector(){
  return(
  
      <div>
      <Grid>
      <Grid.Column width={4}>
       
        <Button color="purple" type="submit"   onClick={() => setOpen(true)}>
          <Icon name="plus"/>NUEVA EXPERIENCIA
        </Button>
       
      </Grid.Column>       

      <Grid.Column width={12}>
      
        <Form onSubmit={(e) => handleSelector(e)}>
           <Form.Group> 
       
                 <Form.Field>
            <Radio toggle              
              label='Solo mis Experiencias'
              name='radioGroup'
              fluid
              value= {filtroUsuario}
              checked={filtroUsuario===true}
              onChange={handleFiltroUsuario}
            />

          </Form.Field>
           
       <Form.Field>
                
                <Dropdown
                  inline
                  placeholder='CATEGORÍA'
                  
                  selection
                  options={categoriasOptions}                  
                  onChange={handleFiltroCategoria}
                />

              </Form.Field>
                
           </Form.Group>   
         </Form>     

       </Grid.Column>
      
       </Grid>
      </div>
  
    )
}



handleFiltroUsuario = () => {
    setfiltroUsuario(!filtroUsuario)
 };
  
 handleFiltroCategoria = (event, data) => {  
    setfiltroCategoria(data.value)
 };
////////////////////////////////////////////////////////////////////////////////////
function handleSubmit(e) { 

   let exp =    {narrativa: narrativa,
                objetivo: objetivo,
                categoria: categoria,
                interes: interes,
                xml: "_",
                activo: true
   } 
   const id = insertExperienciaC4.call(exp, (err, res) => {
        if (err) {
          console.log(err);
        }else{
          //inhabilito el botón de guardar 
          setbtnGuardar(true)
          //muestro el ok
          setmsgOk(false)


        }
      });

  }
////////////////////////////////////////////////////////////////////////////////////

const categoriasOptions = [
  {
    key: 'Secuencias',
    text: 'Secuencias',
    value: 'Secuencias',
    image: { avatar: true, src: '/img/gato.png' },
  },
  {
    key: 'Alternativa',
    text: 'Alternativa',
    value: 'Alternativa',
    image: { avatar: true, src: '/img/jirafa.png' },
  },
  {
    key: 'Repetitiva',
    text: 'Repetitiva',
    value: 'Repetitiva',
    image: { avatar: true, src: '/img/perro.png' },
  },
  {
    key: 'Modularidad',
    text: 'Modularidad',
    value: 'Modularidad',
    image: { avatar: true, src: '/img/leon.png' },
  },

  ]
////////////////////////////////////////////////////////////////////////////////////
 handleInteres = (event) => {
    setInteres(event.target.value)
 };
 handleObjetivo = (event) => {  
    setObjetivo(event.target.value)
 };
 handleNarrativa = (event) => {  
    setNarrativa(event.target.value)
 };
 handleCategoria = (event, data) => {  
    setCategoria(data.value)
 };

 function handleSalir() {
  setOpen(false)
  setmsgOk(true)
  setbtnGuardar(false)
 }
  
////////////////////////////////////////////////////////////////////////////////////  
function renderModalx(){
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
          OBJETIVO ASFDASDF
          <Header.Subheader>NARRATIVA GASDASDFASD</Header.Subheader>
        </Header.Content>
      </Header>
      </Modal.Header>
      <Modal.Content image>

        <Modal.Description>
            <MiBloqueC4 />
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


/////////////////////////////////////////////////////////////////////////////////////////
const renderForm = () => (
        
        

        <Form onSubmit={(e) => handleSubmit(e)}>



            <Form.Field  required>
                <Form.Input                   
                  placeholder="OBJETIVO DIDÁCTICO"                  
                  onChange={handleObjetivo}
                />

                <Label pointing  color='teal'>
                  El objetivo didáctico es lo que nos proponemos enseñar con la experiencia.  
                </Label>
              </Form.Field>
             <Form.Group> 
            <Form.Field >
                <Form.Input
                  
                  placeholder="INTERÉS"
                  onChange={handleInteres}
                />

                <Label pointing  color='teal'>
                  El Interés es un sustantivo que refiere al tipo de personaje que puede tener vinculación con la agenda del niñe: zombies, cumpleaños, animales, etc. 
                </Label>
              </Form.Field>
              <Form.Field required>
                
                <Dropdown
                  inline
                  placeholder='SELECCIONA UNA CATEGORÍA'
                  fluid
                  selection
                  options={categoriasOptions}                  
                  onChange={handleCategoria}
                />

                <Label pointing  color='teal'>
                  El Interés es un sustantivo que refiere al tipo de personaje que puede tener vinculación con la agenda del niñe: zombies, cumpleaños, animales, etc. 
                </Label>
              </Form.Field>
              </Form.Group>

              <Form.Group>
              <Form.Field fluid required>

                <TextArea                
                  placeholder="NARRATIVA"
                  onChange={this.handleNarrativa}
                />
                <Label pointing  color='teal'>
                  La narrativa es la historia que le da sentido a la experiencia. Puede ser un cuento corto o una frase. 
                </Label>
              </Form.Field>
            
            </Form.Group>
         
           <Message color="violet" hidden={msgOk} size='big' floating ><b>Felicitaciones!</b> Has creado una nueva experiencia Pasayo Bloques</Message>
        </Form>
   
   
     
   
  )

////////////////////////////////////////////////////////////////////////////////////
const renderModal= () => (
      <Modal      
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}    
      size="fullscreen"
    >



      <Modal.Header>
      <Header as='h3'>
        <Icon name='braille' />
        <Header.Content>
          TU EXPERIENCIA PASAYO
          <Header.Subheader>Aquí podrás crear una nueva experiencia</Header.Subheader>
        </Header.Content>
      </Header>
      </Modal.Header>
      <Modal.Content>
      {renderForm()}

        
      </Modal.Content>
      <Modal.Actions>
        <Button color='violet' onClick={handleSalir}>
          Salir
        </Button>
        
        <Button color="purple" onClick={handleSubmit} disabled={btnGuardar}>
            GUARDAR
          </Button>
      </Modal.Actions>
    </Modal>
  )
////////////////////////////////////////////////////////////////////////////////////
console.log("1 filtroUsuario "+filtroUsuario)
  return(    
  <Grid>
        <Grid.Row>        
        <Grid.Column width={1}/>
          <Grid.Column width={14}>
            <Segment raised>
            {renderSelector()}
            </Segment>                          
          </Grid.Column>
          <Grid.Column width={1}/>
         </Grid.Row>
         <Grid.Row> 
          <Grid.Column width={1}/>
          <Grid.Column width={14}>  
            <ListaExperiencias categoria={categoria} 
                               interes={interes} 
                               filtroUsuario={filtroUsuario}
                               filtroCategoria={filtroCategoria}
                               />

           </Grid.Column> 
          <Grid.Column width={1}/>
          {renderModal()}
        </Grid.Row>
      </Grid>
    )
}