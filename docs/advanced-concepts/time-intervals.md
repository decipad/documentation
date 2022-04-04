---
sidebar_position: 120
---

# Time intervals

## What they are

You can calculate a time interval between two dates:

```deci live
date(2020-02-23) - date(2020-01-12)
==> 42 days
```

You can then convert a time interval to, let's say, hours:

```deci live
date(2020-02-23 17:35) - date(2020-01-12 05:23) as hours
==> 1020.2 hours
```

or minutes:

```deci live
date(2020-02-23 17:35) - date(2020-01-12 05:23) as minutes
==> 61212 minutes
```

or seconds:

```deci live
date(2020-02-23 17:35:43) - date(2020-01-12 05:23:12) as seconds
==> 3672751 seconds
```

or milliseconds:

```deci live
date(2020-02-23 17:35:43) - date(2020-01-12 05:23:12) as milliseconds
==> 3672751000 milliseconds
```

## Functions on dates

[Here is a list of all the functions that work on dates](/docs/built-in-functions/functions-for-dates).
