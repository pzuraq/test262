// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.datefromfields
description: Temporal.Calendar.prototype.dateFromFields should throw TypeError while calendar has no [[InitializedTemporalCalendar]]
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601")
let badCal = {dateFromFields: cal.dateFromFields};

assert.throws(TypeError, () => badCal.dateFromFields({year: 2021, month: 3, day: 17}),
    "calendar has no [[InitializedTemporalCalendar]]");
