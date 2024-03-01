import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types';

export const buildResolvers = ({ paths }: BuildOptions): ResolveOptions => ({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [paths.src, 'node_modules'],
});
