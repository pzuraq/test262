// This file was procedurally generated from the following sources:
// - src/decorator/context-access-set.case
// - src/decorator/fields/with-init/public/static/cls-expr.template
/*---
description: Context access `get` works on all gettable types of values (public static with initializer field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
}


var C = class {
  @dec

  static element = 123
;

  static getElement() {
    return this.element;
  }

  static setElement(value) {
    this.element = value;
  }
}

var classOrInstance = C;

access.set(classOrInstance, 456);
assert.sameValue(classOrInstance.getElement(), 456);
