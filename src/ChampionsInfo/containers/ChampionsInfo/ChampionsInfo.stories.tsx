import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {ChampionsInfo} from './ChampionsInfo';

storiesOf('ChampionsInfo', module)
  .add('with text', () => (
  <ChampionsInfo />
));
