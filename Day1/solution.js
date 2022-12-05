let data = require("fs").readFileSync("./input.txt", { encoding: "utf-8" }).trim();
let lines = data.split(/\n/).map(Number);

let all_elf_cals = []
let current_elf_cals = []

for(let line of lines) {
    if(line === 0) {
        all_elf_cals.push(current_elf_cals)
        current_elf_cals = []
    }
    current_elf_cals.push(line)
}
all_elf_cals.push(current_elf_cals)
let all_elf_total_cals = all_elf_cals.map(x => x.reduce((partialSum, a) => partialSum + a, 0))
all_elf_total_cals = all_elf_total_cals.sort(function (a, b) {  return a - b;  }).reverse()
console.log(all_elf_total_cals.slice(0, 3).reduce((partialSum, x) => partialSum + x))
