const { arrayContaining } = require("expect");

// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Anette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    let answer = drivers.filter(el => el.toLowerCase() === string.toLowerCase());
    return answer;
}  

function fuzzyMatch(array, string) {
    return array.filter(function(el) {
        return el.startsWith(string)
    })
}

function matchName(drivers, name) {
    return drivers.filter(function(hometown)
    {
        return hometown.name === name
    })
}