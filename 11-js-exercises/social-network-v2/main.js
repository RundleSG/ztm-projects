var database = [
    {
        username: "Rundle",
        password: "Tacos"
    },
    {
        username: "Bob",
        pasword: "777"
    },
    {
        username: "Fred",
        pasword: "888"
    }
    
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "Was a really long day"
    },
    {
        username: "Sally",
        timeline: "Today was a really good day"
    }
];

var userNamePrompt = prompt("What is your usename?");
var passwordPrompt = prompt("What is your password?");


function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true; //function exits here
        } 
    }
    return false; // if the conditions arent met, return false;
}

function logIn(username, password) {
    console.log(isUserValid(username, password)); // On login, pass parameters to isUserValid
    if (isUserValid(username,password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password.");
    }
}

logIn(userNamePrompt, passwordPrompt);