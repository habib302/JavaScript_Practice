//scenario 1
// console.log(a);   

//output:  ReferencError

//scenario 2
//console.log(a);
//var a="Bangladesh";


//output:  undefined

//scenario 3
//console.log(a);
//let a="Bangladesh";


//output:  ReferencError


//scenario 4
//var a;
//console.log(a);

//output:  undefined


//scenario 5
// let a;
// console.log(a);

//output: undefined

//scenario 6
function hoist(){
  a=20;
  var b=100;
}

hoist();

console.log(a);   //output:20
console.log(b);   //


