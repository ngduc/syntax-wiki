# Development

Node v13.9.0

### Publish

- Run `$ yarn build`, then `$ cd dist`
- Run `$ npx vercel . --prod`

### Themes

- Copy and customize CSS from https://github.com/PrismJS/prism-themes
- Put in main.css

### Customize mdx-go

At this time, mdx-go doesn't have flexibility to customize webpack index.html. Follow this to customize it locally:
- NOTE: these changes will be lost after running "$ yarn..."

```
$ code node_modules/mdx-go/lib/html-plugin.js

+ after: defaultTemplate
  customize (replace) the HTML string with content of tools/index.html
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
