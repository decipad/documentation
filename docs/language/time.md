---
sidebar_position: 65
---

# Time

Decipad tries to capture time in a natural way for people.

## Time granularity

A time value has a granularity, which can be a year, a month, a day, or a specific time. In Decipad this time value has the granularity of a day:

```deci live
date(2022-06-30)
==> day 2022-06-30
```

You can specify a time value to the hour:

```deci live
date(2022-06-30 16)
==> hour 2022-06-30 16:00
```

Or to the minute:

```deci live
date(2022-06-30 16:45)
==> minute 2022-06-30 16:45
```

A time value can have any of the following granularities:

- year
- month
- day
- time

## Contains

You can then inquire if a certain time value is within another:

```deci live
Day = date(2022-06-30)
Minute = date(2022-06-30 11:59)

Day contains Minute
==> true
```

## Time-traveling

You can add a time duration to a date:

```deci live
Start = date(2021-01-01)
End = Start + 1 year + 6 months + 5 days
==> day 2022-07-06
```

Or subtract two dates to get a time duration:

```deci live
Start = date(2022-06-30)
End = date(2022-09-15)
Difference = End - Start
==> 77 days
```

## Time conversions

Unlike other units, in units of time different units might have different base.

For example, some years have 365 days while other years have 366. May has 31 days, June 29.

That means that Decipad cannot convert months into weeks:

```deci live
1 month in weeks
==> Don't know how to convert between units months and weeks
```

You can create a custom unit, in case you know how many days the specific month has:

```deci live
month = 31 days
1 month in weeks
==> 4.(428571) weeks
```

Or, if you want to use the average amount of days that exist in a month:

```deci live
year = 365 days
month = year / 12
round(1 month in weeks, 1)
==> 4.3 weeks
```

However, you need to be mindful. Now, `year` is defined as a number of days. So you can't convert a year into a decade for example:

```deci live
year = 365 days
1 year in decades
==> Don't know how to convert between units days and decades
```

But you still can convert a decade into years, since the definition of `decade` is unchanged and it will ignore your user defined `year`.

```deci live
year = 365 days
1 decade in years
==> 10 years
```

## Functions on dates

[Here is a list of all the functions that work on dates](/docs/built-in-functions/functions-for-dates).
[Read more on sequences and how they work with time](/docs/advanced-concepts/sequences).
