# Fahrenheit to Celsius Converter

I first wanted the f (Fahrenheit) variable to be assigned to 99.

`let f=99;`

I then pasted the equation  to convert Fahrenheit to Celsius and set that to variable c.

Celsius = (Fahrenheit - 32) 5 / 9

`const c = (f-32) 5/9;`

I used `const` because the formula to convert Fahrenheit to Celsius is constant.  I used `let` for variable f because  the Fahrenheit value is modifiable.

I then asked to print c (Celsius)

`console.log(c);`

I got a SyntaxError: Unexpected number.  I thought this may have came from the absence of a multiplication (*) sign for (f-32) and (5/9).  So, I added it and tried it again.

`let f = 99;
const c = (f-32)*5/9;
console.log(c);`

This returned the correct conversion.

I then found I could shorten the code by one line by printing and assigning variable c in one line.

`let f = 99;
console.log(c = (f-32)*5/9);`

###Conclusion
In conclusion, I found that by instead of letting the order of operations do its thing in the code, I could instead force it to work and include parentheses and multiplication signs wherever possible in order to minimize syntax errors.