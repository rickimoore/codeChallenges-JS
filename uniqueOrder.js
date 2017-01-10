/*

Implement the function unique_in_order 
which takes a sequence and returns 
a list of items without any elements 
with the same value next to each 
other and preserving the 
original order of 
elements.

*/

var uniqueInOrder=function(iterable){
var list;

if(typeof iterable == 'string'){
  list = iterable.split("");
} else {
  list = iterable;
}
  var order = [];
  var stage = '';
  
  for(var i = 0; i < list.length; i++){
    if(list[i] != stage){
      order.push(list[i]);
    }
    stage = list[i];
  }
  
  return order;
}