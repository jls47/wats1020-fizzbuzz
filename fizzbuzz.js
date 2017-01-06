// Place your FizzBuzz code here. 
var fizzBuzz = function(){
	//establishes the fizzbuzz code as a function that can be used in other objects or functions
	for (var i = 1; i <= 20; i++){
		//i starts at 0, adds up to 20 in increments of 1
		if((i % 3 === 0) && (i % 5 === 0)){
			//if i is divisible by 3 and 5 at the same time (priority):
			console.log("Fizzbuzz");
			document.write("Fizzbuzz ");
		}else if(i % 3 === 0){
			//or if i is only divisible by 3
			console.log("Fizz");
			document.write("Fizz ");
		}else if(i % 5 === 0){
			//or if i is only divisible by 5
			console.log("Buzz");
			document.write("Buzz ");
		}else{
			//or if i does not fit any of the above criteria
			console.log(i);
			document.write(i + " ");
		}
	}
};

fizzBuzz();
//runs the function!  Takes no inputs.
