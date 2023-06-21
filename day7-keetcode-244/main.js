// Find Smallest Letter Greater Then Target

// letters = ["c","f","j"] , target = "a"

var nextGreatestLetter = function (letters, target) {
  let left = 0,
    right = letters.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) left = mid + 1;
    else right = mid - 1;
  }
  return left == letters.length ? letters[0] : letters[left];
};

console.log(nextGreatestLetter(["a", "b", "c", "d", "e", "f"], "c"));
