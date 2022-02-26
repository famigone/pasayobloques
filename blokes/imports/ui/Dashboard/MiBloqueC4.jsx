import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import { useTracker } from 'meteor/react-meteor-data';
import Blockly from "blockly";
import {solucion} from "./soluciones"
import {toolbar, toolModularidad, toolRepetitivas, toolSecuencia, toolAlternativaSimple} from "./toolbar"
import { updateExperienciaC4 } from "/api/methods.js";
import BlocklyJS from 'blockly/javascript';
import BotonBackC4 from './BotonBackC4'
import LoaderExampleText from "/imports/ui/Dashboard/LoaderExampleText.js";

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
export default function MiBloqueC4({laExp}) {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  const [msgOk, setmsgOk] = useState(true);
  
  //const initialXml = demo
  
  
    const toolboxCategories = codigo(laExp.experiencia)
    //console.log(laExp.experiencia)
  function codigo(){    
    var rta=0
    if (laExp.categoria === "Secuencias") rta = toolSecuencia
    else if (laExp.categoria === "Alternativa") rta = toolAlternativaSimple  
    else if (laExp.categoria === "Repetitiva") rta = toolRepetitivas  
    else if (laExp.categoria === "Modularidad") rta = toolModularidad    
    return rta;  
  }

  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

function apagarMensaje() {
  setmsgOk(true)
}



 function runCode() {
      //console.log(javascriptCode)
      // Generate JavaScript code and run it.
      
      try {
        eval(javascriptCode);
      } catch (e) {
        alert(e);
      }
    } 

function saveCode() {
    const exp = {id: laExp._id, xml: xml}    
     const rta = updateExperienciaC4.call(exp, (err, res) => {
        if (err) {
          console.log(err);
        }else{
          setmsgOk(false)
          setTimeout(apagarMensaje, 5000)
        }
      });    
    } 
  


 
//console.log(laExp.experiencia)
let botonSave
//console.log("laExp.createdBy "+laExp.createdBy)
//console.log("Meteor.userId "+Meteor.userId())
if (laExp.createdBy === Meteor.userId())
  botonSave = <Button color="purple" onClick={saveCode} size="small"><Icon name='cloud upload'/> Guardar como Solución</Button>    
else botonSave = ""

//param es el XML inicial de la experiencia. Si desde listaExperiencias presionan Solucion, entonces 
//en la prop conSolucion viene true, y levanto el xml de la experiencia. Sino no. 


//const expLoading = useTracker(() => {
 //   const handle = Meteor.subscribe('experienciasC4One', laExp._id);
 //   return !handle.ready();
 // });


const options = {
    sort: { createdAt: -1 },    
  };
    
  
 // const laExperiencia = ExperienciasC4.findOne(laExp._id);
 // console.log(laExperiencia)
 // if (expLoading) {
 //     return <LoaderExampleText />;
 //   }
  

   
  
    

    return (
  <><p>
      
  <Grid> 
   <Grid.Column width={2}>
    <center>
    <Button color="violet" onClick={runCode} circular icon='play' size="massive"/>
    </center>
  
   </Grid.Column>    
       <Grid.Column width={4}>    
       <Button.Group>
          {botonSave}
          <BotonBackC4/>
       </Button.Group>   
       </Grid.Column> 
   
   <Grid.Column width={10}>
   <h4>
    <Message
    icon='thumbtack'
    header='Hemos guardado el código como solución para esta experiencia.'
    color= "violet"
    content='Podes cambiarlo cuando quieras.'
    hidden={msgOk}
  /></h4>
    
   </Grid.Column> 
   <Grid.Row/>
  </Grid> 
  </p>

      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={laExp.xml}
        className="fill-height"        
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />
  
    </>
  );
    
}
