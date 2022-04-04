---
sidebar_position: 20
---

# Functions for dates

Built-in functions that operate on dates:

## containsdate

This function gives you the ability to check whether a certain range contains a specific date:

```deci live
Range = range(date(2050-Jan-01) through date(2050-Dec-31))
containsdate(Range, date(2050-Feb-02 15:30))
==> true
```

## dateequals

This functions allows you to compare if two dates are equal:

```deci live
dateequals(date(2050-Jan-01), date(2050-Dec-31))
==> false
```

## dategte

This functions allows you to compare if one date is greater or equal to other:

```deci live
dategte(date(2050-Jan-01), date(2025-Jun-01))
==> true
```

## max

Gets you the maximum date from a list of dates:

```deci live
max([date(2050-Jan-01), date(2025-Jun-01)])
==> day 2050-01-01
```

## min

You can get the maximum date from a list of dates:

```deci live
min([date(2050-Jan-01), date(2025-Jun-01)])
==> day 2025-06-01
```
