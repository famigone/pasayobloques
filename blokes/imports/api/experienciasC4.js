import { Mongo } from "meteor/mongo";

import { SimpleSchema } from "meteor/aldeed:simple-schema";

export default ExperienciasC4 = new Mongo.Collection("experienciasC4");

ExperienciasC4.schema = new SimpleSchema({ 

  xml: {
    type: String
  },
  narrativa: {
    type: String
  },
  categoria: {
    type: String
  },
  interes: {
    type: String
  },
  objetivo: {
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


ExperienciasC4.attachSchema(ExperienciasC4.schema);
