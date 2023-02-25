module.exports = function reverse (n) {

  let absolute=Math.abs(n);
  let absoluteToArr = String(absolute).split('').reverse().join('');
  let result = Number(absoluteToArr);
return result;

}





