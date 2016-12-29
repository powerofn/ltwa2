import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { $ } from 'meteor/jquery';
import { gL } from './globalFunction.js';
import { Mongo } from 'meteor/mongo';
import './main.html';
// import '../methods.js';
// import './methods.js';



// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });


Template.addInvoice.onCreated (function(){
  this.rv_amt = new ReactiveVar(0);
  this.rv_dis = new ReactiveVar(0);
  this.rv_tot = new ReactiveVar(0);
  this.rv_des = new ReactiveVar(0);
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
      'keyup #des '(event, instance) {
         instance.rv_des.set(event.target.value);
           },

     'click #sub '(event, instance) {
        let x = {
          k_amt:instance.rv_amt.get(),
          k_dis:instance.rv_dis.get(),
          k_tot:instance.rv_tot.get(),
          k_des:instance.rv_des.get()
        }
        console.log(x);
        Meteor.call('saveInvoice',x,function(error) {
          if(error)
            {
          console.log(error);
          }
          else
            {
              console.log('hi');
            }
        });
     },
});
