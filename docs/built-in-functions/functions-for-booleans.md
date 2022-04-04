---
sidebar_position: 30
---

# Functions for booleans

Built-in functions that operate on booleans:

## not

This operator negates a boolean:

```deci live
not true
==> false
```

## and

This binary operator takes two booleans and results `true` if and only if both arguments are true:

```deci live
CanTravel = true
CanAffordTravelling = false
WillTravel = CanTravel and CanAffordTravelling
==> false
```

## or

This binary operator takes two booleans and results `false` if and only if both arguments are false:

```deci live
OnVacation = false
Sick = true
ShouldSkipWork = OnVacation or Sick
==> true
```
