class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const tupleArr = []
        for(let i = 0; i < position.length; i++){
            tupleArr.push([position[i], speed[i]]);
        }

        tupleArr.sort((a, b)=> b[0] - a[0]);

        const stack = [];
        for(let i = 0; i < tupleArr.length; i++) {
            const [position, speed] = tupleArr[i];
            const time = (target - position) / speed;
            if(stack.length === 0 || stack[stack.length - 1] < time) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
