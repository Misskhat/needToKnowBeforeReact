// map, filter, find, forEach

// map => return an new array.

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((num, index, array) => {
   return `${index} index number is ${num} after double value is: ${num * 2} and hole array numbers are ${array}`;
});
console.log(double);


const mobileInfo = [
    {name: 'realme 8', brand: 'realme', price: 5000},
    {name: 'poco', brand: 'xiami', price: 3000},
    {name: 'apple 17 pro max', brand: 'apple', price: 18000},
    {name: 's8', brand: 'samsung', price: 15000}
]

// forEach => not return any array

mobileInfo.forEach((mobile)=> {
const price = mobile.price;
    console.log(price);
})


// filter => return a conditional all array & object;

const mobilePrice = mobileInfo.filter((mobile) => {
    if(mobile.price < 10000)
    return mobile
})

console.log(mobilePrice);

// find => return a conditional one array & object 

const findFirst13KMobile = mobileInfo.find((mobile) => {
    if(mobile.price > 13000){
        return mobile
    }
})

console.log(findFirst13KMobile);


