import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import MiBloque from "./MiBloque.jsx";
import { withTracker } from "meteor/react-meteor-data";
import { updateLocacion } from "/api/methods.js";
import { BlocklyWorkspace } from 'react-blockly';
import Alert from "react-s-alert";
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
  Grid,
  Dropdown,
  Modal,
  Header
} from "semantic-ui-react";

//const App = () => (

export default class Experiencia extends Component {
  render() {

      return (
        <Segment.Group raised>
        <Segment >
          <Message
   icon='star outline'
   header='Have you heard about our mailing list?'
   content='Get the best news in your e-mail every day.'
 />
        </Segment>
        <Segment>
          <Button content='Resolver' icon='up arrow' labelPosition='right' color="violet"/>
        </Segment>
        <Segment>
          <MiBloque/>
        </Segment>
      </Segment.Group>
      );
    }
  }
