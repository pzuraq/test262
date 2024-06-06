// This file was procedurally generated from the following sources:
// - src/decorator/setter-deco-returns-replacement.case
// - src/decorator/setters/standard/private/instance/cls-expr.template
/*---
description: Can replace a decorated setter with a new setter (private setter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec(set, context) {
  return function (v) {
    assert.sameValue(v, 456);
    set.call(this, 789);
  };
}

var C = class {
  internalValue = 123;

  @dec

  set #element(value) {
    this.internalValue = value;
  }

  getElement() {
    return this.internalValue;
  }

  setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), 123);
classOrInstance.setElement(456);
assert.sameValue(classOrInstance.getElement(), 789);
