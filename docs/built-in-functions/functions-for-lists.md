---
sidebar_position: 160
---

# Functions for lists

When you have a list, you can apply some functions that are specific to working with lists. Here are some:

## abs

Can calculate all the absolute numbers of the numbers contained in a list:

```deci live
abs([-1, 2, -3])
==> [ 1, 2, 3 ]
```

## len

You can know the number of elements a list has by using the `len` operator:

```deci live
len([1, 2, 3])
==> 3
```

## cat

Also, you can join two lists (as long as they have the same type) by using the `cat` function:

> (`cat` is an abbreviation of `concatenate`).

```deci live
cat([1, 2, 3], [4, 5, 6])
==> [ 1, 2, 3, 4, 5, 6 ]
```

You can also use this function to push an element to the end of a list, resulting in a new list:

```deci live
cat([1, 2, 3], 4)
==> [ 1, 2, 3, 4 ]
```

> In Decipad, every operation returns a new value. Here, `cat` returns a new list and leaves the arguments untouched.

Or add an element to the beginning of a list:

```deci live
cat(1, [2, 3, 4])
==> [ 1, 2, 3, 4 ]
```

## first

If you have a list and want to extract the first element, you can use the `first` function:

```deci live
first([1 apples, 2 apples, 3 apples])
==> 1 apples
```

## last

Conversely, if you want to extract the last element of a list, you can use the `last` function:

```deci live
last([1 apples, 2 apples, 3 apples])
==> 3 apples
```

## total

You can reduce a list to the sum of all the elements in it:

```deci live
total([1 apples, 2 apples, 3 apples])
==> 6 apples
```

## sort

You can generate a new list that contains all the elements in the source list sorted:

```deci live
sort([date(2021-03), date(2020-12), date(2023-01)])
==> [ month 2020-12, month 2021-03, month 2023-01 ]
```

## unique

You can generate a new list that contains all the unique elements in the source list sorted:

```deci live
unique([4 USD, 3 USD, 1 USD, 1 USD, 4 USD, 3 USD, 3 USD])
==> [ 1 $, 3 $, 4 $ ]
```

## reverse

You can generate a new list that contains all the elements in the source list in reverse order:

```deci live
reverse([1 duck, 2 ducks, 3 ducks])
==> [ 3 ducks, 2 ducks, 1 ducks ]
```

## Transpose

Transpose a list:

```deci live
transpose([[5$],[10$],[15$]])
==> [ [ 5 $, 10 $, 15 $ ] ]
```

## grow

This function compounds an initial value by a specific rate over any sequence or list of values.

```deci live
grow(100, 10%, [1, 2, 3, 4, 5])
==> [ 100, 110, 121, 133.1, 146.41 ]
```

## stepgrowth

If you have a list of numbers, like a profit per month, you might want a list that shows how each item compares to the previous one:

```deci live
stepgrowth([10 USD, 11 USD, 9 USD, 14 USD])
==> [ 10 $, 1 $, -2 $, 5 $ ]
```
