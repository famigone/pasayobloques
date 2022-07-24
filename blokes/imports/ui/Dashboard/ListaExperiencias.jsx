import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import MiBloque from "./MiBloque.jsx";
import MiBloqueC4 from "./MiBloqueC4.jsx";
import BotonSolucionC4 from "./BotonSolucionC4.jsx";
import { useTracker } from 'meteor/react-meteor-data';
import { updateLocacion } from "/api/methods.js";
import { BlocklyWorkspace } from 'react-blockly';
import Alert from "react-s-alert";
import {experienciaArreglo} from "./experienciasArreglo"
import Experiencias from "/imports/api/experiencias.js";
import { insertExperiencia, deleteExperienciaC4 } from "/api/methods.js";
import BotonRedirectC4 from "./BotonRedirectC4"
import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import LoaderExampleText from "/imports/ui/Dashboard/LoaderExampleText.js";
import ExperienciasC4 from "/imports/api/experienciasC4.js";

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

export default function ListaExperiencias({ categoria, interes, filtroUsuario, filtroCategoria, cantidad}) {

////////////////////////////////////////////////////////////////////////////////////
let [open, setOpen] = useState(false);
let [exp, setExp] = useState("");
let [verSolucion, setverSolucion] = useState(false);
let [openConfirm, setOpenConfirm] = useState(false);

////////////////////////////////////////////////////////////////////////////////////
const src = '/img/c4.png'

function cargarMas() {
    setCantidad(cantidad + CONST_PAGINA)
  }

function renderImg (categoria) {
  let rta = ""
  switch (categoria) {
    case "Secuencias": rta= '/img/gato.png'; break;
    case "Alternativa": rta= '/img/jirafa.png'; break;
    case "Repetitiva": rta= '/img/perro.png'; break;
    case "Modularidad": rta= '/img/leon.png'; break;
  }

  return rta;

  }
////////////////////////////////////////////////////////////////////////////////////
function handleResolver(unaExp) {
  setOpen(true)
  setExp(unaExp)
}
function handleVerSolucion(unaExp) {

  setExp(unaExp)
  setverSolucion(true)
  setOpen(true)
}

function handleCompartir(unaExp) {
  const history = useHistory();
  history.push("/colaborativoc4/"+unaExp._id);
}

////////////////////////////////////////////////////////////////////////////////////
function renderSolucion(unaExp){
let btn = "";
  if (!(unaExp.xml ==="_"))
    //btn=<Button  color='violet' size = "small" onClick={() => handleVerSolucion(unaExp)}>Solución</Button>
    btn = <BotonSolucionC4 experiencia={unaExp._id}/>
  return (btn)
}




const creador = useTracker(() => Meteor.users.findOne(exp.createdBy), []);
//const creador = Meteor.users.findOne(exp.createdBy)
//const user = users.findOne(Meteor.userId())
//console.log("suarios: "+ creador)




function eliminarExp(laExp){

   let exp =    {id: laExp._id}
   const id = deleteExperienciaC4.call(exp, (err, res) => {
        if (err) {
          console.log(err);
        }else{        
          setOpenConfirm(false)
          //inhabilito el botón de guardar
          //setbtnGuardar(true)
          //muestro el ok
          //setmsgOk(false)


        }
      });

  }

function btnEliminar (laExp) {
  if ((laExp.createdBy === Meteor.userId()) || (Meteor.user().emails[0].address=="pasayo@fi.uncoma.edu.ar" ))
    botonSave = <Button content='Borrar' icon='erase' labelPosition='right' color="teal" onClick={() => {setOpenConfirm(true)}}/>


  else botonSave = ""
  return botonSave
  }
const handleConfirmClose = () => setOpenConfirm(false)
const renderCard = (unaExp) => (
<Card raised>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={renderImg(unaExp.categoria)}
        />

        <Card.Header>{unaExp.categoria}</Card.Header>

        <Card.Description>
          <b>{unaExp.narrativa}</b>
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
      <a>
        <Icon name='bullseye' />
        {unaExp.objetivo}
      </a>
    </Card.Content>
         <Card.Content extra>

        <Card.Meta>
          <Label as='a' color='violet' tag>
            {unaExp.interesDescripcion()}
          </Label>
        </Card.Meta>

      </Card.Content>
      <Card.Content extra>
        <div className='ui three buttons'>

          <Button.Group fluid>
              <BotonRedirectC4 experiencia={unaExp}/>
              {btnEliminar(unaExp)}
              {renderSolucion(unaExp)}
          </Button.Group>
        <Confirm
          open={openConfirm}
          header='Atención!'
          content='Vas a eliminar la experiencia.'
          cancelButton='Mejor no'
          confirmButton="Quiero eliminarla!"
          onCancel={handleConfirmClose}
          onConfirm={()=>eliminarExp(unaExp)}
        />
        </div>
        <Divider/>
        <Card.Content extra>
      <div align="right">
      <Label color="purple">
        <Icon name='user' />
        {creadore(unaExp.createdBy) }        
      </Label>

      </div>
    </Card.Content>

      </Card.Content>

    </Card>


  )

////////////////////////////////////////////////////////////////////////////////////
function handleSalir(){
   setOpen(false)
   setverSolucion(false)
}
const userLoading = useTracker(() => {
    const handle = Meteor.subscribe('users');
    return !handle.ready();
    }, []);

function creadore(idx){
  let rta= ""
  if (idx) {
      rta= Meteor.users.findOne(idx).emails[0].address;
  }
  return rta;
}

////////////////////////////////////////////////////////////////////////////////////
function renderModal(){
    return(
      <Modal
      onClose={() => handleSalir}
      onOpen={() => setOpen(true) }
      open={open}
      //trigger={<Button>Show Modal</Button>}
      size="fullscreen"
    >
      <Modal.Header>
      <Header as='h3'>
        <Icon name='bullseye' />
        <Header.Content>
          {exp.categoria}
          <Header.Subheader>{exp.narrativa}</Header.Subheader>
        </Header.Content>
      </Header>
      </Modal.Header>
      <Modal.Content image>

        <Modal.Description>
            <MiBloqueC4 laExp = {exp} conSolucion={verSolucion}/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='violet' onClick={handleSalir}>
          Salir
        </Button>

      </Modal.Actions>
    </Modal>
    )
  }


/////////////////////////////////////////////////////////////////////////////////



 const expLoading = useTracker(() => {
  console.log("filtroUsuario "+filtroUsuario)
  console.log("filtroCategoria "+filtroCategoria)
  console.log("cantidad "+cantidad)
  console.log("interes "+interes)
    const handle = Meteor.subscribe('experienciasC4', filtroUsuario, filtroCategoria, cantidad, interes);
    return !handle.ready();
  });



const options = {
    sort: { createdAt: -1 },
  };


  const misExperiencias = useTracker(() =>
    ExperienciasC4.find({},options).fetch());

  if (expLoading) {
      return <LoaderExampleText />;
    }


  return(
    <div>
      {renderModal()}
    <Card.Group itemsPerRow={3}>
      { misExperiencias.map(unaExp => (
        renderCard(unaExp)
        ))
      }
      </Card.Group>
  </div>
  )





}
