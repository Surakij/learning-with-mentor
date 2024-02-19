export function smartSum(...args) {
  return args.flat(Infinity).reduce((acc, arg) => acc + arg);
}
