import React, { Component} from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import MiBloqueColab from "./MiBloqueColab.jsx";
import { withTracker } from "meteor/react-meteor-data";
import { BlocklyWorkspace } from 'react-blockly';
import {experienciaArreglo} from "./experienciasArreglo"
import {toolbar} from "./toolbar"
import Experiencias from "/imports/api/experiencias.js";
import { insertExperiencia } from "/api/methods.js";
import BotonRedirect from "./BotonRedirect"
import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import LoaderExampleText from "/imports/ui/Dashboard/LoaderExampleText.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {
  Icon,
  Label,
  Statistic,
  Menu,
  Table,
  Segment,
  List,
  Button,
  Divider,
  Form,
  Grid,
  Dropdown,
  Modal,
  Header
} from "semantic-ui-react";

//const App = () => (

class Colaborativo extends Component {

  constructor(props) {
    super(props);   
    //console.log("prooooops "+this.props.Experiencia)
     
      this.state = {
      openWorkspace:true,
      //experiencia:this.props.Experiencia.codigo,            
      //objetivo: experienciaArreglo[this.props.Experiencia.codigo].objetivo,
      //narrativa: experienciaArreglo[this.props.Experiencia.codigo].narrativa,
    //  experiencia:1,  
     // objetivo: "sadfasdf",
     // narrativa: "xxxxxxxxxxxxxxx",
      demo: false,
      share: false,
      esColab:true

    };
  }




  renderModal(){
    return(
      <Modal
      onClose={() => this.setState({openWorkspace:false})}
      onOpen={() => this.setState({openWorkspace:true}) }
      open={this.state.openWorkspace}
      //trigger={<Button>Show Modal</Button>}
      size="fullscreen"
    >
      <Modal.Header>
      <Header as='h3'>
        <Icon name='bullseye' />
        <Header.Content>
          {experienciaArreglo[this.props.Experiencia.codigo].objetivo}
          <Header.Subheader>{experienciaArreglo[this.props.Experiencia.codigo].narrativa}</Header.Subheader>
        </Header.Content>
      </Header>
      </Modal.Header>
      <Modal.Content image>

        <Modal.Description>
            <MiBloqueColab  laExp={this.props.Experiencia} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='violet' onClick={() => this.close()}>
          Salir
        </Button>
        
      </Modal.Actions>
    </Modal>
    )
  }
  



  render() {
    
    if (this.props.isLoading) {
      return <LoaderExampleText />;
    }
    return this.renderModal();
  }
}

export default withTracker(
  () => {   
    let { id } = useParams();  

  console.log(id)

    const handles = [
      Meteor.subscribe(
        "experienciaOne",
        id
      )
    ];

    const loading = handles.some(handle => !handle.ready());
    

      
      var laExp = Experiencias.findOne(id)      
      if (!loading) console.log(laExp)
    

    return {
      isLoading: loading,
      Experiencia: laExp
    };
  }
)(Colaborativo);
