# JavaScript Data Structures

[![Try @codycraven/data-structs on RunKit](https://badge.runkitcdn.com/@codycraven/data-structs.svg)](https://npm.runkit.com/@codycraven/data-structs) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Common data structures for JavaScript.

## Data structures

### Lists

1. [Doubly Linked Lists](src/doubly-linked-list/)

## Contributing

First install dependencies:

```bash
npm install -D
```

-   Build:

    ```bash
    npm run build
    # or watch
    npm run build:watch
    ```

-   Test:

    ```bash
    npm test
    # or watch
    npm run test:watch
    ```

-   Lint:

    ```bash
    npm run lint
    ```

    Or better yet, install a suitable eslint extension in your code editor to receive realtime feedback while coding.

-   Format:

    ```bash
    npm run format
    ```

    This project utilizes [Prettier](https://github.com/prettier/prettier) to enforce code formatting. Install a Prettier extension in your IDE to receive on-save or on-demand formatting.

## Releasing

This project uses [SemVer](https://semver.org/), use the npm version command to bump the appropriate version:

```bash
npm version major
# or
npm version minor
# or
npm version patch
```

These commands will create the appropriate git tag to accompany it.

After the version is tagged, release it with `npm`:

```bash
npm publish
```
