export var toolbar = [];
toolbar[1] = {
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
    }

toolbar[2] = {
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
    }


toolbar[3] = {
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
        {
          kind: "category",
          name: "Control",
          colour: "#5CA65C",
          contents: [
          
          
     

// Block for boolean data type: true and false.
  {
    'type': 'logic_boolean',
     kind: "block",
    'message0': '%1',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'BOOL',
        'options': [
          ['%{BKY_LOGIC_BOOLEAN_TRUE}', 'TRUE'],
          ['%{BKY_LOGIC_BOOLEAN_FALSE}', 'FALSE'],
        ],
      },
    ],
    'output': 'Boolean',
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_BOOLEAN_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_BOOLEAN_HELPURL}',
  },
  // Block for comparison operator.
  {
    'type': 'logic_compare',
     kind: "block",
    'message0': '%1 %2 %3',
    'args0': [
      {
        'type': 'input_value',
        'name': 'A',
      },
      {
        'type': 'field_dropdown',
        'name': 'OP',
        'options': [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['\u200F<', 'LT'],
          ['\u200F\u2264', 'LTE'],
          ['\u200F>', 'GT'],
          ['\u200F\u2265', 'GTE'],
        ],
      },
      {
        'type': 'input_value',
        'name': 'B',
      },
    ],
    'inputsInline': true,
    'output': 'Boolean',
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_LOGIC_COMPARE_HELPURL}',
    'extensions': ['logic_compare', 'logic_op_tooltip'],
  },
  // Block for if/elseif/else condition.
  {
    'type': 'controls_if',
     kind: "block",
    'message0': '%{BKY_CONTROLS_IF_MSG_IF} %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'IF0',
        'check': 'Boolean',
      },
    ],
    'message1': '%{BKY_CONTROLS_IF_MSG_THEN} %1',
    'args1': [
      {
        'type': 'input_statement',
        'name': 'DO0',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_CONTROLS_IF_HELPURL}',
    'suppressPrefixSuffix': true,
    'mutator': 'controls_if_mutator',
    'extensions': ['controls_if_tooltip'],
  },
   // If/else block that does not use a mutator.
  {
    'type': 'controls_ifelse',
     kind: "block",
    'message0': '%{BKY_CONTROLS_IF_MSG_IF} %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'IF0',
        'check': 'Boolean',
      },
    ],
    'message1': '%{BKY_CONTROLS_IF_MSG_THEN} %1',
    'args1': [
      {
        'type': 'input_statement',
        'name': 'DO0',
      },
    ],
    'message2': '%{BKY_CONTROLS_IF_MSG_ELSE} %1',
    'args2': [
      {
        'type': 'input_statement',
        'name': 'ELSE',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKYCONTROLS_IF_TOOLTIP_2}',
    'helpUrl': '%{BKY_CONTROLS_IF_HELPURL}',
    'suppressPrefixSuffix': true,
    'extensions': ['controls_if_tooltip'],
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
        
        
      ],
    }
