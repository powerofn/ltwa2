import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const inv_coll = new Mongo.Collection('invoice');
