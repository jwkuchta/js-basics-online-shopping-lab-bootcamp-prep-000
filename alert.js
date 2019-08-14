let str = "as sly as a fox, as strong as an ox";

let pos = 0;
let target = "as";

while(~str.indexOf(target, pos)) {
  let found = str.indexOf(target, pos);
  alert(`${found}`);

  pos = found + 1;
}
