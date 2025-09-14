//Declaration of object

const student = {
    name: 'JAB',
    roll: 12,
    class: 9,
    friends: ['sumayia', 'mina', 'rina', 'milon', 'emon', 'hasmon' ]
}

console.log(student); //output: {name: 'JAB', roll: 12, class: 9, friends: [ 'sumayia', 'mina', 'rina', 'milon', 'emon', 'hasmon' ]}

//how to access a property from Obj.

// this is call dot notation
const name = student.name;
console.log(name); //output: JAB;


//brackets notation

const friends = student['friends']; 
console.log(friends); //output: [ 'sumayia', 'mina', 'rina', 'milon', 'emon', 'hasmon' ]