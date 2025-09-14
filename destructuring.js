// how to array and object destructuring. 

const numbers = [12, 22, 35, 54]

// array destructuring
const [first, second, third] = numbers;

console.log(first, second, third);

// if is only destructuring middle number

const [,element, ] = numbers;

console.log(element);


// object destructuring

const student = {
    name: 'JAB',
    roll: 12,
    class: 9,
    friends: ['sumayia', 'mina', 'rina', 'milon', 'emon', 'hasmon' ]
}

const {name, friends} = student;

console.log(name, friends[0]);