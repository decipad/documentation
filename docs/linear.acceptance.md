# lol what are you doing here?

## [ENG-242](https://linear.app/decipad/issue/ENG-242)

```deci live
[1 cm, 1m]
==> Column cannot contain both cm and m
```

## [ENG-275](https://linear.app/decipad/issue/ENG-275)

```deci live
AddDifferentDateUnits = [ date(2020-01) ] + [ 1 year ]
==> [ month 2021-01 ]
```

## [ENG-246](https://linear.app/decipad/issue/ENG-246)

```deci live
Offer = 10 $
Step = 100%
Duration = [1..10]

grow(Offer, Step, Duration)
==> [ 10 $, 20 $, 40 $, 80 $, 160 $, 320 $, 640 $, 1280 $, 2560 $, 5120 $ ]
```

## [ENG-277](https://linear.app/decipad/issue/ENG-277)

```deci live
300000 N/m^2 + 1 bar
==> 4 bars
```

## [ENG-140](https://linear.app/decipad/issue/ENG-140)

```deci live
(900*m**2)**(1/2)
==> 30 m
```

## [ENG-263](https://linear.app/decipad/issue/ENG-263)

```deci live
Time = [date(2022-01) .. date(2025-01) by quarter]
StartingDate = first(Time)
==> month 2022-01
```

## [ENG-251](https://linear.app/decipad/issue/ENG-251)

```deci live
miles * hour^-1
==> 1 miles per hour
```

## [ENG-242](https://linear.app/decipad/issue/ENG-242)

```deci live
[1cm, 2m, 3cm]
==> Column cannot contain both cm and m
```

## [ENG-216](https://linear.app/decipad/issue/ENG-216)

```deci live
Speed = 10 miles / hour
grow(Speed, 10%, [1, 2, 3])
==> [ 10 miles per hour, 11 miles per hour, 12.1 miles per hour ]
```

## [ENG-270](https://linear.app/decipad/issue/ENG-270)

```deci live
1 fahrenheit + 1
==> 2 °F
```

## [ENG-211](https://linear.app/decipad/issue/ENG-211)

```deci live
transpose([[5$],[10$],[15$]])
==> [ [ 5 $, 10 $, 15 $ ] ]
```

## [ENG-286](https://linear.app/decipad/issue/ENG-286)

```deci live
Animals = {
  Name = ["Person", "Falcon"]
  Speed = [27.33 miles/hour, 55 miles/hour]
}

Animals2 = {
  Name = Animals.Name
  Speed = [27.33 mph, 55 mph]
}

Animals3 = {
  Name = Animals.Name
  Speed = [27.33 miles/hour in kilometer/second, 55 miles/hour in kilometer/second]
}

Race = {
  Name = ["Quarter", "Half", "Marathon"]
  Distance = [0.25 marathon, 0.5 marathon, 1 marathon]
}

Hours = round(sum(1/(Animals.Speed / Race.Distance) in hours), 2)
Hours2 = round(sum(1/(Animals2.Speed / Race.Distance) in hours), 2)
Hours3 = round(sum(1/(Animals3.Speed / Race.Distance) in hours), 2)


[Hours, Hours2, Hours3]
==> [ [ 1.68 hours, 0.83 hours ], [ 1.68 hours, 0.83 hours ], [ 1.68 hours, 0.83 hours ] ]
```

Why?

```deci live
Distance = 1.75 marathons in miles
Speed = [27.33 miles/hour, 55 miles/hour]
round(1/(Speed / Distance), 2)
==> [ 1.68 hours, 0.83 hours ]
```

## [ENG-139](https://linear.app/decipad/issue/ENG-139)

```deci live
A = 3
SQRTZ = sqrt(A * 3)
==> 3
```

## [ENG-311](https://linear.app/decipad/issue/ENG-311)

```deci live
1000 milliliters in liters
==> 1 liters
```

```deci live
nuno = 100 kg
2 tonnes in nuno
==> 20 nunos
```

```deci live
nuno = 100 kg
1 nuno + 1 kg
==> 101 kg
```

```deci live
[1 kg, 4]
==> [ 1 kg, 4 kg ]
```

## [ENG-307](https://linear.app/decipad/issue/ENG-307)

