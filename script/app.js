function ArrayMethods() {
	let array = [];
	let mainArray = [];
	for(let i = 1; i <= 100; i++) {
		array.push(i);
	}
	console.log(array);
	mainArray = array.map( function (item) { 
		return item * 3;
	});
	console.log(mainArray);
}
ArrayMethods();

function userSurvey() {
	let userAsk = true;
	let answers = [];
	for (let i = 0;true; i++) {
		userAsk = prompt('Enter something');
		if ( userAsk !== null && userAsk !== "") {
			answers.push(userAsk)
		};
		if (userAsk === null || userAsk === "") {
			answers.pop();
		};
		console.log(answers);
	}
}
userSurvey();

