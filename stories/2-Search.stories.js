import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


import SearchPanel from '../src/components/SearchPanel';

storiesOf('SearchPanel', module)
  .add('SearchPanel', () => <SearchPanel onSearchInput={action('onSearchInput')} onChangeType={action('onChangeType')} />);
