import { Mongo } from "meteor/mongo";

import { SimpleSchema } from "meteor/aldeed:simple-schema";

export default Experiencias = new Mongo.Collection("experiencias");

Experiencias.schema = new SimpleSchema({
  codigo: {
    type: Number
  },
  xml: {
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


Experiencias.attachSchema(Experiencias.schema);
