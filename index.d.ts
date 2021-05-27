import { Source } from "webpack-sources";

type RawContent = string | Buffer | Source | any;

type Content = RawContent |
    ((assets: Record<string, Source>) => RawContent) |
    ((assets: Record<string, Source>) => Promise<RawContent>);

/**
 * The EmitFilePlugin config.
 */
class EmitFilePluginOptions {
    /**
     * OPTIONAL: defaults to the Webpack output path.
     * Output path.
     * Can be relative (to Webpack output path) or absolute.
     */
    path?: string;

    /**
     * REQUIRED.
     * Name of the file to add to assets.
     */
    filename: string;

    /**
     * OPTIONAL: defaults to false.
     * Adds the compilation hash to the filename. You can either choose within the filename
     * where the hash is inserted by adding `[hash]` i.e. `test.[hash].js` or the hash will be
     * appended to the end of the file i.e. `test.js?hash`.
     */
    hash?: boolean;

    /**
     * OPTIONAL: defaults to the webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL.
     * Asset processing stage.
     */
    stage?: number;

    /**
     * REQUIRED.
     * File content. Can be either a string, a buffer, or a (asynchronous) function.
     * If the resulting object is not a string or a buffer, it will be converted
     * to string via `.toString` (if the function was overridden) or `JSON.stringify`.
     */
    content: Content;
}

/**
 * Webpack plugin to emit files.
 */
class EmitFilePlugin {
    /**
     * Webpack plugin to emit files.
     *
     * @param options The EmitFilePlugin config.
     */
    constructor(options: EmitFilePluginOptions);
}

export default EmitFilePlugin;
