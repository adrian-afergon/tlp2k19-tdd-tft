import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { ChampionSelector } from './ChampionSelector';
import { Champion } from '../../models/Champion';
import { buildChampion } from '../../models/_tests/champion-helper';

const aatrox: Champion = buildChampion({
  id: 'aatrox',
  name: 'Aatrox',
  info: 'irrelevant aatrox info',
} as Champion);
const kayle: Champion = buildChampion({
  id: 'kayle',
  name: 'Kayle',
  info: 'irrelevant Aatrox info',
} as Champion);
const fiora: Champion = buildChampion({
  id: 'fiora',
  name: 'Fiora',
  info: 'irrelevant Fiora info',
} as Champion);
const someChampions: Champion[] = [aatrox, kayle, fiora];

storiesOf('ChampionSelector', module).add('display champions', () => (
  <ChampionSelector champions={someChampions} onSelect={action('clicked')} />
));
