---
sidebar_position: 310
---

# Dimensions

## Why it matters

A dimension is a characteristic of an object that can be given different values. For example, a geographic location could have dimensions called latitude, longitude, or country.

In this example you get quotes to refurbish your kitchen:

```deci live
Quote = {
  Name = ["Bhakta Construction", "Precido Builders", "MBD Firm"],
  Price = [750 £/sqft, 900 £/sqft, 435 £/sqft]
}
==> {
  Name = [ 'Bhakta Construction', 'Precido Builders', 'MBD Firm' ],
  Price = [ 750 £/ft², 900 £/ft², 435 £/ft² ]
}
```

The final price will depend on how big the kitchen is:

```deci live
Job = {
  Name = ["Small", "Medium", "Large"],
  Size = [10 sqft, 15 sqft, 25 sqft]
}
==> {
  Name = [ 'Small', 'Medium', 'Large' ],
  Size = [ 10 ft², 15 ft², 25 ft² ]
}
```

You can now calculate quotes:

```deci live
Quote = {
  Name = ["Bhakta Construction", "Precido Builders", "MBD Firm"],
  Price = [750 gbp/sqft, 900 gbp/sqft, 435 gbp/sqft]
}
Job = {
  Name = ["Small", "Medium", "Large"],
  Size = [10 sqft, 15 sqft, 25 sqft]
}
Quote.Price * Job.Size
==> [ [ 7500 £, 11250 £, 18750 £ ], [ 9000 £, 13500 £, 22500 £ ], [ 4350 £, 6525 £, 10875 £ ] ]
```

Using dimensions has two main advantages:

1.  You will be able to add and remove characteristics without breaking your notebook
2.  In the future, you will be able to re-use dimensions across your notebooks

## Converting Units

Just like everywhere in Decipad you can convert units:

```deci live
Quote = {
  Name = ["Bhakta Construction", "Precido Builders", "MBD Firm"],
  Price = [750 £/sqft, 900 £/sqft, 435 £/sqft]
}

InMeters = {
  Name = Quote.Name,
  Price = ceil(Quote.Price in £/m^2)
}
==> {
  Name = [ 'Bhakta Construction', 'Precido Builders', 'MBD Firm' ],
  Price = [ 8073 £·m⁻², 9688 £·m⁻², 4683 £·m⁻² ]
}
```

## Supported units

[Here is a list of all the units Decipad knows](/docs/language/units/supported-units).
