import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchPanel from '../src/components/SearchPanel';

storiesOf('SearchPanel', module)
  .add('SearchPanel', () => <SearchPanel onSearchInput={() => {}} onChangeType={() => {}} />);
