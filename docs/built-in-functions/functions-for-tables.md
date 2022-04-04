---
sidebar_position: 180
---

# Functions for tables

Built-in functions that operate on tables:

## lookup

[Here is documentation on the lookup function](/docs/advanced-concepts/lookups).

## select

You can use the `select` directive to pick some columns from your table, and create a smaller table.

```deci live
Flights = {
  Number = ["TP123", "BA456", "EJ789"]
  PassengerCount = [100, 150, 200]
  UnwantedColumn = ["Let's", "keep this", "out"]
}

Flights2 = select(Flights, Number, PassengerCount)
==> {
  Number = [ 'TP123', 'BA456', 'EJ789' ],
  PassengerCount = [ 100, 150, 200 ]
}
```

## sortby

This function sorts a table by the values of a column:

```deci live
Flights = {
  FlightNumber = ["EZJ123", "TP456", "BA789", "TP098", "BA765"]
  DepartureTime = [date(2022-03-11 15:20), date(2022-03-11 16:20), date(2022-03-10 10:05), date(2022-03-13 12:20), date(2022-03-11 15:20)]
}

sortby(Flights, Flights.DepartureTime)
==> {
  FlightNumber = [ 'BA789', 'EZJ123', 'BA765', 'TP456', 'TP098' ],
  DepartureTime = [ minute 2022-03-10 10:05, minute 2022-03-11 15:20, minute 2022-03-11 15:20, minute 2022-03-11 16:20, minute 2022-03-13 12:20 ]
}
```

## splitby

This function splits the table into several different tables, split by the unique values of a column:

```deci live
Flights = {
  Company = ["EZJ", "TAP", "BA", "TAP", "BA", "EZJ", "TAP"]
  FlightNumber = ["EZJ123", "TP456", "BA789", "TP098", "BA765", "EZJ432", "TP210"]
}

splitby(Flights, Flights.Company)
==> {
  Company = [ 'BA', 'EZJ', 'TAP' ],
  Values = [ {
  FlightNumber = [ 'BA789', 'BA765' ]
}, {
  FlightNumber = [ 'EZJ123', 'EZJ432' ]
}, {
  FlightNumber = [ 'TP456', 'TP098', 'TP210' ]
} ]
}
```

## reverse

This function reverses a table:

```deci live
Flights = {
  Company = ["EZJ", "TAP", "BA", "TAP", "BA", "EZJ", "TAP"]
  FlightNumber = ["EZJ123", "TP456", "BA789", "TP098", "BA765", "EZJ432", "TP210"]
}

reverse(Flights)
==> {
  Company = [ 'TAP', 'EZJ', 'BA', 'TAP', 'BA', 'TAP', 'EZJ' ],
  FlightNumber = [ 'TP210', 'EZJ432', 'BA765', 'TP098', 'BA789', 'TP456', 'EZJ123' ]
}
```

## filter

You can select the elements from a table based on a condition:

```deci live
Flights = {
  FlightNumber = ["EZJ123", "TP456", "BA789", "TP098", "BA765", "EZJ432", "TP210"]
  PassengerCount = [100, 200, 150, 125, 210, 240, 80]
}

filter(Flights, Flights.PassengerCount <= 140)
==> {
  FlightNumber = [ 'EZJ123', 'TP098', 'TP210' ],
  PassengerCount = [ 100, 125, 80 ]
}
```
