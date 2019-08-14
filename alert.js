//Create a function truncate(str, maxlength)
//that checks the length of the str and,
//if it exceeds maxlength – replaces the end of str
//with the ellipsis character "…", to make its length equal to maxlength.

function truncate(str, maxlength) {
  if(str.length < maxlength) {
    return str
  } else {
    return str.slice(0, maxlength - 3) + "..."
  }
}

alert(truncate("I wish I were a little bit taller", 10))
