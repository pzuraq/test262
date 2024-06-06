// This file was procedurally generated from the following sources:
// - src/decorator/context-name-public.case
// - src/decorator/methods/standard/public/static/cls-expr.template
/*---
description: Context name is correct for all types of public elements (public static method decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.name, "element");
}


var C = class {
  @dec
  static element() {
    return 123;
  }

  static getElement() {
    return this.element;
  }
}

var classOrInstance = C;


