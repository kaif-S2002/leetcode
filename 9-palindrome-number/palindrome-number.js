/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) {
        return false;
    }

    const stringyNum = "" + x;
    let ind = 0;
    for(let i=stringyNum.length-1; i>=0; i--){
        
        if(stringyNum[i] !== stringyNum[ind]) {
            return false
        }
        ind++;

    }
    return true;
};