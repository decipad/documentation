---
sidebar_position: 130
---

# Importing data

## Import data from a link

To import data into a notebook with a link, use the function `fetch`, followed by the raw data URL between `"`.

In this example a CSV file is used.

```deci live
fetch "https://decipad-packages.s3.eu-west-2.amazonaws.com/static/example-1.csv"
==> fetch is not defined
```

The data will be imported into a table.
Check [the section about tables](/docs/organising-your-data/tables) to learn how to manipulate tables.

## Import data from a file

:::caution `Experimental Feature`
Importing data from a file is currently being developed. Limited availability.
:::

To import data into a notebook from a file simply drag the file into a notebook.

## Supported data types

Decipad supports the following file types:

- CSV files (comma-separated text format, which is exportable from most spreadsheet apps)
- [Arrow files](https://arrow.apache.org)

## Name imported data

Give a name to your imported data with a [variable](../language/variables):

```deci live
MyExample = fetch "https://decipad-packages.s3.eu-west-2.amazonaws.com/static/example-1.csv"
==> fetch is not defined
```

## Access columns

Extract a list from a table with the `.` operator to access columns:

```deci live
MyExample = fetch "https://decipad-packages.s3.eu-west-2.amazonaws.com/static/example-1.csv"

MyExample.Col2
==> fetch is not defined
```

Check [the section about lists](/docs/organising-your-data/lists) to learn more.
