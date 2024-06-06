// This file was procedurally generated from the following sources:
// - src/decorator/getter-deco-returns-undefined.case
// - src/decorator/getters/standard/public/static/cls-decl.template
/*---
description: Decorator undefined return defaults to previous value (public static getter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec1(value, context) {
  return function() {
    assert.sameValue(value.call(this), 123);

    return 456;
  };
}

function dec2() {}


class C {
  static internalValue = 123;

  @dec2 @dec1

  static get element() {
    return this.internalValue;
  }

  static getElement() {
    return this.element;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), 456);
