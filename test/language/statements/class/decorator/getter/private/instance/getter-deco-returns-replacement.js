// This file was procedurally generated from the following sources:
// - src/decorator/getter-deco-returns-replacement.case
// - src/decorator/getters/standard/private/instance/cls-decl.template
/*---
description: Can replace a decorated getter with a new getter (private getter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec(value, context) {

  return function() {
    assert.sameValue(value.call(this), 123);

    return 456;
  };
}


class C {
  internalValue = 123;

  @dec

  get #element() {
    return this.internalValue;
  }

  getElement() {
    return this.#element;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), 456);
