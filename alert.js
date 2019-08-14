//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

//The function must be case-insensitive:

function checkSpam(str) {
  let lowStr = str.toLowercase();

  return (lowStr.includes("viagra") || upStr.includes("XXX"));

}

alert(checkSpam("VIAGRA"))

/*function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
