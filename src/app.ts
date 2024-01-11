console.log('---------------------------------------------------------------');

let a: Number | string = 5;

enum Talla {XS, S, M, L, XL};

interface personas {
    name: string,
    age: number,
    hobbies: string[],
    role: [Number, string],
    medida: Talla
}
const person: personas = {
    name: 'Ico',
    age: 88,
    hobbies: ['musica', 'deporte'],
    role: [2, 'autor'],
    medida: Talla.L
}


let person2: personas ={
    name: 'Juan',
    age: 88,
    hobbies: ['musica', 'deporte'],
    role: [2, 'autor'],
    medida: Talla.L
}

const hobbies = ['cocinar', 'bici', 'dibujar','deporte', 'pintura'];
let hobbies2: string[] = [];
hobbies2.push(...hobbies);

person2 = person;
person2 = {...person};

const  {name, age} = {...person};
console.log(name);




let var1: unknown;
let var2: any;
let var3: string;

var1 = "casa";
var2 = "calle";



 
const [h1,h2,h3, ...resto]=[...hobbies];
console.log(h1, h2, h3);
console.log(resto)

const suma = (...numbers: number[]) =>
{
    return numbers.reduce( (currentRes, currentVal) =>
    {
        return currentRes + currentVal
    }
    )
}

console.log(suma(12,12,33,34));

