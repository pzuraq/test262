// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-invalid-return-get.case
// - src/decorator/accessors/error/private/instance/cls-decl.template
/*---
description: Accessor decorator cannot return invalid getter (private acessor decorator evaluation error in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec() {
  return {
    get: 123
  };
}


function evaluate() {
  class C {
    @dec

    accessor #element;
  }
}

assert.throws(TypeError, evaluate);
