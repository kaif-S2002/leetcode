/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) {
        return false;
    }
    const n = x;
    let stringyNum = 0;
    while(x > 0) {
        const temp = x % 10;
        x = Math.floor(x/10);
        stringyNum = stringyNum * 10 + temp;
    }
    return n === stringyNum;
};