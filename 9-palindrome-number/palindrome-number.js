/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) {
        return false;
    }

    const stringyNum = "" + x;
    let backStr = "";
    for(let i=stringyNum.length-1; i>=0; i--){
       backStr+=stringyNum[i]
    }

    return backStr === stringyNum;
};