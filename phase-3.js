const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  let results = [];
  for (let i = 1; i <= 10; i++) {
    console.time();
    results.push(addNums(i*increment));
    console.timeEnd();
  }
  return results;

}


function addManyNums10Timing(increment) {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    console.time();
    result.push(addManyNums(i*increment));
    console.timeEnd();
  }
  return result;
}


// n = 1000000
// console.log(`addNums(${n}): `);
// startTime = Date.now();
// addNums10Timing(1000000);
// endTime = Date.now();
// console.log(`Runtime: ${endTime - startTime}ms`);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
startTime = Date.now();
addManyNums10Timing(5000);
endTime = Date.now();
console.log(`Runtime: ${endTime - startTime}ms`);
