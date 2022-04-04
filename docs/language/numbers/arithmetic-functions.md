---
sidebar_position: 20
---

# Arithmetic operations

In Decipad you have all the arithmetic operations you would expect:

```deci live
3 + 5 / 2 * 4 - 7
==> 6
```

When you have numbers with units, these operations also result in numbers with units:

```deci live
7 oranges + 2 oranges
==> 9 oranges
```

Depending on the operations, the units must match. For instance, when adding or subtracting, the units in the numbers should be the same.

Here you can see what happens when you try to add numbers with different units:

```deci live
5 apples + 5 oranges
==> This operation requires compatible units
```

When doing any arithmetic operation with two numbers, you can omit the units in one of them:

```deci live
5 apples - 2
==> 3 apples
```

Decipad tries its best to match plural and singular units:

```deci live
5 bananas + 1 banana
==> 6 bananas
```

Other operations, like exponentiation, do their best to compute the correct units:

```deci live
(3 meters) ** 2
==> 9 meters²
```

You can also use percentages:

```deci live
20% * 5000kg
==> 1000 kg
```
