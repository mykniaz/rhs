const path = require('path');

module.exports = async ({ config, mode }) => {
	config.module.rules.push({
		test: /\.scss$/,
		use: ['style-loader', 'css-loader', 'sass-loader'],
		include: path.resolve(__dirname, '../'),
	});

	config.module.rules.push({
		test: /\.stories\.jsx?$/,
		loaders: [
			{
				loader: require.resolve('@storybook/source-loader'),
				options: {
					prettierConfig: {
						printWidth: 100,
						singleQuote: false,
					},
				},
			},
		],
		enforce: 'pre',
	});

	return config;
};
