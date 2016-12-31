import { Mongo } from 'meteor/mongo';

import  { inv_coll} from '../imports/collections/collections.js';

Meteor.methods({
  'saveInvoice'(x_val){
    // console.log(x_val);
    inv_coll.insert(x_val);
  }
});
