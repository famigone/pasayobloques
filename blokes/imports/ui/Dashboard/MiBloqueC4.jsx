import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import {solucion} from "./soluciones"
import {toolbar, toolModularidad, toolRepetitivas, toolSecuencia, toolAlternativaSimple} from "./toolbar"
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
export default function MiBloqueC4({laExp}) {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  
  
  //const initialXml = demo
  
  
    const toolboxCategories = codigo(laExp.experiencia)

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


 function runCode() {
      //console.log(javascriptCode)
      // Generate JavaScript code and run it.
      
      try {
        eval(javascriptCode);
      } catch (e) {
        alert(e);
      }
    } 

  


 
console.log(laExp.experiencia)
    return (
  <><p>
      
  <Grid> 
   <Grid.Column width={2}>
    <center>
    <Button color="violet" onClick={runCode} circular icon='play' size="massive"/>
    </center>
   </Grid.Column> 
   <Grid.Column width={14}>

    
   </Grid.Column> 
   <Grid.Row/>
  </Grid> 
  </p>

      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={""}
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
