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


const BotonSolucionC4 = ({experiencia}) => {
    const history = useHistory();

    const handleClick = () => {
    console.log("experiencia "+experiencia)
    history.push("/solucionc4/"+experiencia);
    }

    return (
        
            <Button content='Ver' icon='play' labelPosition='right' color="teal" onClick={handleClick}/>                        
    );
}

export default BotonSolucionC4;