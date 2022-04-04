---
sidebar_position: 490
---

# Errors

## Cannot convert between units

:::caution `cannot-convert-between-units`
Don't know how to convert between units cup and grams
:::

You will get this error message when you cannot convert between units.

```deci live
1 cup in gram
==> Don't know how to convert between units cups and grams
```

This is because cup is a volume, and kg is mass. So the question is how many

So for a liter of water we have:

```deci live
FlourDensity = 0.8 g/ml
1 cup * FlourDensity
==> 200 g
```

## Column contains inconsistent type

:::caution `column-contains-inconsistent-type`
Column cannot contain both ft and cm
:::

We don't support having multiple types in the same column.

```deci live
[1 ft, 2 cm]
==> Column cannot contain both ft and cm
```

You can organise them in different columns:

```deci live
Fruits = {
    Oranges = [1 orange],
    Pears = [2 pears]
}
==> {
  Oranges = [ 1 oranges ],
  Pears = [ 2 pears ]
}
```

## Expected unit

:::caution `expected-unit`
This operation requires compatible units
:::

You cannot add incompatible types.

```deci live
5 apples + 5 oranges
==> This operation requires compatible units
```

You can also get this error if you try to perform an operation in incompatible units

```deci live
1 month + 1 day
==> This operation requires compatible units
```

This is because different months have different amounts of days.

```deci live
DaysInMonth = 31 days
DaysInMonth + 1 day
==> 32 days
```

## Expected but got

:::caution `expected-but-got`
This operation requires a range and a number was entered
:::

You are calling a function with a wrong argument. For instance in the function below we are trying to see if a number contains a date, which doesn't make sense.

```deci live
containsdate(5, date(2050-Feb-02 15:30))
==> This operation requires a range and a number was entered
```

## Expected primitive

:::caution `expected-primitive`
This operation requires a primitive value (string, number, boolean or date) and a table was entered
:::

You are trying to use an operation that requires a primitive value, for example searching a matrix. To solve this you need to pass in a primitive value, such as a string, number, boolean, or date.

## Complex expression in exponent

:::caution `complex-expression-exponent`
The exponent must be a simple expression
:::

The power component in an exponentiation can only be a simple expression (a number or expression composed of built-in functions).

```deci live
(30 m)**([1,2,3])
==> Complex expressions not supported in exponents
```

## Sequence step must not be zero

:::caution `sequence-step-zero`
The step value on a sequence must not be zero

A sequence can have an optional argument specifying its step, which
cannot be zero.

```deci live
[1 .. 3 by 0]
==> Sequence step must not be zero
```

## Invalid step in sequence

:::caution `invalid-sequence-step`
The step of a sequence must be compatible with the sequence

If you specify a step for an ascending sequence, it must be positive. If
you specify a step for a descending sequence, it must be negative.

```deci live
[1 .. 3 by -1]
==> Invalid step in sequence: sequence is ascending but step is negative
```

## Expected arg count

:::caution `expected-arg-count`
The function add requires 2 parameters and 1 parameters were entered
:::

You are calling the function but you are providing the wrong number of arguments

```deci live
add (x,y) = x + y
add(1)
==> The function add requires 2 parameters and 1 parameters were entered
```

You can fix it by providing the missing argument:

```deci live
add (x,y) = x + y
add(5,10)
==> 15
```

## Bad overloaded builtin call

:::caution `bad-overloaded-builtin-call`
The function + cannot be called with (string, years)
:::

You probably made an error while typing, and Decipad cannot calculate that operation:

```deci live
Date = date(2025)
"Date" + 1 year
==> The function + cannot be called with (string, years)
```

You can fix it by providing fixing the typo:

```deci live
Date = date(2025)
Date + 1 year
==> year 2026
```

## Mismatched Specificity

:::caution `mismatched-specificity`
Expected time specific up to the year, but got day
:::

You are trying to do an operation on a date with a different granularity.

```deci live
date(2022) + 1 day
==> Expected time specific up to the year, but got day
```

But adding a year works:

```deci live
date(2022) + 1 year
==> year 2023
```

If you want to add a day you need to define the granularity of your date at that level:

```deci live
date(2022-06-30) + 1 day
==> day 2022-07-01
```

You can fix it by providing fixing the typo:

```deci live
Date = date(2025)
Date + 1 year
==> year 2026
```

## Expected table and associated column

:::caution `expected-table-and-associated-column`
Expected table and associated column
:::

You passed a column that's not associated with that table.

When creating a table, its columns are inherently associated with it. Functions such as `splitby` need this association.

```deci live
OtherTable = {
  Column
}

TableToSplitBy = {
  SplitKey = [1, 2, 3]
}

splitby(TableToSplitBy, OtherTable.Column)
==> Incompatible column sizes: 1 and 3
```

Make sure this association exists by using a table, and then its column, `splitby()`

```deci live
TableToSplitBy = {
  Name = ["group 1: A", "group 1: B", "group 2"]
  SplitKey = [1, 1, 2]
}

splitby(TableToSplitBy, TableToSplitBy.SplitKey)
==> {
  SplitKey = [ 1, 2 ],
  Values = [ {
  Name = [ 'group 1: A', 'group 1: B' ]
}, {
  Name = [ 'group 2' ]
} ]
}
```

## Duplicated table column

:::caution `duplicated-table-column`
The column NameOfTheColumn already exists in this table
:::

Table column names must be unique. This error appears when you're attempting to add a column to a table, like for instance:

    Table = { Names = ["Anna", "Kate"] }
    Table.Names = ["Other", "Names"]

You need to choose another name for your new column:

```deci live
Table = { Names = ["Anna", "Kate"] }
Table.NewNames = ["Other", "Names"]
==> [ 'Other', 'Names' ]
```

## Syntax error

:::caution `syntax-error`
Syntax Error
:::

The calculation you wrote is not valid in the language.

You may have miss-spelled something, or even tried to insert data in a way that is not supported yet:

    Final Cost = 8000 €
    Final_Cost = 8000 €

doesn't work because variables for now can't use spaces, symbols, and they are case sensitive.

    1==2 ? 10 : 20

doesn't work because that is not the right syntax for an `if.. then.. else` statement.

```deci live
if 1==2 then 10 else 20
==> 20
```

Or you might have inputted data in a way we don't support (**yet**)

    money = 8,000 $
    dinheiro = 8.000,00 €
    quid = £8,000.00

The correct calculation would be:

```deci live
money = 8000 $
dinheiro = 800000 €
quid = 800000 £
==> 800000 £
```

## Duplicated name

:::caution `duplicated-name`
The name VariableName is already being used. You cannot have duplicate names
:::

You named two variables with the same name. One of the biggest advantages of Decipad is how descriptive it is. Your reader will probably feel like they can truly understand your thought process.

A big part of that is the name you give to your calculations. So, while in a hurry you might just want to call everything `Monies` or `Funds`, which makes it quite confusing to those reading.

So we require you to use descriptive names for your variables, to make your notebooks easier to understand.

```deci live
Cash = 100 $
Coffee = 5 $
Cash = Cash - Coffee
==> The name Cash is already being used. You cannot have duplicate names
```

You can fix it by providing descriptive variable names:

```deci live
PocketCash = 100 $
Coffee = 5 $
LeftoverCashAfterCoffee = PocketCash - Coffee
==> 95 $
```
