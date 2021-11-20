import { Mongo } from "meteor/mongo";

import { SimpleSchema } from "meteor/aldeed:simple-schema";

export default Respuesta = new Mongo.Collection("experiencia");

Experiencia.schema = new SimpleSchema({
  experienciaid: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  }, //idContacto
  //entidad, alternativa, etc
  tipo: {
    type: String
  },
  narrativa: {
    type: String
  },
  activo: {
    type: Boolean
  }, //borrado lógico
  createdBy: {
    type: String,
    optional: true,
    autoValue: function() {
      return this.userId;
    }
  },
  createdAt: {
    type: Date,
    optional: true,
    autoValue: function() {
      return new Date();
    }
  }
});

Respuesta.helpers({
  userName() {
    return ContactoPregunta.findOne(this.contactopreguntaid).userName();
  },
  pregunta() {
    return ContactoPregunta.findOne(this.contactopreguntaid).texto;
  },
  momento() {
    return ContactoPregunta.findOne(this.contactopreguntaid).momento;
  },
  seccion() {
    return ContactoPregunta.findOne(this.contactopreguntaid).seccion;
  },
  fechaProto() {
    return ContactoPregunta.findOne(this.contactopreguntaid).fechaProto();
  },
  numero() {
    return ContactoPregunta.findOne(this.contactopreguntaid).numero();
  },
  tipo() {
    return ContactoPregunta.findOne(this.contactopreguntaid).tipox();
  },
  activox() {
    return ContactoPregunta.findOne(this.contactopreguntaid).activo;
  },
  contactoActivo() {
    return ContactoPregunta.findOne(this.contactopreguntaid).contactoActivo();
  }
});

Experiencia.attachSchema(Experiencia.schema);
