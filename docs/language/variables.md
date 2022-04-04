---
sidebar_position: 0
---

# Variables

Name your data with variables.

They improve readability of notebooks with a layer of abstraction.

## Declaration

Declare a variable with the `=` operator:

```deci live
OfficeSpace = 120 meters^2
==> 120 meters²
```

> Variables can contain letters from a to z, upper or lower case. They can't contain spaces or special characters except numbers, underscores ("\_") or emojis.

## Referencing

Reference variables on calculation blocks:

```deci live
OfficeSpace = 120 m^2
OfficePrice = 50 $/m^2/month
OfficeCost = OfficeSpace * OfficePrice
==> 6000 $ per month
```

## Redefinition

Existing variables can't be redefined after declaration:

```deci live
Beans = 1 bean
Beans = Beans + 1
==> The name Beans is already being used. You cannot have duplicate names
```

A simple solution is declaring a new variable:

```deci live
Beans = 1 bean
MoreBeans = beans + 1
==> 2 beans
```
