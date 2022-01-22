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


const BotonBackC4 = ({experiencia}) => {
    const history = useHistory();

    const handleClick = () => {
    
        history.push("/home");
    }

    return (
        <div>
            <Button content='Salir' icon='arrow left' labelPosition='right' color="teal" onClick={handleClick}/>
            
        </div>
    );
}

export default BotonBackC4;