# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

doc: https://docusaurus.io/docs

### Installation

```
$ npx create-docusaurus@latest my-website classic
```

### Local Development

```
$ npx docusaurus start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npx docusaurus build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npx docusaurus deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npx docusaurus deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


文件名中不能有 []

`#` 标题 和 `##` 之间应该要求写

不要在 docs 目录下写任何东西，一律从其他仓拷贝过来