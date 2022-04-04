---
sidebar_position: 145
---

# Tables

A table is a set of values indexed by name. You can define a table in the UI, but you can also do it in the language.

```deci live
MyTable = {
  A = [1, 2, 3]
  B = [4, 5, 6]
}
==> {
  A = [ 1, 2, 3 ],
  B = [ 4, 5, 6 ]
}
```

## Units of columns

Here, each column is a list with the same length. As with lists, you can specify the units of a given column:

```deci live
MyTable = {
  A = [1, 2, 3] bananas
  B = [4, 5, 6] oranges
}
==> {
  A = [ 1 bananas, 2 bananas, 3 bananas ],
  B = [ 4 oranges, 5 oranges, 6 oranges ]
}
```

## Columns with ranges

You can also declare a column like this:

```deci live
MyTable = {
  ArrivalDate = [date(2022-02-20) through date(2022-02-24) by day]
}
==> {
  ArrivalDate = [ day 2022-02-20, day 2022-02-21, day 2022-02-22, day 2022-02-23, day 2022-02-24 ]
}
```

## Columns with calculations

Instead of manually inputting values, each column's cell can be based on the outputs of other cells:

```deci live
MyTable = {
  ArrivalDate = [date(2022-02-20) through date(2022-02-24) by day]
  DepartureDate = ArrivalDate + 7 days
}
==> {
  ArrivalDate = [ day 2022-02-20, day 2022-02-21, day 2022-02-22, day 2022-02-23, day 2022-02-24 ],
  DepartureDate = [ day 2022-02-27, day 2022-02-28, day 2022-03-01, day 2022-03-02, day 2022-03-03 ]
}
```

## Using columns as a whole

Sometimes, when deriving a column from another with an expression, you might want to use the whole column at once instead of doing your calculations on a row-by-row basis. Like when you want to know the maximum of a column:

```deci live
Table = {
  TestResults = [1, 2, 0, -3]
  ComparedToMax = TestResults - max(Table.TestResults)
}
==> {
  TestResults = [ 1, 2, 0, -3 ],
  ComparedToMax = [ -1, 0, -2, -5 ]
}
```

Or analyze changes to your profits:

```deci live
  InitialProfit = 500
  Table = {
    Months = [date(2020-01) through date(2020-04) by month]
    Profit = [InitialProfit, 300, 125, 230] GBP
    RelativeChangeInProfit = stepgrowth(Table.Profit)
    PercentOfProfit = round(Profit / total(Table.Profit) in 1/100)
  }
==> {
  Months = [ month 2020-01, month 2020-02, month 2020-03, month 2020-04 ],
  Profit = [ 500 £, 300 £, 125 £, 230 £ ],
  RelativeChangeInProfit = [ 500 £, -200 £, -175 £, 105 £ ],
  PercentOfProfit = [ 43, 26, 11, 20 ]
}
```

## Using previous values

You can access previous column values by using the word `previous` and providing a value for the first cell, like this:

```deci live
Harvest = {
  Date = [date(2022-02-20) through date(2022-03-05) by day]
  Oranges = [10 oranges, 15, 20, 9, 4, 54, 23, 45, 53, 63, 54, 12, 0, 1],
  Count = previous(0) + oranges
}
==> {
  Date = [ day 2022-02-20, day 2022-02-21, day 2022-02-22, day 2022-02-23, day 2022-02-24, day 2022-02-25, day 2022-02-26, day 2022-02-27, day 2022-02-28, day 2022-03-01, day 2022-03-02, day 2022-03-03, day 2022-03-04, day 2022-03-05 ],
  Oranges = [ 10 oranges, 15 oranges, 20 oranges, 9 oranges, 4 oranges, 54 oranges, 23 oranges, 45 oranges, 53 oranges, 63 oranges, 54 oranges, 12 oranges, 0 oranges, 1 oranges ],
  Count = [ 1 oranges, 2 oranges, 3 oranges, 4 oranges, 5 oranges, 6 oranges, 7 oranges, 8 oranges, 9 oranges, 10 oranges, 11 oranges, 12 oranges, 13 oranges, 14 oranges ]
}
```

