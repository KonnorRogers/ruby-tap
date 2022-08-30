export function tap<T, U extends (val: T) => unknown> (context: T, callback: U): T;
export function tapAsync<T, U extends (val: T) => unknown> (context: T, callback: U): Promise<T>;
