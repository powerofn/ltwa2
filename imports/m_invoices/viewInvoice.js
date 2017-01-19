import { inv_coll } from '../collections/collections.js';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { $ } from 'meteor/jquery';
import { gL } from '../globalFunctions/globalFunction.js';
import { Mongo } from 'meteor/mongo';

import './viewInvoice.html';


Template.viewInvoice.onCreated (function(){
  this.autorun(()=>{this.subscribe('inv_doc')});
});

Template.viewInvoice.helpers({
  inv_display(){
    return inv_coll.find({},{fields:{k_amt:1,k_dis:1,k_tot:1,k_des:1}})
  }
});


Template.viewInvoice.events ({
  'click #del'(event, instance) {
    console.log(this)
    let a = this._id;
    Meteor.call('delInvoice',a,function(error) {
      if(error)
        {
      console.log(error);
      }
      else
        {
          console.log(a);
        $('#alertMsg').html(a +   "  is deleted successfully")
        }
    })
  }
});
