// This file was procedurally generated from the following sources:
// - src/class-fields/computed-names.case
// - src/class-fields/default/cls-decl-after-same-line-static-async-gen.template
/*---
description: Computed property names (field definitions after a static async generator in the same line)
esid: prod-FieldDefinition
features: [computed-property-names, class-fields, async-iteration]
flags: [generated, async]
includes: [propertyHelper.js]
info: |
    ClassElement:
      ...
      FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PropertyName

---*/
var x = "b";



class C {
  static async *m() { return 42; } static ["a"] = 39; [x] = 42; [10] = "meep"; ["not initialized"];

}

var c = new C();

assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);
assert.sameValue(Object.hasOwnProperty.call(C.prototype, "m"), false);

verifyProperty(C, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
}, {restore: true});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "a"), false);
assert.sameValue(Object.hasOwnProperty.call(c, "a"), false);

verifyProperty(C, "a", {
  value: 39,
  enumerable: true,
  writable: true,
  configurable: true
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "b"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "b"), false);

verifyProperty(c, "b", {
  value: 42,
  enumerable: true,
  writable: true,
  configurable: true
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "x"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "x"), false);
assert.sameValue(Object.hasOwnProperty.call(c, "x"), false);

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "10"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "10"), false);

verifyProperty(c, "10", {
  value: "meep",
  enumerable: true,
  writable: true,
  configurable: true
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "not initialized"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "not initialized"), false);

verifyProperty(c, "not initialized", {
  value: undefined,
  enumerable: true,
  writable: true,
  configurable: true
});

C.m().next().then(function(v) {
  assert.sameValue(v.value, 42);
  assert.sameValue(v.done, true);
}, $DONE).then($DONE, $DONE);
