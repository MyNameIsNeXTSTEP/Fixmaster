const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DefinePlugin = require('webpack').DefinePlugin;
const path = require('path');

module.exports = (env) => {
    const isProd = env.NODE_ENV === 'production';
    const envFile = isProd ? '.env.prod' : '.env.dev';
    const envPath = path.resolve(__dirname, envFile);
    const envVars = require('dotenv').config({ path: envPath }).parsed || {};
    return {
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './apps/b2c-domru'),
            }
        },
        mode: isProd ? 'production' : 'development',
        entry: './src/index.tsx',
        output: {
            path: __dirname + '/dist/',
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    resolve: {
                        extensions: ['.ts', '.tsx', '.js', '.json'],
                    },
                    use: 'ts-loader',
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.(png|jp(e*)g|svg|gif)$/,
                    type: "asset/resource",
                },
            ]
        },
        devServer: {
            historyApiFallback: true,
            hot: true
        },
        devtool: isProd ? undefined : 'source-map',
        plugins: [
            new DefinePlugin({
                'process.env': JSON.stringify(envVars),
            }),
            new HtmlWebpackPlugin({
                template: 'index.html',
            }),
            new MiniCssExtractPlugin(),
        ],
    }
};
