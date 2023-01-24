export const getBezierBasis = (
  i: number,
  n: number,
  t: number,
) => {
  const factorial = (n: number): number => ((n <= 1) ? 1 : n * factorial(n - 1));

  return (factorial(n) / (factorial(i) * factorial(n - i))) * t ** i * (1 - t) ** (n - i);
};

export const getBezierCurve = (
  arr: number[][],
  step = 0.01,
): number[][] => {
  const res = [];

  for (let t = 0; t < 1 + step; t += step) {
    if (t > 1) {
      t = 1;
    }

    const ind: number = res.length;

    res[ind] = [0, 0];

    for (let i = 0; i < arr.length; i += 1) {
      const b = getBezierBasis(i, arr.length - 1, t);

      res[ind][0] += arr[i][0] * b;
      res[ind][1] += arr[i][1] * b;
    }
  }

  return res;
};
