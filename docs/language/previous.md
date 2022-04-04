---
sidebar_position: 85
---

# Using the previous value

If you want to do a calculation that requires many steps, you may wish to break down those steps into separate statements. To achieve that, you can store intermediary values on variables, like this:

```deci live
SquareSide = 10 cm
SquareArea = SquareSide ** 2
Pressure = 3 kiloNewton / SquareArea
Pressure in bars
==> 3 bars
```

Instead, Deci language stores the previous value in a variable called `_`, which you can use instead:

```deci live
10 cm
_ ** 2
3 kiloNewton / _
Pressure = _ in bars
==> 3 bars
```

> The resulting code will probably be less readable, but avoids you having to imagine and type temporary variable names.
