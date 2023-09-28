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
	
  if (typeof num !== "number" || num < 0 || num > 100000) {
    return ;
  }

  let romanNumeral = "";

  for (let i = 0; i < 7; i++) {
	  
    while (num >= obj[i][1]) {
		
      romanNumeral += obj[i][0];
		
      num -= obj[i][1];
		
    }

    // Check for subtractive notation (e.g., IV for 4 or IX for 9)
    if (i % 2 == 0 && i < 6) {
		
      const nextValue = obj[i + 2][1];
      if (num >= obj[i][1] - nextValue) {
        romanNumeral += obj[i + 2][0] + obj[i][0];
        num -= obj[i][1] - nextValue;
      }
		
    }
  }

  return romanNumeral;

}

module.exports = convertToRoman
