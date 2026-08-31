class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sStore = new Map();
        const tStore = new Map();

        if (s.length !== t.length) {
            return false;
        }

        for (let item of s) {
            
                sStore.set(item, (sStore.get(item) ?? 0) + 1);
            
        }

        for (let item of t) {
            tStore.set(item, (tStore.get(item) ?? 0) + 1);
        }
        console.log({ sStore });
        console.log({ tStore });
        for (let [key, value] of sStore) {
            if (tStore.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
}
