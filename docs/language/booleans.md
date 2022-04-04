---
sidebar_position: 28
---

# Booleans

A boolean value can either be true or false.

Express boolean values like this:

```deci live
true
==> true
```

```deci live
false
==> false
```

## Comparing values

Compare two values like this:

```deci live
3 > 2
==> true
```

In this example, the comparison result is `true`.

The list of available comparators is the following:

- `>`: "greater than"
- `<`: "less than"
- `>=`: "greater or equal"
- `<=`: "less or equal"
- `==`: "equals"
- `!=`: "different"

## Parenthesis

Use parenthesis to chain operators and define priorities

```deci live
10 bananas != (20 bananas / 2)
==> false
```

> Parentheses are used to ensure that the `/` operation on the right side of the `!=` is performed **before** the evaluation of the `!=` itself.

## Functions on booleans

[Here is a list of all the functions that work on booleans](/docs/built-in-functions/functions-for-booleans).
