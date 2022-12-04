import * as fs from "fs";
var data = fs.readFileSync("../inputs/day1.txt", "utf8");
let lines = data.split("\n");
var max: number = 0,
  sum: number = 0;
for (let line in lines) {
  if (lines[line].trim().length == 0) {
    if (sum > max) {
      max = sum;
    }
    sum = 0;
  } else {
    sum += parseInt(lines[line]);
  }
}
console.log(max);
