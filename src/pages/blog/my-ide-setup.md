---
layout: '../../layouts/BlogPost.astro'
title: "My IDE Setup"
description: "An insight into my IDE setup and the tools I use to develop"
publishDate: "18 Aug 2022"
draft: false
---

I&apos;d like to preface this by saying that these are *my* preferences and by no means should you adopt them just because you've seen me using them.

![VS Code](https://i.postimg.cc/C1y56173/vs-code.png "VS CODE")

So, let&apos;s get into it. I use VS Code for my IDE, I like it as it&apos;s fairly lightweight (compared to full-fat Visual Studio Community),
has tonnes of features, and supports extensions.

The colour theme I use is called [LaserWave High Contrast](https://marketplace.visualstudio.com/items?itemName=jaredkent.laserwave).
Other good themes to note are [Synthwave &apos;84](https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode), and 
[One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme).

#### The extensions I run are:

- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [env-cmd-file-syntax](https://marketplace.visualstudio.com/items?itemName=Nixon.env-cmd-file-syntax)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Open in new instance](https://marketplace.visualstudio.com/items?itemName=sydeslyde.open-in-new-instance)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)

## Why I like these extensions:
### Auto Rename Tag
I like Auto Rename Tag as it allows me to quickly rename pairs of XML, JSX, HTML, and other tags. It is especially useful as I find myself renaming tags
quite often and this makes it that much easier.

### env-cmd-file-syntax
I like this because it highlights key-value strings in .env files. It just makes it easier to see where keys end and values start.

### Markdown All in One
I like this extension as it makes it easier to write markdown files (like the one I'm writing now), adds a preview directly inside VS Code,
provides auto completion, and adds keyboard shortcuts.

### Open in new instance
This extension is pretty useful, it allows me to open a file in a new instance of VS Code, great for when I need to drag a file to another monitor
to check/compare something.

### Prettier - Code formatter
Prettier is great, it allows me to have consistent code styling across all my files without worrying about indentation/readability. With one keyboard
shortcut (SHIFT + ALT + F), I can have well formatted readable code.

### Prisma
This extension is great, it adds syntax highlighting to `.prisma` files, surfaces warnings and errors in the schema, adds code completion, documentation 
help, and formatting.

I hope you enjoyed this short post about the tools that I use to develop, see you in the next post!


```html
<html lang="en" class="">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>{title}</title>
		<script src="/nav.js" is:inline></script>
	</head>
	<body class="bg-zinc-800 font-inter">
		<slot />
	</body>
</html>
```