import React from 'react';
import { useHistory } from 'react-router-dom';
import { insertUso } from "/api/methods.js";


import {
  Icon,
  Label,
  Menu,
  Message,
  Table,
  Segment,
    Confirm,
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


const BotonRedirectC4 = ({experiencia}) => {
   const history = useHistory();
  const handleClick = () => {
   const uso = {experienciaId: experiencia._id,
                xml:"_"            
    }
    //console.log("XML "+exp.xml)
    
    const id = insertUso.call(uso, (err, res) => {
        if (err) {
          console.log(err);
        }
      });
    history.push("/colaborativoc4/"+id);
  }
 return (
        <div>
            
             <Button  content='Experimentar' labelPosition='right' color='teal' icon='gamepad' onClick={handleClick}/>          
          
        </div>
    );
}


export default BotonRedirectC4;