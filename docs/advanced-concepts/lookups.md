---
sidebar_position: 330
---

# Lookups

## Accessing rows

If you have a table index, you can extract a given row by using the `lookup` function like this:

```deci live
Flights = {
  Number = ["TP123", "BA456", "EJ789"]
  PassengerCount = [100, 150, 200]
}

lookup(Flights, "TP123")
==> {
  Number = 'TP123',
  PassengerCount = 100
}
```

## Accessing values

If you have a table index, you can extract a value by using the `lookup` function and specifying the column name in which said value is located:

```deci live
Flights = {
  Number = ["TP123", "BA456", "EJ789"]
  PassengerCount = [100, 150, 200]
}

lookup(Flights, "BA456").PassengerCount
==> 150
```

## Cashflow positive for the month

For Financial planning and analysis models you often need to:

- Calculate growth based on previous months
- Find the point in your model where you break even

You can achieve this using `lookup`, `previous`, and `next`.

```deci live
Cashflow = {
  Month = [date(2023-01), date(2023-02), date(2023-03), date(2023-04), date(2023-05)]
  Expenses = [500 GBP, 500 GBP, 600 GBP, 700 GBP, 700 GBP]
  Income = [0 GBP, 400 GBP, 800 GBP, 2000 GBP, 3000 GBP]
  Profit = Income - Expenses
}
==> {
  Month = [ month 2023-01, month 2023-02, month 2023-03, month 2023-04, month 2023-05 ],
  Expenses = [ 500 £, 500 £, 600 £, 700 £, 700 £ ],
  Income = [ 0 £, 400 £, 800 £, 2000 £, 3000 £ ],
  Profit = [ -500 £, -100 £, 200 £, 1300 £, 2300 £ ]
}
```

Here's how to find in what month you turn cashflow positive.

```deci live
Cashflow = {
  Month = [date(2023-01), date(2023-02), date(2023-03), date(2023-04), date(2023-05)]
  Expenses = [500 GBP, 500 GBP, 600 GBP, 700 GBP, 700 GBP]
  Income = [0 GBP, 400 GBP, 800 GBP, 2000 GBP, 3000 GBP]
  Profit = Income - Expenses
}

lookup(Cashflow, Cashflow.Profit >= 0).Month
==> month 2023-03
```

## Break even

Sometimes however you need to keep count of profits, or headcount.

```deci live
InitialInvestment = 100 £
Cashflow = {
  Month = [date(2023-01) .. date(2023-05) by month]
  Expenses = [500 £, 500 £, 600 £, 700 £, 700 £]
  Income = [0 £, 400 £, 800 £, 2000 £, 3000 £]
  Profit = Income - Expenses
  BankBalance = previous(InitialInvestment) + Profit
}
==> {
  Month = [ month 2023-01, month 2023-02, month 2023-03, month 2023-04, month 2023-05 ],
  Expenses = [ 500 £, 500 £, 600 £, 700 £, 700 £ ],
  Income = [ 0 £, 400 £, 800 £, 2000 £, 3000 £ ],
  Profit = [ -500 £, -100 £, 200 £, 1300 £, 2300 £ ],
  BankBalance = [ -400 £, -500 £, -300 £, 1000 £, 3300 £ ]
}
```

You can use the `previous` function and find the month when you break even.

```deci live
InitialInvestment = 100 £
Cashflow = {
  Month = [date(2023-01) .. date(2023-05) by month]
  Expenses = [500 £, 500 £, 600 £, 700 £, 700 £]
  Income = [0 £, 400 £, 800 £, 2000 £, 3000 £]
  Profit = Income - Expenses
  BankBalance = previous(InitialInvestment) + Profit
}

lookup(Cashflow, Cashflow.BankBalance >= 0).Month
==> month 2023-04
```

If you want to calculate how much of a interest free loan or extra investment you need:

```deci live
InitialInvestment = 100 £
Cashflow = {
  Month = [date(2023-01) .. date(2023-05) by month]
  Expenses = [500 £, 500 £, 600 £, 700 £, 700 £]
  Income = [0 £, 400 £, 800 £, 2000 £, 3000 £]
  Profit = Income - Expenses
  BankBalance = previous(InitialInvestment) + Profit
}

min(Cashflow.BankBalance) * -1
==> 500 £
```
