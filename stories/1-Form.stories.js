import React from 'react';
import Form from '../src/components/Form';

import {storiesOf} from "@storybook/react";

storiesOf('Form', module)
	.add('Form', () => <Form onAdd={() => {}} />);
