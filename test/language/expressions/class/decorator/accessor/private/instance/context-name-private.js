// This file was procedurally generated from the following sources:
// - src/decorator/context-name-private.case
// - src/decorator/accessors/standard/private/instance/cls-expr.template
/*---
description: Context name is correct for all types of private elements (private acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.name, "#element");
}


var C = class {
  @dec
  accessor #element;

  getElement() {
    return this.#element;
  }

  setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = new C();


