class MinStack {
    stack = [];
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {

        const minSoFar = this.stack[this.stack.length - 1]?.min

        this.stack.push({
            val,
            min: minSoFar < val ? minSoFar : val 
        })
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].val
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min
    }
}
