class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        if(!matrix || matrix.length == 0) return false;

        const ROWS = matrix.length;
        const COLUMNS = matrix[0].length;         

        let l = 0;
        let r = (ROWS * COLUMNS) - 1;

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            const row = Math.floor(m / COLUMNS);
            const column = m % COLUMNS;
            const midValue = matrix[row][column];
            if(target < midValue) {
                r = m - 1;
            } else if(target > midValue){
                l = m + 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
