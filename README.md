# Emit file plugin for Webpack

[![npm: emit-file-webpack-plugin][1]][2]
[![License][3]][4]

Webpack plugin to emit files. The only one that does it right.

## Installation

- With `npm`:
```cmd
npm i --save-dev emit-file-webpack-plugin
```

- With `yarn`:
```cmd
yarn add --dev emit-file-webpack-plugin
```

## Usage

**webpack.config.js**

```js
const webpack = require('webpack');
const EmitFilePlugin = require('emit-file-webpack-plugin');

module.exports = {
    // ...
    plugins: [
        new EmitFilePlugin({
            // OPTIONAL: defaults to the Webpack output path.
            // Output path.
            // Can be relative (to Webpack output path) or absolute.
            path: `.`,

            // REQUIRED.
            // Name of the file to add to assets.
            filename: `index.js`,

            // REQUIRED.
            // File content. Can be either a string, a buffer, or a (asynchronous) function.
            // If the resulting object is not a string or a buffer, it will be converted to JSON.
            content: `console.log('Hello world!');`,

            // OPTIONAL: defaults to the webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL.
            // Asset processing stage.
            // https://webpack.js.org/api/compilation-hooks/#processassets
            stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL
        })
    ]
};
```

[1]: https://img.shields.io/npm/v/emit-file-webpack-plugin?cacheSeconds=3600
[2]: https://www.npmjs.com/package/emit-file-webpack-plugin

[3]: https://img.shields.io/github/license/Kir-Antipov/emit-file-webpack-plugin.svg?style=flat&label=License&cacheSeconds=36000
[4]: https://raw.githubusercontent.com/Kir-Antipov/emit-file-webpack-plugin/master/LICENSE.md