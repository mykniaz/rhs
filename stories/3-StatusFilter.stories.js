import React from 'react';
import { storiesOf } from '@storybook/react';

import { select, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ItemStatusFilter from '../src/components/ItemStatusFilter';


storiesOf('StatusFilter', module)
  .addDecorator(withKnobs)
  .add('StatusFilter', () => {
    const label = 'ActiveStatus';
    const options = {
      None: null,
      All: '',
      Active: 'active',
      Done: 'done',
    };
    const defaultValue = 'None';

    const type = select(label, options, defaultValue);

    return (
      <div className="container">
        <ItemStatusFilter onChangeType={action('onChangeType')} type={type} />
      </div>
    );
  });