## Access columns

You can access the table columns individually:

```deci live
Table = {
  A = [1, 2, 3] bananas
  B = [4, 5, 6] oranges
}

Table.B
==> [ 4 oranges, 5 oranges, 6 oranges ]
```

You can then use them as lists:

```deci live
Table = {
  A = [1, 2, 3] bananas
  B = [4, 5, 6] oranges
}

Table.A / Table.B
==> [ 0.25 bananas per orange, 0.4 bananas per orange, 0.5 bananas per orange ]
```

Even inside your table, you can refer to its previous columns, if you need to aggregate them.

```deci live
Table = {
  A = [1, 2, 3] bananas
  AverageBananas = total(Table.A) / len(Table.A)
}
==> {
  A = [ 1 bananas, 2 bananas, 3 bananas ],
  AverageBananas = [ 2 bananas, 2 bananas, 2 bananas ]
}
```

## Add columns

Add new columns to a defined table with `.` followed by their name. Their sizes must match the existing table columns.

```deci live
 MyTable = {
   A = [1, 2, 3]
   B = [4, 5, 6]
 }
 MyTable.C = [7, 8, 9]
 MyTable
==> {
  A = [ 1, 2, 3 ],
  B = [ 4, 5, 6 ],
  C = [ 7, 8, 9 ]
}
```

## Index column

You can use the first column as an index for the row by using cells of text:

```deci live
Flights = {
  Number = ["TP123", "BA456", "EJ789"]
  PassengerCount = [100, 150, 200]
}
==> {
  Number = [ 'TP123', 'BA456', 'EJ789' ],
  PassengerCount = [ 100, 150, 200 ]
}
```

When you extract a column, it remembers the original index:

```deci live
Flights = {
  Number = ["TP123", "BA456", "EJ789"]
  PassengerCount = [100, 150, 200]
}

Flights.PassengerCount
==> [ 100, 150, 200 ]
```

You can still do operations on that column, and it will still remember the original index:

```deci live
Flights = {
  Number = ["TP123", "BA456", "EJ789"]
  PassengerCount = [100, 150, 200]
}

Flights.PassengerCount - 100
==> [ 0, 50, 100 ]
```

## Augmenting tables

If you have a table, you can copy it to another table using the `...` sign:

```deci live
Flights = {
  Number = ["TP123", "BA456", "EJ789"]
  PassengerCount = [100, 150, 200]
}

Flights2 = {
  ...Flights
}
==> {
  Number = [ 'TP123', 'BA456', 'EJ789' ],
  PassengerCount = [ 100, 150, 200 ]
}
```

Now you can add some columns of their own:

```deci live
Flights = {
  Number = ["TP123", "BA456", "EJ789"]
  PassengerCount = [100, 150, 200]
}

Flights2 = {
  ...Flights
  AccumulatedPassengerCount = previous(0) + PassengerCount
}
==> {
  Number = [ 'TP123', 'BA456', 'EJ789' ],
  PassengerCount = [ 100, 150, 200 ],
  AccumulatedPassengerCount = [ 100, 250, 450 ]
}
```

## Re-using columns

If you want to display just the flight number and `AccumulatedPassengerCount` you can:

```deci live
Flights = {
  Number = ["TP123", "BA456", "EJ789"]
  PassengerCount = [100, 150, 200]
}

Flights2 = {
  ...Flights
  AccumulatedPassengerCount = previous(0) + PassengerCount
}

Flights3 = {
  Number = Flights2.Number,
  Acc = Flights2.AccumulatedPassengerCount
}
==> {
  Number = [ 'TP123', 'BA456', 'EJ789' ],
  Acc = [ 100, 250, 450 ]
}
```

This allows you to further augment the table without listing every previously computed value.

## Functions on tables

[Here is a list of all the functions that work on tables](/docs/built-in-functions/functions-for-tables).
