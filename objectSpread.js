const person={
    name:'sohel',
    age:28,
}

// in this system 2 Values will change //person value will also change
const person2=person;
person2.address='mohishdiya'
console.log(person,person2);

// need to solve object for this reason destrcuturing will 

const person3={...person}
person3.nationality='Bangladeshi';
console.log(person3,person);
