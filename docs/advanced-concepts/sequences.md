---
sidebar_position: 110
---

# Sequences

In Decipad, a sequence is a list of quantities separated by a step.

## Creating a sequence

You can create a sequence by typing `[start .. end by step]` like this:

```deci live
[1 .. 5 by 1]
==> [ 1, 2, 3, 4, 5 ]
```

> As you can see, in Decipad, sequences can be expressed similarly to ranges, but adding a `by step`.

## Sequences with units

```deci live
[0 through 6 miles by 2]
==> [ 0 miles, 2 miles, 4 miles, 6 miles ]
```

## Date sequences

You can have sequences of dates by specifying the step:

```deci live
[date(2021-01) .. date(2021-06) by month]
==> [ month 2021-01, month 2021-02, month 2021-03, month 2021-04, month 2021-05, month 2021-06 ]
```

The step can be any of `millennium`, `century`, `decade`, `year`, `quarter`, `month`, `day`, `hour`, `minute`, `second` or `millisecond`:

```deci live
[date(2021-03-15) .. date(2021-03-15) by hour]
==> [ hour 2021-03-15 00:00, hour 2021-03-15 01:00, hour 2021-03-15 02:00, hour 2021-03-15 03:00, hour 2021-03-15 04:00, hour 2021-03-15 05:00, hour 2021-03-15 06:00, hour 2021-03-15 07:00, hour 2021-03-15 08:00, hour 2021-03-15 09:00, hour 2021-03-15 10:00, hour 2021-03-15 11:00, hour 2021-03-15 12:00, hour 2021-03-15 13:00, hour 2021-03-15 14:00, hour 2021-03-15 15:00, hour 2021-03-15 16:00, hour 2021-03-15 17:00, hour 2021-03-15 18:00, hour 2021-03-15 19:00, hour 2021-03-15 20:00, hour 2021-03-15 21:00, hour 2021-03-15 22:00, hour 2021-03-15 23:00 ]
```

## Functions on lists

[Here is a list of all the functions that work on lists](/docs/built-in-functions/functions-for-lists).
