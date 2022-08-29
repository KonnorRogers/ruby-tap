/**
 * @type {import("./index").tap}
 */
export function tap (returnVal, callback) {
  callback(returnVal)
  return returnVal
}
