// This file was procedurally generated from the following sources:
// - src/decorator/context-name-private.case
// - src/decorator/getters/standard/private/instance/cls-decl.template
/*---
description: Context name is correct for all types of private elements (private getter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.name, "#element");
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


