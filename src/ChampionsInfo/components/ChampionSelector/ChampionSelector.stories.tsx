import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {ChampionSelector} from "./ChampionSelector";

storiesOf("ChampionSelector", module)
    .add("with text", () => (
    <ChampionSelector />
));