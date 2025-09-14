// how to create JSON data

const student = {
    name: 'JAB',
    roll: 12,
    class: 9,
    friends: ['sumayia', 'mina', 'rina', 'milon', 'emon', 'hasmon' ]
}

const studentJSON = JSON.stringify(student);

console.log(studentJSON);

// how to create JSON data to object

const studentParse = JSON.parse(studentJSON);

console.log(studentParse);

// how to use fetch

const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(res => res.json())
.then(data => console.log(data));

// another method

const loadData = async () =>{
    const url = 'https://jsonplaceholder.typicode.com/users'
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

loadData()
