import * as fs from "fs";
var data = fs.readFileSync("../../inputs/day3.txt", "utf8");
let lines = data.split("\n");
var sum: number = 0;
var s1: string;
var s2: string;
var s3: string;
for (let line = 0; line < lines.length; line += 3) {
  s1 = lines[line];
  s2 = lines[line + 1];
  s3 = lines[line + 2];
  loop1: for (let i = 0; i < s1.length; i++) {
    loop2: for (let j = 0; j < s2.length; j++) {
      if (s1.charAt(i) == s2.charAt(j)) {
        for (let k = 0; k < s3.length; k++) {
          if (s2.charAt(j) == s3.charAt(k)) {
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
  }
}
console.log(sum);
