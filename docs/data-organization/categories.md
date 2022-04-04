---
sidebar_position: 150
---

# Categories

:::caution `Experimental Feature`
Categories are currently being developed. Limited availability.
:::

Categories are collections of elements that share common properties. They are defined with the keyword `categories` and wrapped by `[]`. Each category is separated using `,`:

```deci live
InternetProvider = categories["AV&T", "Zerivon"]
==> [ 'AV&T', 'Zerivon' ]
```

## Lists with categories

Lists can be organized with categories. For example, the list `Cost` with the category `InternetProvider` to define a monthly price for each internet provider:

```deci live
InternetProvider = categories["AV&T", "Zerivon"]
Cost[InternetProvider] = 100$/month
==> [ 100 $ per month, 100 $ per month ]
```

Categories can be reused across multiple lists. For instance, the category `InternetProvider` to define the lists `Cost` and `PhonePlan`:

```deci live
InternetProvider = categories["AV&T", "Zerivon"]
Cost[InternetProvider] = 100$/month
PhonePlan[InternetProvider] = [true, false]
==> [ true, false ]
```

### Operations

All operations applied to a categorized list are replicated. For example, to find the yearly subscription amount of each internet provider:

```deci live
InternetProvider = categories["AV&T", "Zerivon"]
Cost[InternetProvider] = 100$/month
Cost * (12 months)
==> [ 1200 $, 1200 $ ]
```

### Access

Subsets of categorized lists are accessed with a condition. For example, the `Cost` of subscribing 2 years of internet with `AV&T`:

```deci live
InternetProvider = categories["AV&T", "Zerivon"]
Cost[InternetProvider] = 100$/month
Cost[InternetProvider == "AV&T"] * (24 months)
==> [ 2400 $ ]
```
