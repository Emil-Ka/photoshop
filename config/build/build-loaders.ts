import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const svgLoader: RuleSetRule = {
        test: /\.svg$/,
        use: '@svgr/webpack',
    };

    const cssLoader: RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader', // переводит
                options: {
                    modules: {
                        auto: /\.module\.s[ac]ss$/,
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader', // переводит sass в css
        ],
    };

    const typescriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader: RuleSetRule = {
        test: /.(png|jpe?g|gif|woff|woff2)$/i,
        use: 'file-loader',
    };

    return [svgLoader, fileLoader, cssLoader, typescriptLoader];
};
