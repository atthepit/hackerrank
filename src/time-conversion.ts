function zeropad(n: number): string {
  return ("0" + n).substring(-2);
}

function timeConversion(s: string): string {
  // Write your code here
  let hours = Number(s.substring(0, 2));
  const format = s.substring(-2);
  const rest = s.substring(2, s.length - 4);

  if (format == "PM" && hours < 12) {
    hours += 12; //< Avoid adding 12 hours to 12PM
  } else if (format == "AM" && hours == 12) {
    hours = 0; //< Format 12AM as 00
  }

  return zeropad(hours) + rest;
}

export default timeConversion;
