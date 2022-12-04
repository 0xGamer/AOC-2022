import * as fs from "fs";
var data = fs.readFileSync("../inputs/day1.txt", "utf8");
let lines = data.split("\n");
var max1: number = 0,
  max2: number = 0,
  max3: number = 0,
  sum: number = 0;
for (let line in lines) {
  if (lines[line].trim().length == 0) {
    if (sum > max1) {
      max3 = max2;
      max2 = max1;
      max1 = sum;
    } else if (sum > max2) {
      max3 = max2;
      max2 = sum;
    } else if (sum > max3 && sum < max2) max3 = sum;
    sum = 0;
    continue;
  }
  sum = sum + parseInt(lines[line]);
}
console.log(max1 + max2 + max3);
