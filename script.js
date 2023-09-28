function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
let result = '';

     for (let i = 0; i <= 6; i += 2) {
        const [symbol1, value1] = obj[i];
        const [symbol2, value2] = obj[i - 1];

        const digit = Math.floor(num / value1);
        num %= value1;

        if (digit === 9) {
            result += symbol2 + symbol1;
        } else if (digit >= 5) {
            result += symbol1;
            for (let j = 0; j < digit - 5; j++) {
                result += symbol2;
            }
        } else if (digit === 4) {
            result += symbol2 + symbol1;
        } else {
            for (let j = 0; j < digit; j++) {
                result += symbol1;
            }
        }
    }

    return result;
}
module.exports = convertToRoman
