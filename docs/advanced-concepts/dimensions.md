---
sidebar_position: 50
---

# Dimensions

## Degrees of freedom

Any quantity has a defined number of degrees of freedom.

The space of numbers has _one_ degree of freedom. They can vary from -Infinity to +Infinity:

![One dimension axis](/img/dimensions-one-axis.svg)

But once you define a numeric value, they have 0 dimensions, since they can no longer vary. For instance, if you create a value of `3 oranges`, _that_ value of oranges has 0 degrees of freedom; it cannot change.

![Dimensions three](/img/dimensions-three.svg)

## One degree of freedom

You can define a 1-dimensional value by creating a table with at least two columns.
In the first column you place a name, and in the second column you place a value, like this:

```deci live
Cars = {
  Type = ["suv", "hybrid", "standard"],
  FuelConsumption = [ 23 miles/gallon, 45 miles/gallon, 28 miles/gallon]
}
==> {
  Type = [ 'suv', 'hybrid', 'standard' ],
  FuelConsumption = [ 23 miles per gallon, 45 miles per gallon, 28 miles per gallon ]
}
```

In the previous example, the column named `FuelConsumption` is indexed by `Type`. You can access the fuel consumption values using the `.` character like this:

```deci live
Cars = {
  Type = ["suv", "hybrid", "standard"],
  FuelConsumption = [ 23 miles/gallon, 45 miles/gallon, 28 miles/gallon]
}

Cars.FuelConsumption
==> [ 23 miles per gallon, 45 miles per gallon, 28 miles per gallon ]
```

This column (`Cars.FuelConsumption`) is a one-dimensional value. Given an index value, it can have, in this case, one of three values (23, 45 or 28 miles per gallon).

## Two degrees of freedom

We can also declare a time value that also has one degree of freedom that is a sequence of years:

```deci live
Year = [date(2020) .. date(2025) by year]
==> [ year 2020, year 2021, year 2022, year 2023, year 2024, year 2025 ]
```

Which we now can use to calculate an interest rate and the price of fuel per year:

```deci live
Year = [date(2020) .. date(2025) by year]

BaseFuelPrice = 4 USD/gallon

Fuel = {
  Year,
  InterestRateFromYear = 1.08 ** (Year - date(2020) as years),
  Price = round(BaseFuelPrice * InterestRateFromYear, 2)
}
==> {
  Year = [ year 2020, year 2021, year 2022, year 2023, year 2024, year 2025 ],
  InterestRateFromYear = [ 1, 1.08, 1.1664, 1.2597, 1.3604, 1.4693 ],
  Price = [ 4 $ per gallon, 4.32 $ per gallon, 4.67 $ per gallon, 5.04 $ per gallon, 5.44 $ per gallon, 5.88 $ per gallon ]
}
```

We can now relate both `Cars.FuelConsumption` and `Fuel.Price` to know how many dollars you need to spend to travel one mile:

```deci live
Cars = {
  Type = ["suv", "hybrid", "standard"],
  FuelConsumption = [ 23 miles/gallon, 45 miles/gallon, 28 miles/gallon]
}

Year = [date(2020) .. date(2025) by year]

BaseFuelPrice = 4 USD/gallon

Fuel = {
  Year,
  InterestRateFromYear = 1.08 ** (Year - date(2020) as years),
  Price = round(BaseFuelPrice * InterestRateFromYear, 2)
}

round(Fuel.Price / Cars.FuelConsumption, 2)
==> [ [ 0.17 $ per mile, 0.09 $ per mile, 0.14 $ per mile ], [ 0.19 $ per mile, 0.1 $ per mile, 0.15 $ per mile ], [ 0.2 $ per mile, 0.1 $ per mile, 0.17 $ per mile ], [ 0.22 $ per mile, 0.11 $ per mile, 0.18 $ per mile ], [ 0.24 $ per mile, 0.12 $ per mile, 0.19 $ per mile ], [ 0.26 $ per mile, 0.13 $ per mile, 0.21 $ per mile ] ]
```

## The over directive

If you find that your values have too many degrees of freedom, you might want to generalize a bit. For example, by using the `total` function:

```deci live
Cars = {
  Type = ["suv", "hybrid", "standard"],
  FuelConsumption = [ 23 miles/gallon, 45 miles/gallon, 28 miles/gallon]
}

BaseFuelPrice = 4 USD/gallon

Fuel = {
  Year = [date(2020) .. date(2025) by year],
  InterestRateFromYear = 1.08 ** (Year - date(2020) as years),
  Price = round(BaseFuelPrice * InterestRateFromYear, 2)
}

EstimatedUsage = 100000 miles

GallonsSpent = (1 / Cars.FuelConsumption) * EstimatedUsage
DollarsSpentPerYear = round(Fuel.Price * GallonsSpent)

total(DollarsSpentPerYear)
==> [ 40566 $, 43812 $, 47361 $, 51113 $, 55170 $, 59632 $ ]
```

This should display the total on a per-year basis. This is because `Consumption`'s first degree of freedom is based on the Fuel table. But this doesn't make sense for us unless we're going to buy all 3 cars.

We want to know how much we would spend per car in this time period. To do so, we need to replace the last line with `total(DollarsSpentPerYear over Cars)`, meaning it would calculate the total per car.

```deci live
Cars = {
  Type = ["suv", "hybrid", "standard"],
  FuelConsumption = [ 23 miles/gallon, 45 miles/gallon, 28 miles/gallon]
}

BaseFuelPrice = 4 USD/gallon

Fuel = {
  Year = [date(2020) .. date(2025) by year],
  InterestRateFromYear = 1.08 ** (Year - date(2020) as years),
  Price = round(BaseFuelPrice * InterestRateFromYear, 2)
}

EstimatedUsage = 100000 miles

GallonsSpent = (1 / Cars.FuelConsumption) * EstimatedUsage
DollarsSpentPerYear = round(Fuel.Price * GallonsSpent)

total(DollarsSpentPerYear over Cars)
==> [ 127608 $, 65223 $, 104823 $ ]
```

## Another example of dimensions combined with unit conversions

We can have operations and unit conversions work accross dimensions, like in this example where we show how long each animal would take to run 1.75 marathons:

```deci live
Animals = {
  Name = ["Person", "Falcon", "Turtle"]
  Speed = [27.33 mph, 55 mph, 22 mph]
}

Race = {
  Name = ["Quarter", "Half", "Marathon"]
  Distance = [0.25 marathon, 0.5 marathon, 1 marathon]
}

Hours = sum(Race.Distance / Animals.Speed over Animals) in hours
==> [ 1.6788 hours, 0.834233(191796273399709333853929415847812411878267282705364308800242944838506756903320969176373614455217891152035747597665994230060085464523546126982061126656688575085139150994555432637036072970217565779484176048241903646341727945163879308474870393266957332812737250818854254788399383961302357866423721828159909763345697490293052211448775514630919069000672436606581202143120539684605540009978091581527515672111234029630593696449100887182490618424763020324938721502787358) hours, 2.0855829(794906834992733346348235396195310296956682067634107720006073620962668922583024229409340361380447278800893689941649855751502136613088653174551528166417214377128478774863885815925901824255439144487104401206047591158543198629096982711871759831673933320318431270471356369709984599032558946660593045703997744083642437257326305286219387865772976725016810915164530053578013492115138500249452289538187891802780850740764842411227522179562265460619075508123468037569683954) hours ]
```

> **Challenge**: Try tweaking the units above to see how many seconds or days it takes for each animal to complete all three races.
