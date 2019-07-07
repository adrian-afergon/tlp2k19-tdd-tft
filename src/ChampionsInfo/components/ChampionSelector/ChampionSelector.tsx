import * as React from 'react';
import './ChampionSelector.scss';
import {Champion} from "../ChampionImage/ChampionImage.spec";

interface ChampionSelectorProps {
    champions: Champion[];
}

export const ChampionSelector: React.FC<ChampionSelectorProps> = () => (
  <div className="ChampionSelector">
    Hello from ChampionSelector!
  </div>
);

ChampionSelector.displayName = 'ChampionSelector';
