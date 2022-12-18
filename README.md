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
