class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let start = 0;
        let end = nums.length - 1;

        while(start <= end) {
            if(nums[start] <= nums[end]){
                return nums[start];
            }

            const mid = start + Math.floor((end - start) / 2);
            const next = (mid + 1) % nums.length;
            const prev = ((mid + nums.length) - 1) % nums.length;

            if(nums[mid] <= nums[prev] && nums[mid] <= nums[next]){
                return nums[mid];
            } else if (nums[start] <= nums[mid]) { 
                start = mid + 1;
            } else if (nums[mid] < nums[end]) {
                end = mid - 1;
            }
        }
    }
}
