const path = require('path');

module.exports = {
    mode:      'production',
    entry:     path.resolve(__dirname, './src/index.js'),

    module:    {
        rules: [{
            test:    /\.m?js$/,
            include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/@zepdev/web-components-library')],
            use:     {
                loader:  'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                'useBuiltIns': 'entry',
                                'corejs': { version: "3.21.1", proposals: true }
                            }
                        ]
                    ]

                }
            }
        }]
    },
    devtool: 'source-map',
    output:    {
        path:     path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
};
