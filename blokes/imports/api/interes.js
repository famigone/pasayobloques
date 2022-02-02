import { Mongo } from "meteor/mongo";

import { SimpleSchema } from "meteor/aldeed:simple-schema";

export default Interes = new Mongo.Collection("interes");

Interes.schema = new SimpleSchema({
  descripcion: {
    type: String
  },  
   activo: {
    type: Boolean,
    optional: true
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


Interes.attachSchema(Interes.schema);
