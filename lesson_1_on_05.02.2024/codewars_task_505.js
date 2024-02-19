export function compose(...args) {
  return function inner(a) {
    return args.reduceRight((acc, func) => func(acc), a);
  };
}
