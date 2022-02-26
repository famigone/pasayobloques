import React from 'react';
import { useHistory } from 'react-router-dom';
import Experiencias from "/imports/api/experiencias.js";
import { insertExperiencia } from "/api/methods.js";

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


const BotonSolucion = ({experiencia}) => {
    const history = useHistory();

    const handleClick = () => {
    console.log("experiencia "+experiencia)
    const exp = {codigo: experiencia,
                  xml:"_",
                  activo:true
    }
    //console.log("XML "+exp.xml)
    solucion = true
    const id = insertExperiencia.call(exp, (err, res) => {
        if (err) {
          console.log(err);
        }
      });
        history.push("/solucion/"+id);
    }

    return (
        <div>
            <Button content='Solucion' icon='play' labelPosition='right' color="teal" onClick={handleClick}/>            
        </div>
    );
}

export default BotonSolucion;