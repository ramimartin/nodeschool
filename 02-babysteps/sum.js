var numbers = process.argv.slice(2,process.argv.length);
//console.log(numbers);
var sum = 0;
for (var i = 0;i< numbers.length;i++){
  sum = sum + Number(numbers[i]);
}
console.log(sum);
