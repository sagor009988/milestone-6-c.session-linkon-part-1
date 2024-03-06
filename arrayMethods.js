// map,forEach,fin,filter/////Reduce///

// normal for use
// const array=[2,4,6,8,9];

// for(let i=0;i<array.length; i++){
//     console.log(array[i]);
// }

// for(let p of array){
//     console.log(p);
// }


// forEach
// const arry=['chil','dil','mil'];
// arry.forEach(element => {
//     console.log(element);
// });

// forEach calculation;

// const myArry=[2,3,5];
// let sum=0;
//  myArry.forEach(item=>sum +=item)
//  console.log(sum);


// //forEach and map has three parameters 1.element,2index.3main array
// const fruits=['mango','Tango','chingo'];
// fruits.forEach((p,index,Array)=>console.log(p,index,Array))


//map has three parameters, map has return value .and value is a new array ///


// const nameA=['mehmed','mostofa','sohel'];
// const map=nameA.map((p,inx)=>console.log(p,inx))

//find method return match first one value

// const nameA=['mehmed','mostofa','sohel','mostofa','mostofa'];
// const find=nameA.find(p=>p==='mostofa');
// console.log(find); //'mostofa'

// filter=== filter retun the match all value in an array

// const nameA=['mehmed','mostofa','sohel','mostofa','mostofa'];
// const filter=nameA.filter(p=>p==='mostofa')

// // if need one by one then
// for(let a of filter){
//     console.log(a);
// }


// console.log(filter);


// reduce method; for adding
 const array=[2,3,4,5];

//  const result=array.reduce((pre,curr)=>pre+curr)
//  const result=array.reduce((pre,curr)=>pre+curr,0) //same result will provide 

//  console.log(result);

 //multi korle previous 1 dite hobe

 const multi=array.reduce((pre,curr)=>pre*curr,1);
 console.log(multi);


