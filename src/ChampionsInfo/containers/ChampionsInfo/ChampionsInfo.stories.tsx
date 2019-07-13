import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ChampionsInfo } from './ChampionsInfo';
import { ChampionService } from './ChampionsInfo.spec';
import { buildChampion } from '../../models/_tests/champion-helper';
import { Champion } from '../../models/Champion';

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

const championStoryService: ChampionService = {
  getChampions: () => Promise.resolve(someChampions),
};

storiesOf('ChampionsInfo', module).add('with async actions', () => (
  <ChampionsInfo championService={championStoryService} />
));
