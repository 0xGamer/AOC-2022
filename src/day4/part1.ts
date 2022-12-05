import * as fs from "fs";
var data = fs.readFileSync("../../inputs/day4.txt", "utf8");
let lines = data.split("\n");
var sum: number = 0;
var lim: string[];
var l1: string[];
var l2: string[];
for (let line in lines) {
  lim = lines[line].replace("\r", "").split(",");

  l1 = lim[0].split("-");
  if (parseInt(l1[0]) > parseInt(l1[1])) {
    let temp = l1[0];
    l1[0] = l1[1];
    l1[1] = temp;
  }

  l2 = lim[1].split("-");

  if (parseInt(l2[0]) > parseInt(l2[1])) {
    let temp = l2[0];
    l2[0] = l2[1];
    l2[1] = temp;
  }
  if (parseInt(l1[1]) - parseInt(l1[0]) > parseInt(l2[1]) - parseInt(l2[0])) {
    if (
      parseInt(l2[0]) >= parseInt(l1[0]) &&
      parseInt(l2[1]) <= parseInt(l1[1])
    ) {
      sum++;
    }
  } else if (
    parseInt(l1[1]) - parseInt(l1[0]) <
    parseInt(l2[1]) - parseInt(l2[0])
  ) {
    if (
      parseInt(l1[0]) >= parseInt(l2[0]) &&
      parseInt(l1[1]) <= parseInt(l2[1])
    ) {
      sum++;
    }
  } else if (
    parseInt(l1[0]) == parseInt(l2[0]) &&
    parseInt(l1[1]) == parseInt(l2[1])
  ) {
    sum++;
  }
}
console.log(sum);
