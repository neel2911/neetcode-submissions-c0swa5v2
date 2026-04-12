class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let start = 1;
        let end = 1;
        let result = 1;
        // Find max
        for(let pile of piles) {
            if(end < pile) {
                end = pile;
            }
        }

        while(start <= end) {
            const midK = start + Math.floor((end - start) / 2);
            let totalTime = 0;
            for(let i = 0; i < piles.length; i++) {
                const time = Math.ceil(piles[i] / midK);
                totalTime += time;
            }

            if(totalTime <= h) {
                result = midK;
                end = midK - 1;
            } else {
                start = midK + 1;
            }
        }

        return result;
    }
}
