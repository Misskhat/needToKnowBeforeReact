const number = 30;

if(number >= 20 || number < 25){
    // basically || this is or operator, if any of value match the condition will be true otherwise it will be false.
    console.log(true);
}else{
    console.log(false);
}

//output: true; because one condition true that's why it console the true.


if(number >= 20 && number < 25){
    // basically && this is and operator, it must be full fill the both condition.
    console.log(true);
}else{
    console.log(false);
}

//output: false; because both condition not meet that's why it console the false.