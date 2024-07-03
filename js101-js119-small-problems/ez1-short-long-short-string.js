let shortLongShort = (firstStr, secondStr) => {
  const [shortStr, longStr] = firstStr.length < secondStr.length ? 
    [firstStr, secondStr] : [secondStr, firstStr];
  return shortStr.concat(longStr, shortStr);
}

console.log(shortLongShort('abc', 'defgh'));    // abcdefghabc
console.log(shortLongShort('abcde', 'fgh'));    // fghabcdefgh
console.log(shortLongShort('', 'xyz'));         // xyz