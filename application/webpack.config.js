const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const tsRule = {
    test: /\.tsx?/,
    exclude: /node_modules/,
    enforce: 'pre',
    use: 'tslint-loader',
};

const tsRuleLoader = {
    test: /\.tsx?/,
    exclude: /node_modules/,
    use: 'ts-loader',
}

const scssRule = {
    test: /\.s?css/,
    use: [
        "style-loader",
        "css-loader",
        "sass-loader"
    ]
};

const devConfig = {
    mode: "development",
    entry: './src/application.ts',
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            tsRule,
            tsRuleLoader,
            scssRule
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".scss"]
    },
    devtool: 'eval-source-map',
    devServer: {
            contentBase: './dist'
        },
    plugins: [
        new WebpackShellPlugin({
            onBuildStart: ['./remove-dist.sh', './copy-static.sh']
        })
    ]
}

module.exports = (env) => {
    return devConfig;
}