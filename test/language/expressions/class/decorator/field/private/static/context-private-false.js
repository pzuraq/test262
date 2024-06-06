// This file was procedurally generated from the following sources:
// - src/decorator/context-private-false.case
// - src/decorator/fields/standard/private/static/cls-expr.template
/*---
description: Context `private` is true for all types of private elements (private static field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.private, true);
}


var C = class {
  @dec
  static #element;

  static getElement() {
    return this.#element;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;


