export function tap<T, U extends (val: T) => unknown> (returnVal: T, callback: U): T;
