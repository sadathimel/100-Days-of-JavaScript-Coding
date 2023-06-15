// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

//  n = 5
// bad = 4
// arr=[1, 2 ,3 ,4, 5]

// l  = 1 r = length.arr m =l + r / 2



var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1, r = n, m;

        while (l < r) {
            m = Math.floor((l + r) / 2);
            if (isBadVersion(m)) r = m;
            else l = m + 1;
        }
        return r;
    };
};

solution(4);