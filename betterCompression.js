function betterCompression(s) {
  let str = s.split("");
  let mapArr = [];
  for (let i = 0; i < 26; i++) {
    mapArr.push(0);
  }
  //console.log("mapArr: ", mapArr);
  let i = 0;
  let n = s.length;
  while (i < n) {
    let ch = str[i];
    if (ch >= "a" && ch <= "z") {
      let start = i + 1;
      let end = start;
      while (end < n && str[end] >= "0" && str[end] <= "9") {
        end++;
      }

      let count = parseInt(s.substring(start, end));
      console.log(`count for ${ch}: ${count}`);

      mapArr[ch.charCodeAt(0) - "a".charCodeAt(0)] += count;
      i = end;
    } else {
      i++;
    }
  }

  let sb = "";
  for (let ascii = 97; ascii <= 122; ascii++) {
    let ch = String.fromCharCode(ascii);
    let baseascii = ascii - 97;
    if (mapArr[baseascii] > 0) {
      sb = sb.concat(ch);
      sb = sb.concat(mapArr[baseascii]);
    }
  }
  console.log("sb: ", sb);
  return sb;
}

let answer = betterCompression("a12b2c3a1");
console.log(answer);
