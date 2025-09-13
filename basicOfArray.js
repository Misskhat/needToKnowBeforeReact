const friends = ['shipon', 'humayon', 'osman', 'namjul', 'omar'];

console.log(friends); //output: [ 'shipon', 'humayon', 'osman', 'namjul', 'omar' ]

//call the name through index number;

console.log(friends[2]); // output: osman

//how to add new friend with this array end

friends.push('dinIslam');

console.log(friends); //output: [ 'shipon', 'humayon', 'osman', 'namjul', 'omar', 'dinIslam' ]

//how to remove friend from friends array end;

const dinIslam = friends.pop();

console.log(friends); //output: [ 'shipon', 'humayon', 'osman', 'namjul', 'omar' ]


//how to add friend with this array first

friends.unshift('hero');

console.log(friends); //output: [ 'hero', 'shipon', 'humayon', 'osman', 'namjul', 'omar' ]

//how to remove friend with this array first;

const hero = friends.shift();

console.log(friends); //output: [ 'shipon', 'humayon', 'osman', 'namjul', 'omar' ]


//how to use slice method and create new array;

// const newFriends = friends.slice(0, 4); // from 0 index to before 4 index (0 to 3);

// console.log(newFriends); //output: [ 'shipon', 'humayon', 'osman', 'namjul' ]

//how to use splice method and create new array;

const newFriends2 = friends.splice(0, 2) //from 0 index to 2 index (0 to 2);

console.log(newFriends2);
