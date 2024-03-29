import Pregunta from "/imports/api/pregunta.js";
import Contacto from "/imports/api/contacto.js";
import Respuesta from "/imports/api/respuesta.js";
import Regla from "/imports/api/regla.js";
import Experiencias from "/imports/api/experiencias.js";
import Interes from "/imports/api/interes.js";
import Uso from "/imports/api/uso.js";
import ExperienciasC4 from "/imports/api/experienciasC4.js";
import ReglaMultiple from "/imports/api/reglaMultiple.js";
import ReglaMultipleDetalle from "/imports/api/reglaMultipleDetalle.js";
import ContactoPregunta from "/imports/api/contactoPregunta.js";
import { Mongo } from "meteor/mongo";
import { ReactiveAggregate } from "meteor/tunguska:reactive-aggregate";

const MAX = 200;
const options = {
    sort: { createdAt: -1 },    
  };


Meteor.publish("intereses", function() {  
  let rta = Interes.find({activo:true});    
  return rta  
});


Meteor.publish("experienciasC4", function( filtroUsuario, filtroCategoria, limit, interes) {
 
    var filtros
    const options = {
      sort: { createdAt: -1 },
      limit: Math.min(limit, MAX)
    };
    if (filtroUsuario && !filtroCategoria && !interes) {
      filtros= {
        createdBy : Meteor.userId(),
        activo:true      
      }
    }
    else if (filtroUsuario && filtroCategoria && !interes) {
      filtros= {
        createdBy : Meteor.userId(),
        categoria: filtroCategoria,
        activo:true      
      }
    }
    else if (!filtroUsuario && filtroCategoria && !interes) {
      filtros= {
        categoria: filtroCategoria,
        activo:true      
      }
    }
    /////////////
    else if (filtroUsuario && !filtroCategoria && interes) {
      filtros= {
        createdBy : Meteor.userId(),
        activo:true ,
        interes: interes     
      }
    }
    else if (filtroUsuario && filtroCategoria && interes) {
      filtros= {
        createdBy : Meteor.userId(),
        categoria: filtroCategoria,
        activo:true,
        interes: interes      
      }
    }
    else if (!filtroUsuario && filtroCategoria && interes) {
      filtros= {
        categoria: filtroCategoria,
        activo:true,
        interes: interes      
      }
    }
    else{
    filtros= {     
      activo:true      
    }} 
    //console.log(filtros)
    //console.log("Meteor.user "+Meteor.userId)
    return ExperienciasC4.find(filtros, options);
  
  
});

Meteor.publish("experienciasC4One", function(id) {  
  let rta = ExperienciasC4.find({_id:id});    
  return rta
  console.log(rta)
});


Meteor.publish("uso", function(id) {  
  let rta = Uso.find({_id:id});    
  return rta
  //console.log(rta)
});

Meteor.publish("oneUser", function(id) {  
  return Meteor.users.find({_id:id});        
});

Meteor.publish("users", function() {  
  return Meteor.users.find();        
});

Meteor.publish("experienciaOne", function(id) {  
  let rta = Experiencias.find({ _id: id });  
  //console.log("zazaza "+rta)
  return rta
});

Meteor.publish("pregunta", function() {
  return Pregunta.find({ activo: true });
});


Meteor.publish("reglas", function() {
  return Regla.find(
    { activo: true },
    { sort: { tipoOrigen: 1, codigoPreguntaOrigen: 1 } }
  );
});

Meteor.publish("reglaMultiple", function() {
  return ReglaMultiple.find(
    { activo: true },
    { sort: { tipoDestino: 1, codigoPreguntaDestino: 1 } }
  );
});

Meteor.publish("reglaMultipleDetalle", function(reglaId) {
  return ReglaMultipleDetalle.find(
    {
      activo: true,
      reglaid: reglaId
    },
    { sort: { tipoOrigen: 1, codigoPreguntaOrigen: 1 } }
  );
});

Meteor.publish("reglaMultipleDetalleTodes", function() {
  return ReglaMultipleDetalle.find(
    {
      activo: true
    },
    { sort: { tipoOrigen: 1, codigoPreguntaOrigen: 1 } }
  );
});
//Meteor.publish("analisis", function(codigo) {
//  var pipeline = [
//    { $match: { codigo: codigo } },
//    { $group: { _id: "$rtatexto", total: { $sum: 1 } } },
//    { $project: { total: "$rtatexto" } },
//    { $sort: { codigo: 1 } }
//  ];
//  ReactiveAggregate(this, Respuesta, pipeline, {
//    clientCollection: "clientRespuesta"
//  });
//});

Meteor.publish("contacto", function(
  limit,
  fechaDesde,
  fechaHasta,
  usuarioid,
  codigo
) {
  const options = {
    sort: { createdAt: -1 },
    limit: Math.min(limit, MAX)
  };
  const desde = new Date(fechaDesde);
  const hasta = new Date(fechaHasta);
  //sin código, sin grupa
  if ((codigo === null || codigo === 0) &&
     (usuarioid === null || usuarioid === 0 || usuarioid === ""))
    {return Contacto.find(
      {
        activo: true,
        //createdBy: usuarioid,
        createdAt: {
          $gte: desde,
          $lte: hasta
        }
      },
      options
    );}
  //sin código, con grupa
  else if ((codigo === null || codigo === 0) &&
     !(usuarioid === null || usuarioid === 0 || usuarioid === ""))
    {return Contacto.find(
      {
        activo: true,
        createdBy: usuarioid,
        createdAt: {
          $gte: desde,
          $lte: hasta
        }
      },
      options
    );}
  //con código, sin grupa
  else  if (!(codigo === null || codigo === 0) &&
     (usuarioid === null || usuarioid === 0 || usuarioid === ""))
    {return Contacto.find(
      {
        activo: true,
        //createdBy: usuarioid,
        autonumerico: codigo
      },
      options
    );}
    //con código, con grupa
    else  if (!(codigo === null || codigo === 0) &&
       !(usuarioid === null || usuarioid === 0 || usuarioid === ""))
      {        
        return Contacto.find(
        {
          activo: true,
          createdBy: usuarioid,
          autonumerico: codigo,
        },
        options
      );}
});

Meteor.publish("contactopregunta", function(contactoid, contactopreguntaid) {
  //return ContactoPregunta.find();
  return ContactoPregunta.find({
    contactoid: contactoid,
    contactopreguntaid: contactopreguntaid,
    activo: true
  });
});

Meteor.publish("contactoOne", function(id) {
  //return ContactoPregunta.find();
  return Contacto.find({ _id: id });
});

Meteor.publish("contactopreguntatodes", function(contactoid) {
  //return ContactoPregunta.find();
  return ContactoPregunta.find({
    contactoid: contactoid
  });
});

Meteor.publish("respuesta", function(contactoid, codigo) {
  //return ContactoPregunta.find();
  return Respuesta.find({
    contactoid: contactoid,
    codigo: codigo,
    activo: true
  });
});

Meteor.publish("respuestacount", function(codigo, opcion) {
  //return ContactoPregunta.find();
  return Respuesta.find({
    rtatexto: opcion,
    codigo: codigo,
    activo: true
  });
});

Meteor.publish("respuestaOne", function(id) {
  //return ContactoPregunta.find();
  return Respuesta.find({ contactoid: id, activo: true });
});


Meteor.publish("users", function() {
  //return ContactoPregunta.find();
  return Meteor.users.find();
});
