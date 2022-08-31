function install () {
  /* eslint-disable */
  Object.prototype.tap = function (callback) {
    if (typeof callback === "function") {
      callback(this)
    }
    return this
  }
  /* eslint-enable */
}

export default { install }
export { install }
