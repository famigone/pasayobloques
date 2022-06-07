import Blockly from 'node-blockly/browser';
import BlocklyDrawer, { Block, Category, Shadow, Field, Value } from 'react-blockly-drawer';
import React from 'react';

const ToolbarSecuencial = () => {
    return (

 <BlocklyDrawer
      tools={[]}
      onChange={(code, workspace) => {
        console.log(code, workspace);
      }}
      language={Blockly.JavaScript}
      appearance={{}}
    >
      <Category colour="blue" name="Variables" custom="VARIABLE"/>
      <Category name="Mensajes" colour="blue">
        <Block type="text_print"/>
        <Block type="math_number" />
        <Block type="text"/>
        <Block type="text_prompt_ext"/>
      </Category>
    </BlocklyDrawer>


    );
}

export default ToolbarSecuencial	;
