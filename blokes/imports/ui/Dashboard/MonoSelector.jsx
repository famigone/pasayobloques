import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import Experiencia from "./experiencia.jsx";
import { withTracker } from "meteor/react-meteor-data";

import Alert from "react-s-alert";
import {
  Link
} from "react-router-dom";
import {
  Icon,
  Label,
  Menu,
  Message,
  Table,
  Segment,
  Button,
  Divider,
  Container,
  Form,
  Card,
  Grid,
  Image,
  Dropdown,
  Modal,
  Header
} from "semantic-ui-react";

//const App = () => (

export default class MonoSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open:false, setOpen:true, experiencia:0, activeItem:""
    };
  }


//handleItemClick = (e, { name }) => this.setState({ activeItem: name })
handleItemClick(id) {
  this.setState({ experiencia: id })
}

renderMenu(){return(

  <Menu vertical>

        <Menu.Item>




          <Menu.Header>ENTIDADES</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='enterprise'
              active={this.state.activeItem === 'enterprise'}

              onClick={() =>
                this.handleItemClick(1)
              }
            />
            <Menu.Item
              name='Actividad 1'
              as={Link}
              to="/experiencia01"
              onClick={this.handleItemClick}

            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>OPERACIONES</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='rails'
              active={this.state.activeItem === 'rails'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='python'
              active={this.state.activeItem === 'python'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='php'
              active={this.state.activeItem === 'php'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>ALTERNATIVA SIMPLE</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='shared'
              active={this.state.activeItem === 'shared'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='dedicated'
              active={this.state.activeItem === 'dedicated'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='email'
              active={this.state.activeItem === 'email'}
              onClick={this.handleItemClick}
            >
              E-mail Support
            </Menu.Item>

            <Menu.Item
              name='faq'
              active={this.state.activeItem === 'faq'}
              onClick={this.handleItemClick}
            >
              FAQs
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
)}

renderIntro(){
  return(
    <Segment fluid raised>
    <Grid>
    <Grid.Column width={2}>

         <Image src='/img/pasayo_bloques.png'  />

    </Grid.Column>
    <Grid.Column width={13}>
      <Header
    as='h2'
    content='PASAYO BLOQUES'
    subheader='Un lugar para aprender a construir programas'
  />
    </Grid.Column>
    </Grid>
    </Segment>
  )
}

getContentView() {
  return this.props.children;
}
render() {





return (
<Grid>
  <Grid.Row >
    <Grid.Column width={1}></Grid.Column>
    <Grid.Column width={14}>
        {this.renderIntro()}
    </Grid.Column>
  </Grid.Row>
  <Grid.Row>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={3}>
              {this.renderMenu()}
        </Grid.Column>
        <Grid.Column width={11}>
              <Experiencia experiencia={this.state.experiencia}/>
        </Grid.Column>
  </Grid.Row>
</Grid>
      );

  }
}
