import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {ChampionCard} from './ChampionCard';

storiesOf('ChampionCard', module)
    .add('with text', () => (
    <ChampionCard />
));