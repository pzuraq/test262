// This file was procedurally generated from the following sources:
// - src/decorator/context-name-public.case
// - src/decorator/fields/standard/public/static/cls-decl.template
/*---
description: Context name is correct for all types of public elements (public static field decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.name, "element");
}


class C {
  @dec
  static element;

  static getElement() {
    return this.element;
  }

  static setElement(value) {
    this.element = value;
  }
}

var classOrInstance = C;


