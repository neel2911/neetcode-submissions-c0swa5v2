class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mapStore = new Map();

        for(let item of nums) {
            if(mapStore.get(item)) {
                return true
            }
            mapStore.set(item, true)
        }

        return false
    }
}
