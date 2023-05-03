/**
 * 1. Pixel To Number
 * - Given a string pixel, get number unit
 *
 * - Example 1
 * + s = "12px"
 * + result = 12
 *
 * - Example 2
 * + s = ""
 * + result = 0
 *
 * - Example 3
 * + s = "12345px"
 * + result = 12345
 *
 *
 *
 */

/**
 *
 * @param {String} s
 */
function pixelToNumber(s) {
  let number = 0;

  for (let i = 0; i <= s.length - 1 - 1 - 1; ++i) {
    number = number * 10 + +s[i];
  }

  return number;
}

function test1() {
  const s = "12px";
  const result = pixelToNumber(s);
  console.log(result);
}

function test2() {
  const s = "";
  const result = pixelToNumber(s);
  console.log(result);
}

function test3() {
  const s = "12345px";
  const result = pixelToNumber(s);
  console.log(result);
}

{
  test1();
  test2();
  test3();
}
