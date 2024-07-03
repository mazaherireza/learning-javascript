// Sequence generator function (range)
const range = (start, end, step) =>
  Array.from(
    { length: (end - start) / step + 1 },
    // mapFn
    (_, index) => start + index * step
  );

export { range };
