import { Mongo } from "meteor/mongo";

import { SimpleSchema } from "meteor/aldeed:simple-schema";


export default Uso = new Mongo.Collection("uso");

Uso.schema = new SimpleSchema({ 

  xml: {
    type: String,
    optional: true
  },    
   experienciaId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
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

Uso.helpers({
  narrativax() {   
    return ExperienciasC4.findOne(this.experienciaId).narrativa;
  }
  
});

Uso.attachSchema(Uso.schema);
