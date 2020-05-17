# Development

### Customize mdx-go

At this time, mdx-go doesn't have flexibility to customize webpack index.html. Follow this to customize it locally:

```
$ code node_modules/mdx-go/lib/html-plugin.js

defaultTemplate
  customize HTML
```

and

```
$ code node_modules/mdx-go/lib/build.js

new HTMLPlugin, add:
  css: [page.path + '/main.css']
```

and

```
$ code node_modules/mdx-go/lib/dev.js

config.module.rules.push({
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
})
```
