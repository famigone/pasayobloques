import { Meteor } from "meteor/meteor";

import "/api/methods.js";
import "../imports/api/experiencias.js";
import "../imports/api/interes.js";
import "../imports/api/uso.js";
import "../imports/api/experienciasC4.js";
import "/api/server/publications.js";


Meteor.startup(() => {
  //let server = Meteor.settings.mqttHost;

  //  Events.mqttConnect(server, ["nivel/+"], { insert: true });

  /**
   * Timestamp the data
   */ Accounts._options.forbidClientAccountCreation = false;

  // If the Links collection is empty, add some data.
});
