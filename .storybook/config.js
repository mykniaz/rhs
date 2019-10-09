import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
		defaultViewport: 'someDefault',
	},
});
