# Development

### Themes

Copy CSS from https://github.com/PrismJS/prism-themes

### Customize mdx-go

At this time, mdx-go doesn't have flexibility to customize webpack index.html. Follow this to customize it locally:

```
$ code node_modules/mdx-go/lib/html-plugin.js

+ after: defaultTemplate
  customize HTML
```

and

```
$ code node_modules/mdx-go/lib/build.js

+ after: new HTMLPlugin, add:
  css: [page.path + '/main.css']
```

and

```
$ code node_modules/mdx-go/lib/dev.js

+ after: const compiler = webpack(config)
config.module.rules.push({
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
})
```
