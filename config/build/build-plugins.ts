import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
    ProgressPlugin,
    WebpackPluginInstance,
    DefinePlugin,
    HotModuleReplacementPlugin,
} from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types';

export const buildPlugins = ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] => {
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: paths.html,
    });

    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[contenthash].css',
    });

    const progressPlugin = new ProgressPlugin();

    const definePlugin = new DefinePlugin({
        IS_DEV: JSON.stringify(isDev),
    });

    const hotModuleReplacementPlugin = new HotModuleReplacementPlugin();

    const reactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin();

    const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
        openAnalyzer: false,
    });

    return [
        reactRefreshWebpackPlugin,
        hotModuleReplacementPlugin,
        htmlWebpackPlugin,
        miniCssExtractPlugin,
        progressPlugin,
        definePlugin,
        // bundleAnalyzerPlugin,
    ];
};
