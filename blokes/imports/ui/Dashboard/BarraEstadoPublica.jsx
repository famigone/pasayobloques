import React, { Component } from "react";
import { Icon, Input, Menu, Container, Image } from "semantic-ui-react";
import { Session } from "meteor/session";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";

export default class BarraEstadoPublica extends Component {
  state = { activeItem: "home", dl_id: Session.get("dl") };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleItemAsset = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  handleDl = (e, { dl_id }) => {
    this.setState({ dl_id: dl_id });
  };
  handleItemLogout = (e, { name }) => {
    this.setState({ activeItem: name });
    Meteor.logout();
  };
  handleItemUsuarios = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;

    return (
      <Menu  >
        <Menu.Item
          as={Link}
          to="/experiencia"
          onClick={this.handleItemClick}
        >
          {/*<Image centered size="tiny" src="/img/ripioh_white.png" />*/}
          <Image src='/img/pasayo_bloques.png'  size="small"/>
        </Menu.Item>
                <Menu.Item as={Link} to="/experiencia" onClick={this.handleItemClick}>
          <b>SECUENCIAS PROPUESTAS</b>
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/home"
          onClick={this.handleItemClick}
        >
          <b>COMUNIDAD</b>
        </Menu.Item>

       


        <Menu.Menu position="right">



        <Menu.Item
          
        >
        <Image src='/img/c4.png'  size="tiny"/>
          <b>COMUNIDAD</b>
        </Menu.Item>


          
        </Menu.Menu>
      </Menu>
    );
  }
}
