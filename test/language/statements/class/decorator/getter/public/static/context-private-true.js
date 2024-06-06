// This file was procedurally generated from the following sources:
// - src/decorator/context-private-true.case
// - src/decorator/getters/standard/public/static/cls-decl.template
/*---
description: Context `private` is false for all types of public elements (public static getter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.private, false);
}


class C {
  static internalValue = 123;

  @dec
  static get element() {
    return this.internalValue;
  }

  static getElement() {
    return this.element;
  }
}

var classOrInstance = C;


