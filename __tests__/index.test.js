import { install } from "../src/index"
import { assert } from "@open-wc/testing"

describe("tap()", () => {
  beforeEach(() => install())
  it("Should return self", () => {
    const str = "yo"
    const div = document.createElement("div").tap((el) => {
      el.prop = str
    })

    assert(div.prop === str)
  })

  it("Should work in complex scenarios", () => {
    "1,2,3,4,5,6,7,8,9,10"                      .tap((x) => assert.equal(x, "1,2,3,4,5,6,7,8,9,10"))
      .split(`,`).map(Number)                   .tap((x) => assert.deepEqual(x, [1,2,3,4,5,6,7,8,9,10]))
      .filter ((x) => x % 2 == 0)               .tap((x) => assert.deepEqual(x, [2,4,6,8,10]))
      .map ((x) => x*x)                         .tap((x) => assert.deepEqual(x, [4, 16, 36, 64, 100]))
  })
})
