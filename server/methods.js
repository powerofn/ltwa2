import { Mongo } from 'meteor/mongo';



export const inv_coll = new Mongo.Collection('invoice');

Meteor.methods({
  'saveInvoice'(x_val){
    console.log(x_val);
    inv_coll.insert(x_val);
  }
});
