---
to: src/<%= path %>/<%= name %>/<%= name %>.stories.tsx
---
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {<%= name %>} from './<%= name %>';

storiesOf('<%= name %>', module)
  .add('with text', () => (
  <<%= name %> />
));
