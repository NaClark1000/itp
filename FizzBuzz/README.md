# FizzBuzz

I began by creating a for loop that increments by 1 for integers 1 to 100.

	for (let count = 1; count <= 100; count++) {
	
	console.log(count);
	}

Then added `if` statements for the numbers divisible by 3 and 5. 

	if (count % 3 === 0){
	
		console.log("Fizz")
		
	}
	
	 if (count % 5 === 0) {
		 
		 console.log("Buzz")}

But this didn't replace the integer in the list, just added "Fizz" or "Buzz" after it.

I corrected this by using `else` and `else if` statements for multiple conditions. 

	for (let count = 1; count <= 100; count++) {
	
	if (count % 3 === 0) {
		
		console.log("Fizz")
		
	}   else if (count % 5 === 0) {
		
		 console.log("Buzz")}
		 
        else {
			
        console.log(count);
		
        } 
	}	

  
Now the numbers that are undivisible by 3 or 5 go to the else statement and print the value of `count`.

I added another statement for numbers divisible by 3 and 5.

	for (let count = 1; count <= 100; count++) {
	
	if (count % 3 === 0 && count % 5 === 0) {
		
		console.log("FizzBuzz")
		
    }   else if (count % 3 === 0) {
		
		console.log("Fizz")
		
	}   else if (count % 5 === 0) {
		
		 console.log("Buzz")}
		 
        else {
			
        console.log(count);
		
        } 
	}	
  
  