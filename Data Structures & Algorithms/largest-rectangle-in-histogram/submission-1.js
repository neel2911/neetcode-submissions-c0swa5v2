class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxArea = 0;
        for(let i = 0; i < heights.length; i++) {
            const currentHeight = heights[i];
            let position = i
            while(stack.length > 0 && currentHeight < stack[stack.length - 1].height) {
                const lastBar = stack.pop();
                position = lastBar.position;
                maxArea = Math.max(maxArea, lastBar.height * (i - lastBar.position));
            }

            stack.push({ 
                position, 
                height: currentHeight
            });
        }

        while(stack.length > 0) {
            const lastBar = stack.pop();
            maxArea = Math.max(maxArea, lastBar.height * (heights.length - lastBar.position));
        }

        return maxArea;
    }
}
