import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";

export default function MiBloque() {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
    const toolboxCategories = {
      kind: "categoryToolbox",
      contents: [
        {
          kind: "category",
          name: "Cajitas",
          colour: "#5CA65C",
          contents: [
            {   kind: "block",
                type: "variables_get",
                message0: "%1",
                args0: [
                  {
                    type: "field_variable",
                    name: "VAR",
                    variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
                  }
                ],
                output: null,
                style: "variable_blocks",
                helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
                tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
                extensions: ["contextMenu_variableSetterGetter"]
              },
              {
                kind: "block",
                 type: "variables_set",
                 message0: "%{BKY_VARIABLES_SET}",
                 args0: [
                   {
                     type: "field_variable",
                     name: "VAR",
                     variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
                   },
                   {
                     type: "input_value",
                     name: "VALUE"
                   }
   ],
   previousStatement: null,
   nextStatement: null,
   style: "variable_blocks",
   tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
   helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
   extensions: ["contextMenu_variableSetterGetter"]
 }
          ],
        },

        {
          kind: "category",
          name: "Math",
          colour: "#5CA65C",
          contents: [
            {
              kind: "block",
              type: "math_round",
            },
            {
              kind: "block",
              type: "math_number",
            },
          ],
        },
        {
          kind: "category",
          name: "Custom",
          colour: "#5CA699",
          contents: [
            {
              kind: "block",
              type: "new_boundary_function",
            },
            {
              kind: "block",
              type: "return",
            },
          ],
        },
        {
          kind: "category",
          name: "Variable",
          colour: "#5CA65C",
          contents: [
            {
              kind: "block",
              type: "math_round",
            },
            {
              kind: "block",
              type: "math_number",
            },
          ],
        },
      ],
    };
  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

  return (
    <>
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
      <pre id="generated-xml">{xml}</pre>
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={javascriptCode}
        readOnly
      ></textarea>
    </>
  );
}
