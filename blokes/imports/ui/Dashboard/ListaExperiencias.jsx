import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import MiBloque from "./MiBloque.jsx";
import MiBloqueC4 from "./MiBloqueC4.jsx";
import { useTracker } from 'meteor/react-meteor-data';
import { updateLocacion } from "/api/methods.js";
import { BlocklyWorkspace } from 'react-blockly';
import Alert from "react-s-alert";
import {experienciaArreglo} from "./experienciasArreglo"
import Experiencias from "/imports/api/experiencias.js";
import { insertExperiencia } from "/api/methods.js";
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

export default function ListaExperiencias({ categoria, interes, filtroUsuario, filtroCategoria}) {
////////////////////////////////////////////////////////////////////////////////////
let [open, setOpen] = useState(false);  
let [exp, setExp] = useState("");  
let [verSolucion, setverSolucion] = useState(false);  
////////////////////////////////////////////////////////////////////////////////////
const src = '/img/c4.png'
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
    btn=<Button  color='violet' onClick={() => handleVerSolucion(unaExp)}>Solución</Button>
  return (btn)
}




const currentUser = useTracker(() => Meteor.users.findOne(exp.createdBy), []);
const creador = Meteor.users.findOne(exp.createdBy)
//const user = users.findOne(Meteor.userId())
//console.log("suarios: "+ creador)


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
        <div className='ui three buttons'>
        <Card.Meta>
          <Label as='a' color='violet' tag>
            {unaExp.interes}
          </Label>          
        </Card.Meta>
        </div>
      </Card.Content>
      <Card.Content extra>
        <div className='ui three buttons'>
          <Button  color='teal' onClick={() => handleResolver(unaExp)}>
            Resolver 
          </Button>          
          
          <BotonRedirectC4 experiencia={unaExp}/>
          {renderSolucion(unaExp)}
        </div>
        <Divider/>
        <Card.Content extra>
      <div align="right">
      <Label color="purple">
        <Icon name='user' />
        {Meteor.user().emails[0].address}</Label>
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
    const handle = Meteor.subscribe('experienciasC4', filtroUsuario, filtroCategoria);
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