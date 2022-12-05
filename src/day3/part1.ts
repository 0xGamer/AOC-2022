import * as fs from "fs";
var data = fs.readFileSync("../../inputs/day3.txt", "utf8");
let lines = data.split("\n");
var sum: number = 0;
var s1: string;
var s2: string;
for (let line in lines) {
  s1 = lines[line].slice(0, lines[line].length / 2);
  s2 = lines[line].slice(lines[line].length / 2);

  loop1: for (let i = 0; i < s1.length; i++) {
    loop2: for (let j = 0; j < s2.length; j++) {
      if (s1.charAt(i) == s2.charAt(j)) {
        if (s1.charAt(i) === s1.charAt(i).toUpperCase()) {
          sum += s1.charCodeAt(i) - 38;
        } else {
          sum += s1.charCodeAt(i) - 96;
        }
        break loop1;
      }
    }
  }
}
console.log(sum);