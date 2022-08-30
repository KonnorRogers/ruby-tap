import { tap, tapAsync } from "../src/index"
import { assert } from "@open-wc/testing"

describe("tap()", () => {
  it("Should return self", () => {
    const str = "yo"
    const div = tap(document.createElement("div"), (el) => {
      el.prop = str
    })

    assert(div.prop === str)
  })

})

describe("tapAsync()", () => {
  it("Should work with async", async () => {
    const obj = { hi: "there" }
    await tapAsync(obj, async () => {
      await fetch("/");
      obj.blah = "foo"
    })

    assert(obj.blah === "foo")
  })
})
