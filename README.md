# Docs

Docs are built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.x

### Local Development

```
$ nx serve docs
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build:docs
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Test

```
$ nx test docs -- [--update]
```

This runs the snapshot tests. Snapshots are found in code blocks (after the `==>`). Add `-- --update` to update those snapshots.
