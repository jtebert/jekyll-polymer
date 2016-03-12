---
layout: post
title:  "Typography"
tags:
    - markdown
    - design
    - code

---

Here are the different features and styles available for posts written in Markdown. To see how to create them, check out the source markdown file.

<!--more-->

# Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

# Tables

**Markdown Extra** has a special syntax for tables:

Item      | Value
--------- | -----
Computer  | 1600 USD
Phone     | 12 USD
Pipe      | 1 USD

You can specify column alignment with one or two colons:

| Item      |    Value | Qty  |
| :-------- | --------:| :--: |
| Computer  | 1600 USD |  5   |
| Phone     |   12 USD |  12  |
| Pipe      |    1 USD | 234  |

# Lists

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

# Blockquotes

You can write block quotes.

> This is a block quote.
> It's split over multiple lines.
>
> It can also have multiple paragraphs.

# Math (with MathJax)

You can render *LaTeX* mathematical expressions using **MathJax**, as on [math.stackexchange.com][1]:

There are inline equations like \\( y = x + 2 \\) indicated by `\\( ... \\)`.

You can also display an equation (not inline displayed) using inline code, like \\[ y = x + 4\\] which you do with `\\[ ... \\]`.

Or you can display a block of math by surrounding it with `$$ ... $$`. Like this:

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> **Tip:** Make sure you include MathJax into your publications to render mathematical expression correctly. Your page/template should include something like: 

```
<script type="text/javascript" src="https://stackedit.io/libs/MathJax/MathJax.js?config=TeX-AMS_HTML"></script>
```

# Code

## Inline code

Code embedded in a paragraph looks like `this is code`. Code can also be in blocks with or without line numbers.

## Code blocks

Code blocks have syntax highlighting courtesy of highlight.js. You can specify the code language and whether you want the code block to include line numbers. (You can include line numbers using just `linenos` instead of `linenos=table`, but this puts the line numbers in the same lines as the code so that it becomes impossible to copy and paste.)

Without line numbers:

{% highlight ruby %}
  def print_hi(name)
    puts "Hi, #{name}"
  end
  print_hi('Tom')
  #=> prints 'Hi, Tom' to STDOUT. This is a long line to test scrolling if it goes past the box.
{% endhighlight %}

With line numbers:

{% highlight ruby linenos %}
  def print_hi(name)
    puts "Hi, #{name}"
  end
  print_hi('Tom')
  #=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}


# Definition Lists

**Markdown Extra** has a special syntax for definition lists too:

Term 1
Term 2
:   Definition A
:   Definition B

Term 3

:   Definition C

:   Definition D

	> part of definition D

# Dividers

Divide up sections and stuff with dividers.

---

They look like that.

# Font weights and styles

This text is **bold text**.

This is *italicized* text.

# Links and Footnotes

You can create footnotes like this[^footnote].

  [^footnote]: Here is the *text* of the **footnote**.

You can embed links with a direct link, like [this link to Google](http://www.google.com). Links can also be in a separated form like [this link to the Jekyll documention][jekyll]. (That's useful if you want to link to the same website multiple times [like this][jekyll].)

[1]: http://math.stackexchange.com/
[jekyll]:      http://jekyllrb.com