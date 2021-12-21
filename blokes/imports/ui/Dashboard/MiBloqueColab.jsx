import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import {solucion} from "./soluciones"
import {toolbar} from "./toolbar"
import BlocklyJS from 'blockly/javascript';
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
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  
  
  //const initialXml = demo
  
  
    initialXml= laExp.xml;
  

    const toolboxCategories = toolbar[laExp.codigo]

  function workspaceDidChange(workspace) {
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
   <Grid.Column width={2}>
    <center>
    <Button color="violet" onClick={runCode} circular icon='play' size="massive"/>
    </center>
   </Grid.Column> 
   <Grid.Column width={14}>

         <Message icon floating >
        <Icon name='circle notched' loading color='violet'/>
        <Message.Content>
          <Message.Header>Link Colaborativo</Message.Header>
          <p>Haciendo click en el botón de abajo, copiaras el link a esta experiencia. Podes compartilo con cualquier persona en en cualquier lugar y juntos pueden resolver la experiencia.</p>
          <Button color="violet"  onClick={() => {navigator.clipboard.writeText(this.state.link)}} icon='copy'>
            <Icon name="copy" /> Copiar el link
          </Button>
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
