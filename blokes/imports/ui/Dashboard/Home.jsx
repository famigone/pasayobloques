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
import { insertInteres } from "/api/methods.js";
import ExperienciasC4 from "/imports/api/experienciasC4.js";
import Interes from "/imports/api/interes.js";
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
const CONST_PAGINA = 20;
////////////////////////////////////////////////////////////////////////////////////
let [open, setOpen] = useState(false);  
let [openInteres, setOpenInteres] = useState(false);  
let [objetivo, setObjetivo] = useState("");  
let [narrativa, setNarrativa] = useState("");  
let [interes, setInteres] = useState("");  
let [categoria, setCategoria] = useState("");  
let [nuevoInteres, setNuevoInteres] = useState("");  
let [btnGuardar, setbtnGuardar] = useState(false);  
let [msgOk, setmsgOk] = useState(true);  
let [filtroUsuario, setfiltroUsuario] = useState(true);  
let [filtroCategoria, setfiltroCategoria] = useState(false);  
let [cantidad, setCantidad] = useState(CONST_PAGINA);  

////////////////////////////////////////////////////////////////////////////////////
function cargarMas() {
    setCantidad(cantidad + CONST_PAGINA)        
  }
//////////////////////////////////////////////////////////////////////////////////
function renderSelector(){
  return(
  
      <div>
      <Grid>
          
  
      <Grid.Row >
         <Grid.Column> 
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
                  
                  placeholder='CATEGORÍA'
                  clearable
                  selection
                  options={categoriasOptions}                  
                  onChange={handleFiltroCategoria}
                />

              </Form.Field>
                <Form.Field>
                
                <Dropdown
                  
                  placeholder='TRAYECTO'
                  clearable
                  selection
                  search
                  options={interesOptions()}
                  onChange={handleInteres}
                />

              </Form.Field>
           </Form.Group>   
         </Form>     
        </Grid.Column>   
       </Grid.Row>
  
      <Grid.Column> 
      <Grid.Row >
          <Button.Group> 
            <Button color="purple" type="submit"   onClick={() => setOpen(true)}>
              <Icon name="plus"/>NUEVA EXPERIENCIA
            </Button>

            <Button color="purple" type="submit"   onClick={() => setCantidad(cantidad + CONST_PAGINA)}>
              <Icon name="retweet"/>CARGAR MÁS
            </Button> 

           </Button.Group>  
        </Grid.Row>   
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
function handleSubmitInteres(e) { 

   let inter =    {descripcion: nuevoInteres} 
   const id = insertInteres.call(inter, (err, res) => {
        if (err) {
          console.log(err);
        }else{          
          setOpenInteres(false)
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

const interesLoading = useTracker(() => {
    const handle = Meteor.subscribe('intereses');
    return !handle.ready();
  });

  
  const miInteres = useTracker(() => 
    Interes.find({}).fetch());



 interesOptions = () => {
   let rta= "" 
   if (!interesLoading) {
      rta = miInteres      
   
   rta= rta.map(function(interes) {  
                          let uno= {key : interes._id, 
                            text : interes.descripcion,
                           value : interes._id}
                          return uno; 
                }) 
 }
 //  console.log("quedo: "+rta)
   return(rta)
 };

 

//////////////////////////////////////////////////////////////////////////////////
 handleNuevoInteres = (event) => {
    setNuevoInteres(event.target.value)      
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
 
handleInteres = (event, data) => {  
    setInteres(data.value)
    //console.log(data.value)
 };

 function handleSalir() {
  setOpen(false)
  setmsgOk(true)
  setbtnGuardar(false)
  setInteres(false)
 }
  

/////////////////////////////////////////////////////////////////////////////////////////
const renderForm = () => (
        
        

        <Form >



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
            
                <Dropdown
                  
                  placeholder='SELECCIONA UN TRAYECTO'
                  fluid                  
                  selection
                  search
                  options={interesOptions()}                  
                  onChange={handleInteres}
                />                        
                <Label pointing  color='teal'>
                  El TRAYECTO permite agrupar experiencias con objetivos comunes. 
                </Label>
              </Form.Field>
              <Form.Field>
                <Button color="red" icon="plus"  onClick={() => setOpenInteres(true)}/>
              </Form.Field>
            
              <Form.Field required>
                
                <Dropdown
                  
                  placeholder='SELECCIONA UNA CATEGORÍA'
                  fluid                  
                  selection
                  options={categoriasOptions}                  
                  onChange={handleCategoria}
                />

                <Label pointing  color='teal'>
                  La categoría permite habilitar el conjunto de bloques correspondiente al tipo de actividad. 
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
const renderModalInteres= () => (
    <Modal      
      onClose={() => setOpenInteres(false)}
      onOpen={() => setOpenInteres(true)}
      open={openInteres}    
     
    >
 <Modal.Header>
      <Header as='h3'>
        <Icon name='braille' />
        <Header.Content>
          NUEVO TRAYECTO
          <Header.Subheader>Aquí podrás crear un nuevo TRATECTO para tu experiencia.</Header.Subheader>
        </Header.Content>
      </Header>
      </Modal.Header>
      <Modal.Content>
      
<Form onSubmit={(e) => handleNuevoInteres(e)}>
           <Form.Group> 
       
                       
       <Form.Field>
                 <Form.Input                   
                  placeholder="NUEVO TRAYECTO"                  
                  onChange={handleNuevoInteres}
                />

                <Label pointing  color='teal'>
                  Un nombre representativo de las expereriencias que agrupa  
                </Label>
       </Form.Field>
           
           </Form.Group>   
         </Form>     
        
      </Modal.Content>
      <Modal.Actions>
        <Button color='violet' onClick={() => setOpenInteres(false)}>
          Salir
        </Button>

        
        <Button color="purple" onClick={handleSubmitInteres} disabled={btnGuardar}>
            GUARDAR TRAYECTO
          </Button>
      </Modal.Actions>
    </Modal>
  )


////////////////////////////////////////////////////////////////////////////////////
const renderModal= () => (
      <Modal      
      onClose={() => handleSalir}
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
                               cantidad = {cantidad}
                               />
                               
           </Grid.Column> 
          <Grid.Column width={1}/>
          {renderModal()}
          {renderModalInteres()}
        </Grid.Row>
      </Grid>
    )
}