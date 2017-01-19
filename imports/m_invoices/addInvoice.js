
// import { inv_coll } from '../collections/collections.js';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { $ } from 'meteor/jquery';
import { gL } from '../globalFunctions/globalFunction.js';
import { Mongo } from 'meteor/mongo';

import './addInvoice.html';


Template.addInvoice.onCreated (function(){
  this.autorun(()=>{this.subscribe('inv_doc')});
  this.rv_amt = new ReactiveVar(0);
  this.rv_dis = new ReactiveVar(0);
  this.rv_tot = new ReactiveVar(0);
  // this.rv_des = new ReactiveVar(0); // try this without reactive var //
});



Template.addInvoice.helpers ({
 // Template.currentData()
 // console.log(Template.currentData());
rv_tot_display(){
  return Template.instance().rv_tot.get();
}
});

Template.addInvoice.events ({
  'keyup #amt '(event, instance) {
      //  let a =document.getElementById("amt").value;
      //  let b =$("#dis").val();
      //  let c = (a*b)/100;
      //  let d = a-c;
      // console.log(event.target);
      // if(a!='' && b!=''){$("#tot").val(d)};
      instance.rv_amt.set(event.target.value);
      // let c = (instance.rv_amt.get()*instance.rv_dis.get())/100;
      // let d = instance.rv_amt.get()-c;
      let d = gL.percentLogic(instance.rv_amt.get(), instance.rv_dis.get());
      instance.rv_tot.set(d);
      console.log(instance.rv_tot.get());
     },
     'keyup #dis '(event, instance) {
         instance.rv_dis.set(event.target.value);
         let d = gL.percentLogic(instance.rv_amt.get(), instance.rv_dis.get());
         instance.rv_tot.set(d);
        },
      // 'keyup #des '(event, instance) {
      //    instance.rv_des.set(event.target.value);
      //      }, // there is no need to set if reactive var is not used

     'click #sub '(event, instance) {
      console.log(Template.instance().$('#des').val()); // jquery to line 80
       let flag = 0;
      if (Template.instance().$('#amt').val() == "") { flag = 1;
          Template.instance().$('#amt').css('border', "1px solid #ff0000")}
          else {Template.instance().$('#amt').css('border', "1px solid #000000")}
      if (Template.instance().$('#dis').val() == "") { flag = 1;
          Template.instance().$('#dis').css('border', "1px solid #ff0000")}
          else {Template.instance().$('#dis').css('border', "1px solid #000000")}
      if (Template.instance().$('#tot').val() == "") { flag = 1;
          Template.instance().$('#tot').css('border', "1px solid #ff0000")}
          else {Template.instance().$('#tot').css('border', "1px solid #000000")}
      if (Template.instance().$('#des').val() == "") { flag = 1;
          Template.instance().$('#des').css('border', "1px solid #ff0000")}
          else {Template.instance().$('#des').css('border', "1px solid #000000")}


      if (flag == 0) {
        let x = {
          k_amt:gL.string2Number(instance.rv_amt.get()),
          k_dis:gL.string2Number(instance.rv_dis.get()),
          k_tot:gL.string2Number(instance.rv_tot.get()),
          k_des:Template.instance().find('#des').value // getting value without reactive var //
        }
        // console.log(x);
        Meteor.call('saveInvoice',x,function(error) {
          if(error)
            {
          console.log(error);
          }
          else
            {
              // console.log (Template.instance().$('#amt').val() + "hi");
              FlowRouter.go('/viewinvoice');
            }
        });
        Template.instance().$('#amt').val("");
        Template.instance().$('#dis').val("");
        Template.instance().$('#tot').val("");
        Template.instance().$('#des').val("");
      }

     },
});
