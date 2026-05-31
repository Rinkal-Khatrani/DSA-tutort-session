class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap = (height: number[]): number => {
    let p1 = 0;
    let p2 = height.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let water = 0;

    while (p1 < p2) {
      if (height[p1] < height[p2]) {
        if (height[p1] >= maxLeft) {
          maxLeft = height[p1]; // new left wall found
        } else {
          water += maxLeft - height[p1]; // trap water
        }
        p1++;
      } else {
        if (height[p2] >= maxRight) {
          maxRight = height[p2]; // new right wall found
        } else {
          water += maxRight - height[p2]; // trap water
        }
        p2--;
      }
    }

    return water;
  };
}

// Tests
const solution = new Solution();
console.log(solution.trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(solution.trap([4, 2, 0, 3, 2, 5])); // 9
