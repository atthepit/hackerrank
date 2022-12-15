function sockMerchant(n: number, ar: number[]): number {
  const count = new Map<number, number>();
  for (let i = 0; i < n; ++i) {
    const color = ar[i];
    let curr = count.get(color);
    curr = !curr ? 1 : curr + 1;
    count.set(color, curr);
  }

  let totalPairs = 0;
  const colors = count.keys();
  for (let color of colors) {
    const socks = count.get(color) as number;
    const pairs = Math.floor(socks / 2);
    totalPairs += pairs;
  }

  return totalPairs;
}

export default sockMerchant;
