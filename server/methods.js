import { Mongo } from 'meteor/mongo';
import { Check } from 'meteor/check';

import  { inv_coll} from '../imports/collections/collections.js';

Meteor.methods({
  'saveInvoice'(x_val){
    // console.log(x_val);
    check(x_val,{
      k_amt:Number,
      k_dis:Number,
      k_tot:Number,
      k_des:String
    })
    inv_coll.insert(x_val);
  },

  'delInvoice'(id_val){
    inv_coll.remove({
      _id:id_val
    })
  }

});
