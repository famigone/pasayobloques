import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import {solucion} from "./soluciones"
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
export default function MiBloque({demo, experiencia}) {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");

  
  //const initialXml = demo
  
  if (demo) 
    initialXml= solucion[experiencia];
  else 
    initialXml=""

    const toolboxCategories = {
      kind: "categoryToolbox",
      contents: [
        {
          kind: "category",
          name: "Mensajes",
          colour: "#5CA65C",
          contents: [
          {
              type: 'text',
              kind: "block",
              message0: '%1',
              args0: [{
                type: 'field_input',
                name: 'TEXT',
                text: '',
              }],
              output: 'String',
              style: 'text_blocks',
              helpUrl: '%{BKY_TEXT_TEXT_HELPURL}',
              tooltip: '%{BKY_TEXT_TEXT_TOOLTIP}',
              extensions: [
                'text_quotes',
                'parent_tooltip_when_inline',
              ],
          }, 
          
            {
              kind: "block",
              type: "text_print",              
            },
          ]
        },        

        {
          kind: "category",
          name: "Numeros",
          colour: "#5CA65C",
          contents: [
            
            {
              kind: "block",
              type: "math_number",
            },
          ],
        },
        
        {
          kind: "category",
          name: "Variable",
          colour: "#5CA65C",
          custom: "VARIABLE",
          contents: [

            {
              kind: "block",
              "type": "variables_set_dynamic",
    "message0": "%{BKY_VARIABLES_SET}",
    "args0": [{
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
    },
    {
      "type": "input_value",
      "name": "VALUE"
    }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "variable_dynamic_blocks",
    "tooltip": "%{BKY_VARIABLES_SET_TOOLTIP}",
    "helpUrl": "%{BKY_VARIABLES_SET_HELPURL}",
    "extensions": ["contextMenu_variableDynamicSetterGetter"]
            },
            {
              kind: "block",
              "type": "variables_get_dynamic",
    "message0": "%1",
    "args0": [{
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
    }],
    "output": null,
    "style": "variable_dynamic_blocks",
    "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
    "tooltip": "%{BKY_VARIABLES_GET_TOOLTIP}",
    "extensions": ["contextMenu_variableDynamicSetterGetter"],
            }
          ],
        },
      ],
    };

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
      <center>
   
   <Button color="violet" onClick={runCode} circular icon='play' size="massive"/>
   
  </center></p>

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
