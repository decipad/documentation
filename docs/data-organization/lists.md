---
sidebar_position: 140
---

# Lists

Lists help us organize two-dimensional data.

Create lists by placing elements inside square brackets (`[]`):

```deci live
[1, 2, 3, 4]
==> [ 1, 2, 3, 4 ]
```

A list can contain numbers (with or without units):

```deci live
[2 oranges, 4 oranges, 6 oranges]
==> [ 2 oranges, 4 oranges, 6 oranges ]
```

Dates:

```deci live
[date(2020), date(2021), date(2022)]
==> [ year 2020, year 2021, year 2022 ]
```

Text strings:

```deci live
["Hello", "World", "!"]
==> [ 'Hello', 'World', '!' ]
```

Or even booleans:

```deci live
[true, false, false]
==> [ true, false, false ]
```

## A list must be coherent

Lists cannot contain different types of elements. Here are some examples of non-valid lists:

```deci live
[true, "that"]
==> This operation requires a boolean and a string was entered
```

Units on lists must be consistent:

```deci live
[1 orange, 2 pears]
==> This operation requires compatible units
```

## Creating lists from sequences

Create a list by specifying a [sequence](../advanced-concepts/sequences):

```deci live
[1 .. 10 by 2]
==> [ 1, 3, 5, 7, 9 ]
```

## List Operations

You can apply an arithmetic operator to lists (`+`, `-`, `*`, `/`, etc.):

```deci live
[1, 2, 3] + 1
==> [ 2, 3, 4 ]
```

```deci live
10 / [1, 2, 5]
==> [ 10, 5, 2 ]
```

If you have two lists you can operate on each corresponding item like this:

```deci live
[1, 2, 3] * [4, 5, 6]
==> [ 4, 10, 18 ]
```

> This only works if both lists have the same number of elements.

You can also operate on lists with dates:

```deci live
[date(2021-01), date(2021-02), date(2021-03)] + 1 year + 1 month
==> [ month 2022-02, month 2022-03, month 2022-04 ]
```

Or strings:

```deci live
["cookies", "pizzas", "tacos"] + " are delicious"
==> [ 'cookies are delicious', 'pizzas are delicious', 'tacos are delicious' ]
```

Or even using the `not` boolean operator:

```deci live
![true, false, true]
==> [ false, true, false ]
```

## Functions on lists

[Here is a list of all the functions that work on lists](/docs/built-in-functions/functions-for-lists).
