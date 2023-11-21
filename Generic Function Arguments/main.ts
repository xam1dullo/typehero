export const identity = <T>(val: T) => val;
export const mapArray = <T, U>(arr: T[], fn: (val: T) => U) => arr.map(fn);
