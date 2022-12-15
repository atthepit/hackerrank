function miniMaxSum(arr: number[]): void {
  const results = [] as number[];

  for (var i = 0; i < arr.length; i++) {
    let res = 0;
    for (var j = 0; j < arr.length; j++) {
      const curr = arr[j];
      if (i != j && curr != null) {
        res += curr;
      }
    }
    results.push(res);
  }

  const max = Math.max(...results);
  const min = Math.min(...results);

  process.stdout.write(min + " " + max);
}

export default miniMaxSum;
