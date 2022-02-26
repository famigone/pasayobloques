import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useState, useCallback } from "react";
import { useTracker } from 'meteor/react-meteor-data';
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import {solucion} from "./soluciones"
import {toolbar} from "./toolbar"
import BlocklyJS from 'blockly/javascript';
import LoaderExampleText from "/imports/ui/Dashboard/LoaderExampleText.js";
import { updateExperiencia } from "/api/methods.js";
import Experiencias from "/imports/api/experiencias.js";
import BotonBack from "./BotonBack"

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
export default function MiBloqueColab({laExp}) {
  //const experiencia = useTracker(() => Experiencias.findOne(laExp._id));  
  //console.log("experiencia experiencia "+experiencia._id)
  //let [xml, setXml] = useState(experiencia.xml);  
  let [xml, setXml] = useState(laExp.xml);
  let [msgCopiado, setmsgCopiado] = useState(true);
  let [msgEjecutado, setmsgEjecutado] = useState(true);
  let [msgGuardado, setmsgGuardado] = useState(true);
  const [javascriptCode, setJavascriptCode] = useState("");
  const link = "http://localhost:3000/colaborativo/"+laExp._id
  
  //const initialXml = demo
  
  
    initialXml= laExp.xml;
  

    const toolboxCategories = toolbar[laExp.codigo]

function refreshPage() {
    window.location.reload(false);
  }



  function workspaceDidChange(workspace) {
  //  console.log(xml)
    //aca hay que actualizar la experiencia
    //BUG ESTO HACE MILLONES DE UPDATES POR SEGUNDO. HAY QUE HACER EXPLÍCITO EL GUARDADO.
    const exp = {id: laExp._id, xml: xml}
    setXml(xml)
    // updateExperiencia.call(exp, (err, res) => {
    //    if (err) {
    //      console.log(err);
    //    }
    //  });
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

   function inyectar() {  
    //aca hay que actualizar la experiencia
    const exp = {id: laExp._id, xml: xml}
    setXml(xml)
     updateExperiencia.call(exp, (err, res) => {
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

function handleGuardar() {  
  const exp = {id: laExp._id, xml: xml}    
     updateExperiencia.call(exp, (err, res) => {
        if (err) {
          console.log(err);
        }else{
        setmsgGuardado(false)
          
        setTimeout(apagarMsg, 5000)        
        }
      });
  
}  
  return (    
    <><div>
  
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
          
          
          <Button color="blue"  onClick={handleGuardar} ><Icon name="upload"/>Guardar</Button>
          <Button color="teal" onClick={() => window.location.reload(false)}><Icon name="refresh" /> Actualizar</Button>
          <BotonBack/>
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
  
  </div>

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
        //onInject={inyectar}
      />
  
    </>
  )
 
    
}
