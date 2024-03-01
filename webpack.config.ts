import path from 'path';

import {
    buildWebpackConfig, BuildPaths, BuildOptions, BuildEnv,
} from './config/build';

export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const port = env.port || 3000;

    const isDev = mode === 'development';

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const config: BuildOptions = {
        mode,
        port,
        paths,
        isDev,
    };

    return buildWebpackConfig(config);
};
