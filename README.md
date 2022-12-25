# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

doc: https://docusaurus.io/docs

website: https://doongz.github.io/

## Attention

1. 不要在 docs 目录下写任何东西，一律从其他仓拷贝过来；
2. 文件名中不能有 `[]`；
3. `<>` 不能直接写在 md 中，如 `vector<int>` `<stdlib.h>`，一定要用 `  ` 包住；
4. 不能超链接不存在的本地文件，否则报错 `[WARNING] Docs markdown link couldn't be resolved`；
5. `export` 这样的字符，要用 `  ` 包住；
6. latex 公式中的中文用 `\text{}` 包起来；

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
$ ./build.sh
```

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

