const array=[3,4,5,6,7];

//array destructuring serial maintain kore; have to remainder

const [a,b,c]=array
console.log(a,b,c);

// also spreading
const [x,y,z,...rest]=array;
console.log(x,y,z,rest);