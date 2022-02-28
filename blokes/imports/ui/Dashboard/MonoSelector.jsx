import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import Experiencia from "./experiencia.jsx";
import { withTracker } from "meteor/react-meteor-data";
import BarraEstadoPublica from "./BarraEstadoPublica.jsx";
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
      open:false, setOpen:true, experiencia:1, activeItem:""
    };
  }


//handleItemClick = (e, { name }) => this.setState({ activeItem: name })
handleItemClick(id) {  
  this.setState({ experiencia: id })
}

renderMenu(){return(

  <Menu vertical>

        <Menu.Item>




          <Menu.Header>SECUENCIAS</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='1.1 Zombies en el parque'
              active={this.state.experiencia === 1}
              onClick={() =>
                this.handleItemClick(1)
              }
            />
            <Menu.Item
              name='1.2 Zombies en el parque - Operando'                          
              active={this.state.experiencia === 2}
              onClick={() =>                
                this.handleItemClick(2)
              }
            />
               <Menu.Item
              name='1.3 El extraño caso de las manzanas'                          
              active={this.state.experiencia === 5}
              onClick={() =>                
                this.handleItemClick(5)
              }
            />
          
          </Menu.Menu>
        
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>ALTERNATIVAS SIMPLE</Menu.Header>

          <Menu.Menu>
           <Menu.Item
              name='2.1 Ataque marciano! '        
              active={this.state.experiencia === 3}                  
              onClick={() =>                
                this.handleItemClick(3)
              }
            />
            
            <Menu.Item
              name='2.2 La fiesta de cumpleaños'                          
              active={this.state.experiencia === 4}
              onClick={() =>                
                this.handleItemClick(4)
              }
            />
            <Menu.Item
              name='2.3 El inspector de Unicornios'                          
              active={this.state.experiencia === 6}
              onClick={() =>                
                this.handleItemClick(6)
              }
            />
            
            
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>ALTERNATIVAS</Menu.Header>

          <Menu.Menu>
          <Menu.Item
              name='3.1 La fiesta de cumpleaños'  
              active={this.state.experiencia === 7}                        
              onClick={() =>                
                this.handleItemClick(7)
              }
            />
            
            <Menu.Item
              name='3.2  Ataque marciano!'         
              active={this.state.experiencia === 8}                 
              onClick={() =>                
                this.handleItemClick(8)
              }
            />
            <Menu.Item
              name='3.3 El inspector de Unicornios'                          
              active={this.state.experiencia === 9}
              onClick={() =>                
                this.handleItemClick(9)
              }
            />
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>MODULOS</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='4.1 El mensaje secreto'
              active={this.state.experiencia === 10}
              onClick={() =>                
                this.handleItemClick(10)}
            />
                        <Menu.Item
              name='4.2 Las monedas de chocolate'
              active={this.state.experiencia === 11}
              onClick={() =>                
                this.handleItemClick(11)}
            />
         
          </Menu.Menu>
        </Menu.Item>
<Menu.Item>
          <Menu.Header>REPETITIVAS</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='5.1 Contando las porciones de torta'
              active={this.state.experiencia === 12}
              onClick={() =>                
                this.handleItemClick(12)}
            />
                    
         
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
   <div
      style={{ backgroundColor: "#EEFAFA", width: "100%", height: "100%" }}
      >
  
  <BarraEstadoPublica />

<Grid>


  <Grid.Row>
        
        <Grid.Column width={3}>
              {this.renderMenu()}
        </Grid.Column>
        <Grid.Column width={11}>
              <Experiencia experiencia={this.state.experiencia}/>
        </Grid.Column>
  </Grid.Row>
</Grid>
</div>
      );

  }
}
