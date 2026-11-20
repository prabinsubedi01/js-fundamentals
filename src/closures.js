export function makeCounter(start = 0) {
  let count = start;

  return {
    inc: () => ++count,
    dec: () => --count,

    get value() {
      return count;
    }
  };
}

export function memoize(fn) {
  const cache = new Map();

  return (arg) => {
    if (cache.has(arg)) {
      return cache.get(arg);
    }

    const result = fn(arg);
    cache.set(arg, result);

    return result;
  };
}