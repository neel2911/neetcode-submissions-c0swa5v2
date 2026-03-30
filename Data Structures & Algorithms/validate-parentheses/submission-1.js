class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const brackets = {
            ')' : '(',
            '}' : '{',
            ']' : '[',
        }

        const stack = [];
        for(let i of s) {
            if(brackets[i]) {
                const item = stack.pop();

               if(item != brackets[i]) {
                    return false;
               }
            } else {
                stack.push(i);
            }
        }

        return stack.length == 0;
    }
}
