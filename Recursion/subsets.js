const subsets = (nums) => {
    const res = [];
    const len = nums.length;
    const subset = [];
    const dfs  = (nth) => {
        res.push([...subset]);
        for (let i = nth; i < len; i++) {
            // 包含当前数
            subset.push(nums[i]); 
            dfs(i + 1);
            // 这是不包含该数的情况
            subset.pop();
        }
    }
    dfs(0);
    return res;
}

console.log(subsets([1,2,3]));