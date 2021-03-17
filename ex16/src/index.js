function checkSign(num) {
    return (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";

}

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));
module.exports = checkSign;