// Create Array
var todoList = [
    "Clear Room",
    "Brush Teeh",
    "Walk Dog",
    "Study JavaScript"
];


// Set index 0   i=0
// if i  then amount of items in todoList.length 
// Run the block and incriment i up ++ and stop after last item in array.
for (var i=0; i < todoList.length; i++) {
    console.log(i); // Will log index of item in array
    console.log(todoList[i]); // Will log item(s) from array
    console.log(todoList[i] = todoList[i] + "!"); // Adds exclamation Mark

}


// "WHILE"
// Count upto 10
// Checks for WHILE to be true before executing
var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne ++;
} 

// Count down to 0 from 10 
var counterOne = 10;
while (counterOne > 0) {
    console.log(counterOne);
    counterOne --;
}


//"DO"
// Starts @ 10 and DO execute THEN check to see if while is still true
counterTwo = 10;
do {
    console.log(counterTwo)
    counterTwo --;
} while(counterTwo > 0);



//"FOREACH"
todoList.forEach(function(i) {
    console.log(i);
})


todoList.forEach(function (todo, i) {
    console.log(todo, i);
})


function logTodos(todo, i) {
    console.log(todo, i);
}

todoList.forEach(logTodos);