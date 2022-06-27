# Quick Start

install hugo cli

```bash
$ brew install hugo
```

run

```bash
$ hugo server -D
```

```bash
$ cd themes/Nextjs
$ yarn watch
```

# Memo

1. 

Nextでexportされた_nextディレクトリをpublicに公開するために、config.tomlを編集

```toml
staticDir = ['static', 'themes/Nextjs/layouts']
```