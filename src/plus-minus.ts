function decimalpad(howMany: number, num: number): string {
  let str = num + "";
  if (!str.includes(".")) {
    str = str + ".";
  }

  const zeroesToInsert = howMany - str.length;

  if (zeroesToInsert > 0) {
    str = str + "0".repeat(zeroesToInsert);
  } else if (zeroesToInsert < 0) {
    // num has more decimal positions than we need
    str = str.substring(0, howMany); //< trim the str from the right
  }

  return str;
}

const decimalpad6 = decimalpad.bind(null, 8); //< 6 decimal positions + "0."

function writeline(str: string): void {
  process.stdout.write(str + "\n");
}

function plusMinus(arr: number[]): void {
  const total = arr.length;
  let pos = 0;
  let neg = 0;
  let zero = 0;

  for (let i = 0; i < total; ++i) {
    const curr = arr[i];
    if (curr < 0) neg++;
    else if (curr > 0) pos++;
    else zero++;
  }

  writeline(decimalpad6(pos / total));
  writeline(decimalpad6(neg / total));
  writeline(decimalpad6(zero / total));
}

export default plusMinus;
