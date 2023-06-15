const path = require('path'); //built-in module from the node library
//entry property and output - where to be output
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist/assets'),
        },
        compress: true,
        port: 9000,
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};

