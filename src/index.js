function install () {
  Object.prototype.tap = function (callback) {
    if (callback) {
      callback(this)
    }
    return this
  }
}

export default { install }
export { install }
