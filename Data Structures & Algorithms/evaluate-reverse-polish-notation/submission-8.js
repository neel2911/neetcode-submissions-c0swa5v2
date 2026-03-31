class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for(const token of tokens) {
            let currentToken = token;
            if('+' == token) {
                const op2 = stack.pop();
                const op1 = stack.pop();
                currentToken = op1 + op2;
            } 
            if('-' == token) {
                const op2 = stack.pop();
                const op1 = stack.pop();
                currentToken = op1 - op2;
            } 
            if('*' == token) {
                const op2 = stack.pop();
                const op1 = stack.pop();
                currentToken = op1 * op2;
            } 
            if('/' == token) {
                const op2 = stack.pop();
                const op1 = stack.pop();
                currentToken = Math.trunc(op1 / op2);
            } 
            
            stack.push(Number(currentToken))
            console.log(stack);
        }

        return stack.pop();
    }
}
