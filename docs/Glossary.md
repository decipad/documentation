---
sidebar_position: 500
---

# Glossary

Learn about terms and references commonly used in the documentation.

### Argument

An argument is a variable that affects a function's result.

### Binary operator

A binary operator is an operator that operates on two operands and manipulates them to return a result.

### Boolean

A Boolean is a data type with two possible values: `true` or `false`.

### Calculations block

The calculations block is the place where you can type numbers and perform operations in a more natural way, powered by the Decipad language. In the calculations block, you can type numbers, units, variables, functions, as well as create tables.

```deci live
2 + 2
==> 4
```

### Condition

A conditional statement or conditional is an if-then-else statement.

```deci live
sun_is_down = false
if sun_is_down then "dinner👩‍🍳" else "lunch💪"
==> 'lunch💪'
```

### Decipad language

The language is how you interact and use data in a calculations block.

```deci live
CurrentSavings = 50000
==> 50000
```

### Dimension

A dimension is a category that can be broken down into different items.

### Exponentiation

Exponentiation is the mathematical operation of raising a quantity to a power.

```deci live
(3 meters) ** 2
==> 9 meters²
```

### Expression

An expression is a combination of numbers, variables, functions such as `+`, `-`, `*`, etc.

```deci live
6 / 2
==> 3
```

### Function

A function is a block of reusable Decipad language used to perform a set of operations.

```deci live
max([1, 3, 2])
rounddown(2.9)
==> 2
```

### Integer

An integer is a whole number, not a fractional number, that can be positive, negative or 0.

```deci live
21
-21
0
==> 0
```

### Lookup

Lookup is a pre-built function that can be used to access values in a table to be used in further calculations.

```deci live
Employees = {
  name = ["Jane", "Peter", "John"]
  Office = ["USA", "Germany", "Japan"]
}

lookup(Employees, "Peter")
==> {
  name = 'Peter',
  Office = 'Germany'
}
```

### Notebook

A notebook is a place where narrative and data coexist.

## Operand

An operand is a number or quantity upon which a mathematical operation is performed.

## Operator

An operator is a symbol used to perform a mathematical operation.

```deci live
5 - 7
8 + 6
10 / 2
12 * 5
==> 60
```

## String

A string is a data type used to represent text.

## Text block

A text block is a paragraph of text with different text styling options.

## Unit

A unit is any type of measurement. The Decipad language understands some units and knows how to convert between units of that same quantity. Units can be simple and composed.

```deci live
2 apples
50 miles/hour
==> 50 miles per hour
```

## Variable

A variable is a way to store a value in a name, which can then be used in further calculations. Declaring a variable is assigning it a value using the `=` operator.

```deci live
Total_Revenue = 50000 USD
Total_Costs = 23000 USD
Yearly_Profit = Total_Revenue - Total_Costs
==> 27000 $
```
