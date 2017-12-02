const path = require('path')
const webpack = require('webpack')

module.exports = {

    entry: './src/app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
    },

    resolve: {
        alias: {}
    },

    module: {
        rules: [
            {
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "/dist"),
		historyApiFallback: {
            disableDotRule: true,
            index: 'app.html',
			rewrites: [
                { from: /./, to: 'app.html' }
			]
		},
		noInfo: false
    },
    
    devtool: "source-map"
}