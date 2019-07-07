import * as React from 'react';
import './ChampionSelector.scss';
import {Champion} from "../ChampionImage/ChampionImage.spec";
import {ChampionImage} from "../ChampionImage";

interface ChampionSelectorProps {
    champions: Champion[];
}

export const ChampionSelector: React.FC<ChampionSelectorProps> = ({champions}) =>
    champions.map((champion) => <ChampionImage champion={champion} />);

ChampionSelector.displayName = 'ChampionSelector';
