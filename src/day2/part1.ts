import * as fs from "fs";
var data = fs.readFileSync("../../inputs/day2.txt", "utf8");
let lines = data.split("\n");
var sum: number = 0;
var r: string;
for (let line in lines) {
  switch (lines[line].charAt(0)) {
    case "A":
      switch (lines[line].charAt(2)) {
        case "X":
          sum += 3;
          sum += 1;
          break;
        case "Y":
          sum += 6;
          sum += 2;
          break;
        case "Z":
          sum += 0;
          sum += 3;
          break;
      }
      break;
    case "B":
      switch (lines[line].charAt(2)) {
        case "X":
          sum += 0;
          sum += 1;
          break;
        case "Y":
          sum += 3;
          sum += 2;
          break;
        case "Z":
          sum += 6;
          sum += 3;
          break;
      }
      break;
    case "C":
      switch (lines[line].charAt(2)) {
        case "X":
          sum += 6;
          sum += 1;
          break;
        case "Y":
          sum += 0;
          sum += 2;
          break;
        case "Z":
          sum += 3;
          sum += 3;
          break;
      }
      break;
  }
}

console.log(sum);
