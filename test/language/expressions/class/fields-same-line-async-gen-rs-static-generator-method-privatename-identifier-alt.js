// This file was procedurally generated from the following sources:
// - src/class-fields/rs-static-generator-method-privatename-identifier-alt.case
// - src/class-fields/productions/cls-expr-after-same-line-async-gen.template
/*---
description: Valid Static GeneratorMethod PrivateName (field definitions after an async generator in the same line)
esid: prod-FieldDefinition
features: [class-static-methods-private, class, class-fields-public, async-iteration]
flags: [generated, async]
includes: [propertyHelper.js]
info: |
    
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      static FieldDefinition ;
      ;

    MethodDefinition :
      GeneratorMethod

    GeneratorMethod :
      * ClassElementName ( UniqueFormalParameters ){ GeneratorBody }

    ClassElementName :
      PropertyName
      PrivateName

    PrivateName ::
      # IdentifierName

    IdentifierName ::
      IdentifierStart
      IdentifierName IdentifierPart

    IdentifierStart ::
      UnicodeIDStart
      $
      _
      \ UnicodeEscapeSequence

    IdentifierPart::
      UnicodeIDContinue
      $
      \ UnicodeEscapeSequence
      <ZWNJ> <ZWJ>

    UnicodeIDStart::
      any Unicode code point with the Unicode property "ID_Start"

    UnicodeIDContinue::
      any Unicode code point with the Unicode property "ID_Continue"


    NOTE 3
    The sets of code points with Unicode properties "ID_Start" and
    "ID_Continue" include, respectively, the code points with Unicode
    properties "Other_ID_Start" and "Other_ID_Continue".

---*/


var C = class {
  async *m() { return 42; } static * #$(value) {
    yield value;
  }
  static * #_(value) {
    yield value;
  }
  static * #o(value) {
    yield value;
  }
  static * #℘(value) {
    yield value;
  }
  static * #ZW_‌_NJ(value) {
    yield value;
  }
  static * #ZW_‍_J(value) {
    yield value;
  };
  static * $(value) {
    yield this.#$(value);
  }
  static * _(value) {
    yield this.#_(value);
  }
  static * o(value) {
    yield this.#o(value);
  }
  static * ℘(value) { // DO NOT CHANGE THE NAME OF THIS FIELD
    yield this.#℘(value);
  }
  static * ZW_‌_NJ(value) { // DO NOT CHANGE THE NAME OF THIS FIELD
    yield this.#ZW_‌_NJ(value);
  }
  static * ZW_‍_J(value) { // DO NOT CHANGE THE NAME OF THIS FIELD
    yield this.#ZW_‍_J(value);
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

assert.sameValue(C.$(1).next().value, 1);
assert.sameValue(C._(1).next().value, 1);
assert.sameValue(C.o(1).next().value, 1);
assert.sameValue(C.℘(1).next().value, 1);
assert.sameValue(C.ZW_‌_NJ(1).next().value, 1);
assert.sameValue(C.ZW_‍_J(1).next().value, 1);

c.m().next().then(function(v) {
  assert.sameValue(v.value, 42);
  assert.sameValue(v.done, true);
}, $DONE).then($DONE, $DONE);
