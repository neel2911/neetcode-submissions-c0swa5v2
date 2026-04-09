class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i = 0; i < matrix.length; i++) {
            let l = 0;
            let r = matrix[i].length - 1;
            const row = matrix[i];
            while(l <= r) {
                const m = Math.floor((l + r) / 2);
                if(target < row[m]) {
                    r = m - 1;
                } else if (target > row[m]) {
                    l = m + 1;
                } else {
                    return true;
                }
            }
        }

        return false;
    }
}
