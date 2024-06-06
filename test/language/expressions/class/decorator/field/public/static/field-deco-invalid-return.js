// This file was procedurally generated from the following sources:
// - src/decorator/field-deco-invalid-return.case
// - src/decorator/fields/error/public/static/cls-expr.template
/*---
description: Decorator can't return an invalid value (public static field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
flags: [generated]
---*/


function dec(value) {
  return 123;
}


function evaluate() {
  var C = class {
    @dec

    static element;
  }
}

assert.throws(TypeError, evaluate);
