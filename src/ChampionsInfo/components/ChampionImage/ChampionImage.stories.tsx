import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ChampionImage } from './ChampionImage';
import { Champion } from '../../models/Champion';

const aChampion: Champion = {
  id: 'irrelevant id',
  image: 'irrelevant img',
  name: 'irrelevant name',
};

storiesOf('ChampionImage', module).add('with champion', () => (
  <ChampionImage champion={aChampion} />
));
