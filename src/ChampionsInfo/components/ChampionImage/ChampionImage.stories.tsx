import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {ChampionImage} from "./ChampionImage";

storiesOf("ChampionImage", module)
    .add("with text", () => (
    <ChampionImage />
));