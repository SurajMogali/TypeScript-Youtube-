"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 1;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUpUser("Suraj", "suraj@gmail.com", false);
loginUser("Tejas", "Tejas@gmail.com");
console.log(addTwo(5));
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
//const heros =[1,2,3]
heros.map(function (hero) {
    return 'hero is ${hero}';
});
