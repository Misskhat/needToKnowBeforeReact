const friends = ['shipon', 'humayon', 'osman', 'namjul', 'omar'];

// if we use for loops the we easily access each of element from friends array.

for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log(element); //output: shipon /n humayon /n osman /n namjul /n omar
}

// also we use while loop to access element

let index = 0;
while (index < friends.length) {
    const element = friends[index];
    index++
    console.log(element); //output: shipon /n humayon /n osman /n namjul /n omar
}

// for..of loops (mostly used in array) and this is latest

for (const friend of friends) {
    console.log(friend); //output: shipon /n humayon /n osman /n namjul /n omar
}

// for..in loops (mostly used in object) and this is latest

for (const key in friends) {
    console.log(friends[key]); //output: shipon /n humayon /n osman /n namjul /n omar
    
}
