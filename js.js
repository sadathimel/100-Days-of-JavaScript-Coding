// koko eating bananas problem

// Time Complexity: O(nlogn)
// Space Complexity: O(1)

// var minEatingSpeed = function (piles, H) {
//   let left = 1;
//   let right = Math.max(...piles);
//   console.log(right);
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (canEatAll(piles, mid, H)) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return left;
// };

// function canEatAll(piles, mid, H) {
//   let time = 0;
//   for (let pile of piles) {
//     time += Math.ceil(pile / mid);
//   }
//   return time <= H;
// }

// var piles = [3, 6, 7, 11, 20, 5, 9, 10];
// var H = 5;
// console.log(minEatingSpeed(piles, H));

// var minEatingSpeed = function (piles, H) {
//   let maxPile = 0;

//   for (let pile of piles) {
//     maxPile = Math.max(maxPile, pile);
//     console.log(maxPile);
//   }
//   let calcHrs = function (speed) {
//     let hrs = 0;
//     for (let pile of piles) {
//       hrs += Math.ceil(pile / speed);
//     }
//     return hrs;
//   };

//   let bs = function (left, right) {
//     while (left < right) {
//       let avgSpeed = Math.floor((left + right) / 2);
//       let hrs = calcHrs(avgSpeed);
//       if (hrs <= H) right = avgSpeed;
//       else left = avgSpeed + 1;
//     }
//     return left;
//   };
//   return bs(1, maxPile);
// };

// // var piles = [3, 6, 7, 11];
// var piles = [30,11,23,4,20]
// var H = 6;
// console.log(minEatingSpeed(piles, H));

let minEatingSpeed = function (piles, H) {
  let maxPile = 0;
  for (let pile of piles) {
    maxPile = Math.max(maxPile, pile);
  }

  let calHrs = function (speed) {
    let hrs = 0;
    for (let pile of piles) {
      hrs += Math.ceil(pile / speed);
    }
    return hrs;
  };

  let bs = function (l, r) {
    while (l < r) {
      let mid = Math.floor((l + r) / 2);
      let hrs = calHrs(mid);
      if (hrs <= H) r = mid;
      else l = mid + 1;
    }
    return l;
  };
  return bs(1, maxPile);
};

var piles = [3, 6, 7, 11];
// var piles = [30, 11, 23, 4, 20];
var H = 8;

console.log(minEatingSpeed(piles, H));
