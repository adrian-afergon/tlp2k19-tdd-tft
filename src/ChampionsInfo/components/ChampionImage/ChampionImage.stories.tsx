import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {ChampionImage} from './ChampionImage';
import {Champion} from './ChampionImage.spec';

const aChampion: Champion = {
    id: 'irrelevant id',
    image: 'irrelevant img',
    name: 'irrelevant name',
};

storiesOf('ChampionImage', module)
    .add('with text', () => (
    <ChampionImage  champion={aChampion}/>
));
