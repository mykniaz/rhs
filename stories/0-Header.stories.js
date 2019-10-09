import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  number,
} from '@storybook/addon-knobs';

import AppHeader from '../src/components/AppHeader';

import 'bootstrap/scss/bootstrap.scss';

storiesOf('AppHeader', module)
  .addDecorator(withKnobs)
  .add('AppHeader', () => {
    const todo = number('Todo', 2);
    const done = number('Done', 3);
    return <AppHeader todo={todo} done={done} />;
  });
