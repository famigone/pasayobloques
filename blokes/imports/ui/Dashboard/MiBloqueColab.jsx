import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import {solucion} from "./soluciones"
import {toolbar} from "./toolbar"
import BlocklyJS from 'blockly/javascript';
import { updateExperiencia } from "/api/methods.js";
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
  let [xml, setXml] = useState("");
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
    const exp = {id: laExp._id, xml: xml}
    setXml(xml)
     updateExperiencia.call(exp, (err, res) => {
        if (err) {
          console.log(err);
        }
      });
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

 
 function runCode() {
      console.log(javascriptCode)
      // Generate JavaScript code and run it.
      
      try {
        eval(javascriptCode);
      } catch (e) {
        alert(e);
      }
    } 

  


 
      
  return (
    <><p>
  
  <Grid> 

   
   <Grid.Column width={16}>

         <Message icon floating >
        <Icon name='circle notched' loading color='violet'/>
        <Message.Content>

          <Message.Header>Link Colaborativo</Message.Header>

          <p>Haciendo click en el botón de abajo, copiaras el link a esta experiencia. Podes compartilo con cualquier persona en en cualquier lugar y juntos pueden resolver la experiencia.</p>
          <Button color="violet"  onClick={() => {navigator.clipboard.writeText(link)}} icon='copy'>
            <Icon name="copy" /> Copiar el link
          </Button>          
        
          <Button color="blue" onClick={() => window.location.reload(false)}><Icon name="refresh" /> Actualizar</Button>
          <Button color="purple"  onClick={runCode} ><Icon name="play"/>Ejecutar</Button>

          
        </Message.Content>
      </Message>
      
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
      />
  
    </>
  )
 
    
}
