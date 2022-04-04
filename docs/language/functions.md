---
sidebar_position: 80
---

# Functions

A function is a block of reusable Decipad language used to perform a set of operations.

Decipad has a series of built-in functions that you can call. Some of them you've seen, like the `+`, `-`, `*`, and `/` operators, or the comparison operators like `==` or `>=`.

Other functions include mathematical functions such as `abs` or `ln`.

This is how you call a function in Decipad:

```deci live
Time = -10 days
TimeSpan = abs(Time)
==> 10 days
```

## Custom functions

Custom functions allow you to create your dialects inside Decipad.

They can be defined as follows:

`name (first argument, ..., last argument) = expression`

To illustrate, we will create a function to determine if a given number is even.

```deci live
even (n) = n % 2 == 0
even(10)
==> true
```

## Functions on numbers

[Here you can see some of the supported built-in functions](/docs/built-in-functions/functions-for-numbers).
