import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { inv_coll } from '../imports/collections/collections.js';

Meteor.publish('inv_doc',function(){
  return inv_coll.find({},{fields:{k_amt:1,k_dis:1,k_tot:1,k_des:1}})
})
