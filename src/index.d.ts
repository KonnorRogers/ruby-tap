interface Object {
  tap<T, U extends (val: T) => unknown>(this: T, callback: U):  T;
}
