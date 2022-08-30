/**
 * @type {import("./index").tap}
 */
export function tap (context, callback) {
  callback(context)
  return context
}

/**
 * @type {import("./index").tapAsync}
 */
export async function tapAsync (context, callback) {
  await callback(context)
  return context
}

export default {
  tap,
  tapAsync
}
