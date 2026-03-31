class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operation = {
            "+": (a,b)=> a + b,
            "-": (a,b)=> a - b,
            "*": (a,b)=> a * b,
            "/": (a,b)=> Math.trunc(a / b)
        }
        for(const token of tokens) {
            let currentToken = token;
            if(token in operation) {
                const op2 = stack.pop();
                const op1 = stack.pop();

                currentToken = operation[token](op1,op2)
            }
            
            stack.push(Number(currentToken))
        }

        return stack.pop();
    }
}
