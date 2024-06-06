// This file was procedurally generated from the following sources:
// - src/decorator/context-access-get.case
// - src/decorator/fields/with-init/private/instance/cls-decl.template
/*---
description: Context access `get` works on all gettable types of values (private field with initializer decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
}


class C {
  @dec

  #element = 123
;

  getElement() {
    return this.#element;
  }

  setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), access.get(classOrInstance));
