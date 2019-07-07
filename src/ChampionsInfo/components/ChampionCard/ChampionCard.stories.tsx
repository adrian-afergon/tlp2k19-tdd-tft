import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {ChampionCard} from './ChampionCard';
import {Champion} from '../../models/Champion';

const aChampion: Champion = {
  id: 'irrelevant id',
  name: 'Aatrox',
  image: 'irrelevant image',
  info: 'This is an irrelevant information about the champion',
};
storiesOf('ChampionCard', module)
  .add('with text', () => (
  <ChampionCard champion={aChampion}/>
));
