let age = prompt("How old are you?!", "33");
alert(`You entered "${age}".`);

age = +age; // Or Number(age)

alert(`Type of age is: ${typeof age}`);

/* 
Browser's Console
> Number("JS")
< NaN <-------------------- Not a Number
*/

/*
String(13) <------------------ "13"
Boolean("") <------------- false
Boolean("Develop") <------------ true
*/
