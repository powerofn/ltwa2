export const gL = {
  percentLogic: function (amount, discount){
    let a = (amount * discount)/100;
    let b = amount-a;
    return b;
  },

  string2Number: function (val){
    return val * 1;
  },


};
