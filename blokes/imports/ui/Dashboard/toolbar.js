export var toolbar = [];

export const toolSecuencia = {
      kind: "categoryToolbox",
      contents: [
        {
          kind: "category",
          name: "Mensajes",
          colour: "#AF7AC5",
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
            {
              type: 'text_prompt',
              kind: "block",          
          }, 
          ]
        },        

        {
          kind: "category",
          name: "Numeros",
          colour: "#AF7AC5",
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
          colour: "#AF7AC5",
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
    }



export const toolAlternativaSimple = {
      kind: "categoryToolbox",
      contents: [
      {
          kind: "category",
          name: "Mensajes",
          colour: "#AF7AC5",
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
            }
            ,
            {
              type: 'text_prompt',
              kind: "block",          
          }, 
          ]
        },        

        {
          kind: "category",
          name: "Numeros",
          colour: "#AF7AC5",
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
          colour: "#AF7AC5",
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
 
           {
      "kind": "category",
      "name": "Control",
      "colour": "#AF7AC5",
      "contents": [
        {
          "kind": "block",
          "type": "controls_if"
        },
      ]
    },
    {
      "kind": "category",
      "name": "Logic",
      "colour": "#AF7AC5",
      "contents": [
        {
          "kind": "block",
          "type": "logic_compare"
        },
        {
          "kind": "block",
          "type": "logic_operation"
        },
        {
          "kind": "block",
          "type": "logic_boolean"
        }
      ]
    }
         ,        

        {
          kind: "category",
          name: "Numeros",
          colour: "#AF7AC5",
          contents: [
            
            {
              kind: "block",
              type: "math_number",
            },
          ],
        },
        
        
      ],
    }


export const toolModularidad = {
      kind: "categoryToolbox",
      contents: [
      {
          kind: "category",
          name: "Mensajes",
          colour: "#AF7AC5",
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

            {
              type: 'text_prompt',
              kind: "block",          
          },       
          ]
        },        

        {
          kind: "category",
          name: "Numeros",
          colour: "#AF7AC5",
          contents: [
            
            {
              kind: "block",
              type: "math_number",
            },
          ],
        },
         {
          kind: "category",
          name: "Repetitivas",
          colour: "#AF7AC5",
          contents: [
            
            {
            "kind": "block",
            "type": "controls_whileUntil"
        },
        {
            "kind": "block",
            "type": "controls_repeat"
        },  
        {
            "kind": "block",
            "type": "controls_whileUntil"
        },  
        {
            "kind": "block",
            "type": "controls_for"
        },  
        {
            "kind": "block",
            "type": "controls_flow_statements"
        },  
          ],
        },
        {
          kind: "category",
          name: "Variable",
          colour: "#AF7AC5",
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
 
           {
      "kind": "category",
      "name": "Control",
      "colour": "#AF7AC5",
      "contents": [
        {
          "kind": "block",
          "type": "controls_if"
        },
      ]
    },
    {
      "kind": "category",
      "name": "Lógico",
      "colour": "#AF7AC5",
      "contents": [
        {
          "kind": "block",
          "type": "logic_compare"
        },
        {
          "kind": "block",
          "type": "logic_operation"
        },
        {
          "kind": "block",
          "type": "logic_boolean"
        }
      ]
    }
         ,        

        {
          kind: "category",
          name: "Numeros",
          colour: "#AF7AC5",
          contents: [
            
            {
              kind: "block",
              type: "math_number",
            },
          ],
        },
                

        {
  "kind": "category",
  colour: "#AF7AC5",
  "name": "Módulos",
  "custom": "PROCEDURE"
}
        
      ],
    }

export const toolRepetitivas = {
      kind: "categoryToolbox",
      contents: [
      {
          kind: "category",
          name: "Mensajes",
          colour: "#AF7AC5",
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
            {
              type: 'text_prompt',
              kind: "block",          
          }, 
          ]
        },        

        {
          kind: "category",
          name: "Numeros",
          colour: "#AF7AC5",
          contents: [
            
            {
              kind: "block",
              type: "math_number",
            },
          ],
        },
         {
          kind: "category",
          name: "Repetitivas",
          colour: "#AF7AC5",
          contents: [
            
            {
            "kind": "block",
            "type": "controls_whileUntil"
        },
        {
            "kind": "block",
            "type": "controls_repeat"
        },  
        {
            "kind": "block",
            "type": "controls_whileUntil"
        },  
        {
            "kind": "block",
            "type": "controls_for"
        },  
        {
            "kind": "block",
            "type": "controls_flow_statements"
        },  
          ],
        },
        {
          kind: "category",
          name: "Variable",
          colour: "#AF7AC5",
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
 
           {
      "kind": "category",
      "name": "Control",
      "colour": "#AF7AC5",
      "contents": [
        {
          "kind": "block",
          "type": "controls_if"
        },
      ]
    },
    {
      "kind": "category",
      "name": "Logic",
      "colour": "#AF7AC5",
      "contents": [
        {
          "kind": "block",
          "type": "logic_compare"
        },
        {
          "kind": "block",
          "type": "logic_operation"
        },
        {
          "kind": "block",
          "type": "logic_boolean"
        }
      ]
    }
         ,        

        {
          kind: "category",
          name: "Numeros",
          colour: "#AF7AC5",
          contents: [
            
            {
              kind: "block",
              type: "math_number",
            },
          ],
        },
        
        
      ],
    }



toolbar[1] = toolSecuencia
toolbar[2] = toolSecuencia
toolbar[3]= toolAlternativaSimple
toolbar[4]= toolAlternativaSimple
toolbar[5]= toolSecuencia
toolbar[6]= toolAlternativaSimple
toolbar[7]= toolAlternativaSimple
toolbar[8]= toolAlternativaSimple
toolbar[9]= toolAlternativaSimple
toolbar[10]= toolModularidad
toolbar[11]= toolModularidad
toolbar[12]= toolModularidad
toolbar[13]= toolModularidad