---
sidebar_position: 70
---

# Conditions

## If Then Else

You can now use a boolean value to perform an operation conditionally by using `if ... then ... else` like this:

```deci live
TheSunIsDown = false
if TheSunIsDown then "Dinner" else "Lunch"
==> 'Lunch'
```

> Here we're using another type of value: the string. "dinner" and "lunch" are strings of text. They're enclosed in quotation marks and can have any character inside except new lines (a new line happens when you press the _Enter_ key).

You can have more complex values inside `if ... then ... else` expressions, but both expressions must have the same type.

For instance, the following is invalid:

```deci live
TheSunIsDown = true
if TheSunIsDown then "dinner" else 337
==> This operation requires a string and a number was entered
```

You can assign the result of an `if ... then ... else` to a variable:

```deci live
Points = 8
Stars = if Points > 6
  then 5
  else Points / 2
==> 5
```

> If you're wondering, no, you can't have an `if` without the `else`. If you did, you wouldn't be able to determine the type of an expression, and that can lead to a whole mess of programming errors that you may want to avoid.
