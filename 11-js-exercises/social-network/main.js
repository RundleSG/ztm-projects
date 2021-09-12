var database = [
    {
        username: "Rundle",
        password: "Tacos"
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


function logIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
            console.log(newsFeed);
    } 
    else {
        alert("Sorry, wrong username or password!");
    }
}

logIn(userNamePrompt, passwordPrompt);