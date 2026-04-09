class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        
        const arr = matrix.flatMap(row => row);

        let l = 0;
        let r = arr.length - 1;
        while(l <= r) {
            const m = Math.floor((l + r) / 2);
            if(target < arr[m]) {
                r = m - 1;
            } else if (target > arr[m]) {
                l = m + 1;
            } else {
                return true;
            }
        }
        

        return false;
    }
}
