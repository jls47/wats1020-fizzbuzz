// Place your FizzBuzz code here. 
var fizzBuzz = function(){
	for (var i = 0; i <= 20; i++){
		if(i % 3 === 0){
			console.log("Fizz");
		}else if(i % 5 === 0){
			console.log("Buzz");
		}else if(i % 3 === 0 && i % 5 === 0){
			console.log("Fizzbuzz");
		}else{
			console.log(i);
		}
	}
};

fizzBuzz();
