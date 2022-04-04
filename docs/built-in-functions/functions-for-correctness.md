---
sidebar_position: 4000
---

# Functions for correctness

The following functions help you ensure your notebook is always in a correct state, by double-checking your calculations programmatically.

## assert

Creates an error in the notebook if the condition is not true

```deci live
ledger = 5000 $
moneyInBank = 4999$
assert(ledger == moneyInBank)
==> User defined pre-condition was not met
```
