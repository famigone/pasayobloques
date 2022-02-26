import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import {solucion} from "./soluciones"
import {toolbar} from "./toolbar"
import BlocklyJS from 'blockly/javascript';
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
export default function MiBloque({demo, experiencia, esColab}) {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");  
  let [msgCopiado, setmsgCopiado] = useState(true);
  let [msgEjecutado, setmsgEjecutado] = useState(true);
  let [msgGuardado, setmsgGuardado] = useState(true);
  
  //const link = "http://localhost:3000/colaborativo/"+laExp._id 
  
  //const initialXml = demo
  
  if (demo) 
    initialXml= solucion[experiencia];
  else 
    initialXml=""

    const toolboxCategories = toolbar[experiencia]

  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
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
  <>
<div>
  
  <Grid> 

   
   <Grid.Column width={16}>

         <Message icon floating >
        <Icon name='circle notched' loading color='violet'/>
        <Message.Content>
        <Button.Group>
          
          <Button color="violet"  onClick={runCode} ><Icon name="play"/>Ejecutar</Button>
          
          
          
          
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
      />
  
    </>
  );
    
}