```deci live
1 cm^3 in cm3
==> 1 cm³
```

```deci live
(cm * cm * cm) in cm3
==> 1 cm³
```

```deci live
(cm * cm * cm) in cm^3
==> 1 cm³
```

```deci live
(1 km * 1 km) in km2
==> 1 km²
```

```deci live
(1 km * 1 km) in km^2
==> 1 km²
```

```deci live
(1 km * 1 km)
==> 1 km²
```

```deci live
(1 km * 1 km) in m^2
==> 1000000 m²
```

```deci live
(1 km * 1 km) in cm^2
==> 10000000000 cm²
```

```deci live
(1 km * 1 km) in cm2
==> 10000000000 cm²
```

## [ENG-326](https://linear.app/decipad/issue/ENG-139)

## [ENG-308](https://linear.app/decipad/issue/ENG-308)

```deci live
round(1/2 pint in ml)
==> 284 ml
```

## [ENG-326](https://linear.app/decipad/issue/ENG-326)

```deci live
3600 kj in kw h
==> 1 kW·h
```

```deci live
1 kwh in kj
==> 3600 kJ
```

```deci live
1 wh in j
==> 3600 J
```

```deci live
1 kwh in wh
==> 1000 Wh
```

## [ENG-327](https://linear.app/decipad/issue/ENG-327)

```deci live
Table = { A = 1 }
select(Table, B)
==> The selected column does not exist in the reference table
```

```deci live
Table = { A = 1 }
select(Table, A)
==> {
  A = [ 1 ]
}
```

```deci live
Table = { A = 1 }
select(Table, B, A)
==> The selected column does not exist in the reference table
```

## [ENG-297](https://linear.app/decipad/issue/ENG-297)

Part 1: splitby was malfunctioning

```deci live
People = {
  Name = ["Peter", "Paul", "Mary"]
  Origin = ["US", "UK", "US"]
}
Countries = splitby(People, People.Origin)
lookup(Countries, Countries.Origin == "UK")
==> {
  Origin = 'UK',
  Values = {
  Name = [ 'Paul' ]
}
}
```

## [ENG-332](https://linear.app/decipad/issue/ENG-332)

```deci live
10 minutes/km in km/hour
==> 6 km per hour
```

```deci live
10 s/km in km/s
==> 0.1 km/s
```

```deci live
10 s/m in m/s
==> 0.1 m/s
```

```deci live
10 s/km^2 in km^2/s
==> 0.1 km²/s
```

```deci live
10 banana/s/m in banana/m/s
==> 10 bananas·m⁻¹·s⁻¹
```

## [ENG-281](https://linear.app/decipad/issue/ENG-281)

```deci live
[10 .. 1 by -2]
==> [ 10, 8, 6, 4, 2 ]
```

```deci live
[10 .. 5]
==> [ 10, 9, 8, 7, 6, 5 ]
```

```deci live
[date(2003) .. date(2000) by month]
==> [ month 2003-12, month 2003-11, month 2003-10, month 2003-09, month 2003-08, month 2003-07, month 2003-06, month 2003-05, month 2003-04, month 2003-03, month 2003-02, month 2003-01, month 2002-12, month 2002-11, month 2002-10, month 2002-09, month 2002-08, month 2002-07, month 2002-06, month 2002-05, month 2002-04, month 2002-03, month 2002-02, month 2002-01, month 2001-12, month 2001-11, month 2001-10, month 2001-09, month 2001-08, month 2001-07, month 2001-06, month 2001-05, month 2001-04, month 2001-03, month 2001-02, month 2001-01, month 2000-12, month 2000-11, month 2000-10, month 2000-09, month 2000-08, month 2000-07, month 2000-06, month 2000-05, month 2000-04, month 2000-03, month 2000-02, month 2000-01 ]
```

```deci live
[date(2003) .. date(2000)]
==> [ year 2003, year 2002, year 2001, year 2000 ]
```

```deci live
[10 .. 11 by -2]
==> Invalid step in sequence: sequence is ascending but step is negative
```

## [ENG-336](https://linear.app/decipad/issue/ENG-336)

```deci live
Datez = { Year = [date(2021) .. date(2025)] }
DatezA = last(Datez.Year)
DatezFoo = date(2025)
DatezA == DatezFoo
==> true
```
