---
sidebar_position: 10
---

# Functions for numbers

Our built-in functions that operate on numbers:

## abs

This function gives you the absolute value of a number. If the given number is positive or zero, it gives you that number. If it's negative, it gives you the number multiplied by `-1`.

```deci live
abs(-10 days)
==> 10 days
```

## ln

`ln (number)` gives you [the natural logarithmic of a number](https://en.wikipedia.org/wiki/Natural_logarithm):

```deci live
ln(12 steps)
==> 2.4849 steps
```

## sqrt

This function gives you the square root of a number:

```deci live
sqrt(9 meters^2)
==> 3 meters
```

## round

This function gives you a rounded version of a number, with the specified number of decimals:

```deci live
round(5.76543, 2)
==> 5.77
```

You can also leave out the number of decimals, and it will round to the units:

```deci live
round(5.76543)
==> 6
```

## roundup / ceil

Rounds the number to the nearest largest integer or number with the given decimal places:

```deci live
roundup(2.3)
==> 3
```

```deci live
roundup(5.2345, 2)
==> 5.24
```

## rounddown / floor

Rounds the number to the nearest smallest integer or number with the given decimal places:

```deci live
rounddown(2.9)
==> 2
```

```deci live
rounddown(5.789, 2)
==> 5.78
```

## max

This function gives you the maximum value of a list or table column:

```deci live
max([1, 3, 2])
==> 3
```

## min

This function gives you the minimum value of a list or table column:

```deci live
min([3, 1, 2])
==> 1
```

## sum / total

This function gives you the sum of all numbers in a list or a table column:

```deci live
my_table = {
  column_A = [1, 2, 3]
  column_B = [4, 5, 6]
}

total(my_table.column_B)
==> 15
```

## average / mean / avg

This function gives you the mean of a list of numbers:

```deci live
average([1, 2, 3, 4])
==> 2.5
```

## averageif / meanif / avgif

This function gives you the mean of a list of numbers that respect a certain condition:

```deci live
Table = {
  A = [1, 2, 3]
  B = [4, 5, 6]
}

averageif(Table.A, Table.B < 6)
==> 1.5
```

## grow

This function compounds an initial value by a specific rate over any sequence or list of values.

```deci live
Years = [date(2022), date(2023), date(2024), date(2025)]

grow(500, 10%, Years)
==> [ 500, 550, 605, 665.5 ]
```

## stepgrowth

This function gives you the increments (or decrements) between values in a sequence or list.

```deci live
BooksRead = {
  Year = [date(2018), date(2019), date(2020), date(2021)]
  Total = [15, 12, 25, 20]
}

stepgrowth(BooksRead.Total)
==> [ 15, -3, 13, -5 ]
```
