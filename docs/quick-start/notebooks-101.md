---
sidebar_position: 7
---

# Notebooks 101

Decipad notebooks bring together thoughts, data and calculations.

## Slash command menu

Type `/` on a new paragraph and access a menu of different [blocks](../blocks).

<img width="300" alt="How slash commands work in Decipad" src="https://user-images.githubusercontent.com/76447845/149754701-00998f34-37fb-40b1-b921-278d1ae38861.png" />

Select any block by typing its name or scrolling and pressing `enter`.

![heading](https://user-images.githubusercontent.com/76447845/149759719-390e3a33-da96-4cad-af83-df375249b47f.gif)

## Writing and styling

Highlight any text and a menu of styling will appear. Text can be transformed into a **paragraph**, **heading 1** or **heading 2**.

To style use **bold** `B`, _italics_ `I`, **underlined** `U` or `monospace code` `<>`.

![Jan-17-2022 11-59-58](https://user-images.githubusercontent.com/76447845/149757797-ffd467a6-9a37-4322-970d-437ec71ff0e8.gif)

## Calculation blocks

Add a `/calculation block` onto a notebook and explore the [Decipad language](../language) to play with numbers.

![calcBlock2](https://user-images.githubusercontent.com/61380949/150771744-edbe5396-6c36-4d1d-ab54-0ac1e68bbbd2.gif)

The results of your calculations will always be displayed per line except for the result of your last operation, which will be expanded below the block by default.

To exit the calculations block and go back to text mode, simply click outside of it or press `⌘/ctrl` + `Enter`.

## Tables

Add a `/table` to input data in a tabular format to your notebook without using the language.

![tableBlock](https://user-images.githubusercontent.com/61380949/150771780-ec82f2ef-dc64-4122-842f-c305072484f8.gif)

Data in a table can be text, numbers or dates. You can also define the unit of your numbers. Like with numbers in calculations blocks, you can name your table and reuse it across your notebook.

For more complex operations with tables, like augmenting them with formulas in columns, you'll need to rely on the [Decipad language for tables](/docs/organising-your-data/tables).

## Markdown Support

Besides the menu styling menu that pops up when you select text, Decipad supports a number of markdown style shortcuts to make editing and writing faster for those of you who prefer these. Supported elements are:

### Full Block Commands

- `##` followed by a `space` to create an **heading 1**
- `###` followed by a `space` to create an **heading 2**
- \`\`\`followed by a`space` to create a **calculations block**
- `-` or `*` followed by a `space` to create a **bullet list**
- `1.` followed by a `space` to create a **numbered list**
- `>` followed by a `space` to create a **block quote**

### Inline Text Formatting Commands

- Wrap words between `*` and `*` or `_` and `_` for **italic**
- Wrap words between `**` and `**` for **bold**
- Wrap words between `~~` and `~~` for **strikethrough**
- Use the notation `[link name](url)` to insert a **link**
- Wrap words between `and` for **inline code**
