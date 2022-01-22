import React from 'react';
import { useHistory } from 'react-router-dom';



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
   
    history.push("/colaborativoc4/"+experiencia._id);
  }
 return (
        <div>
            
             <Button  color='teal' onClick={handleClick}>
            Compartir 
          </Button>  
        </div>
    );
}


export default BotonRedirectC4;