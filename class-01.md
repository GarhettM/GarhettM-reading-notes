#### Basic structure of a basic html website

`<html>`

`<body>`

`<h1>This is the Main Heading</h1>`

`<p>This text might be an introduction to the rest of
the page. And if the page is a long one it might
be split up into several sub-headings.<p>`

`<h2>This is a Sub-Heading</h2>`

`<p>Many long articles have sub-headings so to help
you follow the structure of what is being written.
There may even be sub-sub-headings (or lower-level
headings).</p>`

`<h2>Another Sub-Heading</h2>`

`<p>Here you can see another sub-heading.</p>`

`</body>`

`</html>`

Attributes in tags such as `<p lang="en-us">` provide additional information. Theyre always in the opening bracket.

`<!DOCTYPE html>` - This is the doctype used for html5. This will tell the browser that everything on the page uses html5. This will also help the browser render CSS correctly.

`<!-- This is a Comment -->`

`id="name"` is another attribute used to single something out. You can then style it differently then other "id" types in CSS. It is considered a global attribute.

`class="name"` will classify elements. In CSS you can call upon all class attributes once in an element and it will be styled across the board the same as all the other class attributes of the same name.

An example of "block elements" are `<h1><p><ul><li>`
They always start on a new line.

Inline elements always appear on the same line as the text around them. Ex. `<b><em>`

`<div>` allows you to group of elements together in an entire block on the page. Using CSS on a div block will change all the styles and spacing of the elements inside. It is helpful to use a comment after div blocks to clearly see the code of the page.

`<span>` is used like `<div>` only as inline text. You use this to show a group of textt inline when other elements dont differentiate the text around it enough. USually used with an id or class tag attribute.

`<iframe>` These things are basically windows on your page that show windows on other pages. Ex google maps inside your page showing how to get somewhere.

Escape characters like '&' and < might need to be spelled out to appear on the page. Google their escape tags to be able to pront them on the page.

`<aside>` is used to plant blocks that relate to an article it is beside to.

`<hgroup>` groups different headings together as one heading.

`<figure>` shows pictures graphs and things like that.

Use sitemaps to plan for websites that youre just starting to build and follow the layout for the whole project. You can design a sitemap and code all the individual pieces to it before supplying content and style.

Similarly, wireframes can help design the code early on to speed up the process. 

## Java Script

A script is a series of instructions that a
computer can follow to achieve a goal.

### for scripts... 
You really want to define the goal of the script before you write it. Then design the script by splitting into individual tasks like a recipe. Follow the computers thinking process to determine what steps need to be where. Then code each step.

A simple process is to create a flow chart for the function. the flowchart will show the direction of information as the computer runns through each step.

`<html>` is the content layer

`{css}` is the presentation layer

`javascript()` is the behavioral layer

