//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

//The function must be case-insensitive:

function checkSpam(str) {
  let lowStr = str.toLowercase();
  let upStr = str.toUpperCase();

  return true if(lowStr.includes("viagra") || upStr.includes("XXX"));

}

alert(checkSpam("VIAGRA"))
