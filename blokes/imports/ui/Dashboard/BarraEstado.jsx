import React, { Component } from "react";
import { Icon, Input, Menu, Container, Image } from "semantic-ui-react";
import { Session } from "meteor/session";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";

export default class MenuExampleSecondary extends Component {
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
      <Menu inverted color="teal">
        <Menu.Item
          as={Link}
          to="/selector"
          onClick={this.handleItemClick}
        >
          {/*<Image centered size="tiny" src="/img/ripioh_white.png" />*/}
          <b>PASAYO BLOQUES</b>
        </Menu.Item>
        <Menu.Item

        >


        </Menu.Item>

        <Menu.Item as={Link} to="/secuencias" onClick={this.handleItemClick}>
          <b>SECUENCIAS PROPUESTAS</b>
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/selector"
          onClick={this.handleItemClick}
        >
          <b>COMUNIDAD</b>
        </Menu.Item>


        <Menu.Menu position="right">





          {Meteor.user().username === "admin" ? (
            <Menu.Item
              name="users"
              as={Link}
              to="/descargar"
              active={activeItem === "map"}
              onClick={this.handleItemMap}
            >
              <Icon name="cloud download" />
            </Menu.Item>
          ) : null}

          {Meteor.user().username === "admin" ? (
            <Menu.Item
              name="users"
              as={Link}
              to="/usuarios"
              active={activeItem === "map"}
              onClick={this.handleItemMap}
            >
              <Icon name="users" />
            </Menu.Item>
          ) : null}
          {Meteor.user().username === "admin" ? (
            <Menu.Item
              as={Link}
              to="/listadoconsultas"
              onClick={this.handleItemClick}
            >
              <Icon name="th list" />
            </Menu.Item>
          ) : null}


          <Menu.Item
            active={activeItem === "Logout"}
            as={Link}
            to="#"
            onClick={this.handleItemLogout}
          >
            Salir
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
