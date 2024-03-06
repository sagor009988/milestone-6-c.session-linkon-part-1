const person={
    name:'sohel',
    home:'dhaka'
}
const array=['bangla','english','math'];
const sentence=`
amr nam ${person.name} amr bari ${person.home} 
amr subject ${array.filter(p=>p).join('/')}
`
console.log(sentence);