// This file was procedurally generated from the following sources:
// - src/class-fields/private-names.case
// - src/class-fields/default/cls-expr-after-same-line-async-gen.template
/*---
description: static literal private names (field definitions after an async generator in the same line)
esid: prod-FieldDefinition
features: [class-fields, async-iteration]
flags: [generated, async]
info: |
    ClassElement:
      ...
      FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PrivateName

    PrivateName:
      #IdentifierName

---*/


var C = class {
  async *m() { return 42; } #x; #y;
x() {
    this.#x = 42;
    return this.#x;
  }
  y() {
    this.#y = 43;
    return this.#y;
  }
}

var c = new C();

assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);
assert.sameValue(c.m, C.prototype.m);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
}, {restore: true});

// Test the private fields do not appear as properties before set to value
assert.sameValue(Object.hasOwnProperty.call(C.prototype, "#x"), false, "test 1");
assert.sameValue(Object.hasOwnProperty.call(C, "#x"), false, "test 2");
assert.sameValue(Object.hasOwnProperty.call(c, "#x"), false, "test 3");

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "#y"), false, "test 4");
assert.sameValue(Object.hasOwnProperty.call(C, "#y"), false, "test 5");
assert.sameValue(Object.hasOwnProperty.call(c, "#y"), false, "test 6");

// Test if private fields can be sucessfully accessed and set to value
assert.sameValue(c.x(), 42, "test 7");
assert.sameValue(c.y(), 43, "test 8");

// Test the private fields do not appear as properties before after set to value
assert.sameValue(Object.hasOwnProperty.call(c, "#x"), false, "test 9");
assert.sameValue(Object.hasOwnProperty.call(c, "#y"), false, "test 10");

c.m().next().then(function(v) {
  assert.sameValue(v.value, 42);
  assert.sameValue(v.done, true);
}, $DONE).then($DONE, $DONE);
