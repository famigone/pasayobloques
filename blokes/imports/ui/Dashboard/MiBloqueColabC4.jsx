import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useState, useEffect,useCallback } from "react";
import { useTracker } from 'meteor/react-meteor-data';
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import {solucion} from "./soluciones"
import BotonBackC4 from "./BotonBackC4"
import BlocklyJS from 'blockly/javascript';
import LoaderExampleText from "/imports/ui/Dashboard/LoaderExampleText.js";
import { updateExperienciaC4, updateUso } from "/api/methods.js";
import ExperienciasC4 from "/imports/api/experienciasC4.js";
import Uso from "/imports/api/uso.js";
import {toolbar, toolModularidad, toolRepetitivas, toolSecuencia, toolAlternativaSimple} from "./toolbar"
import {
  Icon,
  Label,
  Menu,
  Message,
  Table,
  Segment,
  TextArea,
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
export default function MiBloqueColabC4({laExp, elUso, demo}) {
  //const experiencia = useTracker(() => Experiencias.findOne(laExp._id));  
  //console.log("experiencia experiencia "+experiencia._id)
  //let [xml, setXml] = useState(experiencia.xml);  
  let [xml, setXml] = useState(laExp.xml);
  let [msgCopiado, setmsgCopiado] = useState(true);
  let [msgEjecutado, setmsgEjecutado] = useState(true);
  let [msgGuardado, setmsgGuardado] = useState(true);
  const [javascriptCode, setJavascriptCode] = useState("");
  const link = "http://localhost:3000/colaborativoc4/"+elUso._id
  
  //const initialXml = demo
  
  

  //////////////////////////////////////////////////////////////////////////////////


function refreshPage() {
    window.location.reload(false);
  }
  const toolboxCategories = codigo(laExp.experiencia)
   // console.log(laExp.experiencia)
  function codigo(){    
    var rta=0
    if (laExp.categoria === "Secuencias") rta = toolSecuencia
    else if (laExp.categoria === "Alternativa") rta = toolAlternativaSimple  
    else if (laExp.categoria === "Repetitiva") rta = toolRepetitivas  
    else if (laExp.categoria === "Modularidad") rta = toolModularidad    
    return rta;  
  }


  function workspaceDidChange(workspace) {
    const exp = {id: laExp._id, xml: xml}
    setXml(xml)
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

   function inyectar() {  
    //aca hay que actualizar la experiencia
    const exp = {id: laExp._id, xml: xml}
    setXml(xml)
     updateExperienciaC4.call(exp, (err, res) => {
        if (err) {
          console.log(err);
        }
      });    
  }
 function runCode() {
      console.log(javascriptCode)
      // Generate JavaScript code and run it.
      
      try {
        eval(javascriptCode);
        setmsgEjecutado(false)
        setTimeout(apagarMsg, 5000)
      } catch (e) {
        alert(e);
      }
    } 

function apagarMsg() {
  setmsgCopiado(true)
  setmsgEjecutado(true)
  setmsgGuardado(true)

}

function handleCopy() {
  navigator.clipboard.writeText(link)
  setmsgCopiado(false)
  setTimeout(apagarMsg, 5000)
}  

function handleGuardarSolucion() {  
  const exp = {id: laExp._id, xml: xml}    
     updateExperienciaC4.call(exp, (err, res) => {
        if (err) {
          console.log(err);
        }else{
        setmsgGuardado(false)
          
        setTimeout(apagarMsg, 5000)        
        }
      });
  
}  

function handleGuardar() {  
  const exp = {id: elUso._id, xml: xml}    
     updateUso.call(exp, (err, res) => {
        if (err) {
          console.log(err);
        }else{
        setmsgGuardado(false)
          
        setTimeout(apagarMsg, 5000)        
        }
      });
  
}  

///////////////////////////////////////////////////////////////

  
    initialXml= elUso.xml; 
///////////////////////////////////////////////////////////////
if (laExp.createdBy === Meteor.userId())
  botonSave = <Button color="purple" onClick={handleGuardarSolucion} size="small"><Icon name='cloud upload'/> Guardar como Solución</Button>    
else botonSave = ""
  return (    
    <><p>
  
  <Grid> 

   
   <Grid.Column width={16}>

         <Message icon floating >
        <Icon name='circle notched' loading color='violet'/>
        <Message.Content>
          <Button.Group>         
          <Button color="violet"  onClick={() => {handleCopy()}} icon='copy'>
            <Icon name="copy" /> Copiar el link
          </Button>                          
          <Button color="purple"  onClick={runCode} ><Icon name="play"/>Ejecutar</Button>
          
          
          
          {botonSave}
          <Button color="blue"  onClick={handleGuardar} ><Icon name="upload"/>Guardar</Button>
          <Button color="teal" onClick={() => window.location.reload(false)}><Icon name="refresh" /> Actualizar</Button>
          <BotonBackC4/>
         </Button.Group>  
        </Message.Content>
      </Message>
       <Message
        negative      
        hidden= {msgCopiado}
        compact
        size='large'
        color= "violet"
        content= <Message.Header>Copiamos el link de esta actividad en el portapapeles. Podes pasarselo a cualquiera haciendo CLICK DERECHO -> PEGAR.</Message.Header>
        icon= "paperclip"
      />
       <Message
        negative      
        hidden= {msgEjecutado}
        compact
        size='large'
        color= "violet"
        content= <Message.Header>Tu código fue ejecutado.</Message.Header>
        icon= "play"
      />
       <Message
        negative      
        hidden= {msgGuardado}
        compact
        size='large'
        color= "violet"
        content= <Message.Header>Hemos guardado tu código.</Message.Header>
        icon= "upload"
      />     
            

   </Grid.Column>
      
   <Grid.Row/>
  </Grid> 
  
  </p>

      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
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
        //onInject={inyectar}
      />
  
    </>
  )
 
    
}
