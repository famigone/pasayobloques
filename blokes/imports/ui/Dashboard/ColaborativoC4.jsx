import React, { Component} from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import MiBloqueColabC4 from "./MiBloqueColabC4.jsx";
import { withTracker } from "meteor/react-meteor-data";
import { BlocklyWorkspace } from 'react-blockly';
import {experienciaArreglo} from "./experienciasArreglo"
import {toolbar} from "./toolbar"
import Experiencias from "/imports/api/experiencias.js";
import { insertExperiencia } from "/api/methods.js";

import BotonBackC4 from "./BotonBackC4"
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

class ColaborativoC4 extends Component {

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
      esColab:true, 
      hidden: true

    };
  }


handleClose(){    
  this.setState({hidden:true})
  history.push("/home");
}



  renderModal(){
    return(
    <Segment raised>
      <Header as='h3'>
        <Icon name='bullseye' />
        <Header.Content>
          {this.props.laExp.narrativa}
          <Header.Subheader>{this.props.laExp.objetivo}</Header.Subheader>
        </Header.Content>
      </Header>
     

      
            <MiBloqueColabC4   laExp={this.props.laExp} elUso = {this.props.elUso} demo={false}/>
      
      
   
        
    </Segment>  
    
    )
  }
  



  render() {
    //console.log(this.props.elUso)  
    if (this.props.isLoading ) {
      return <LoaderExampleText />;
    }else{
      //console.log("chigazo: "+this.props.laExp._id)
      return this.renderModal();
    }  
  }
}

export default withTracker(() => {   
    let { id } = useParams();  
    const handles = [Meteor.subscribe("uso", id),];
    const loading = handles.some(handle => !handle.ready());  
    var loadingExp= true;
    var laExp;
    elUso = Uso.findOne(id)      
    if (!loading) {
      const handlesExp = [Meteor.subscribe("experienciasC4One", elUso.experienciaId),];
      loadingExp = handlesExp.some(handlesExp => !handlesExp.ready());
      laExp = ExperienciasC4.findOne(elUso.experienciaId)      
    }  
    return {
      isLoading: loadingExp,
      laExp: laExp,
      elUso: elUso
    };
  }
)(ColaborativoC4);
