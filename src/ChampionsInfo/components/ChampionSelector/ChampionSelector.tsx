import * as React from 'react';
import './ChampionSelector.scss';
import {Champion, ChampionId} from '../ChampionImage/ChampionImage.spec';
import {ChampionImage} from '../ChampionImage';

interface ChampionSelectorProps {
    champions: Champion[];
    onSelect: (championId: ChampionId) => void;
}

export const ChampionSelector: React.FC<ChampionSelectorProps>
    = ({champions, onSelect}) => (
    <section className="ChampionSelector">
        {champions.map((champion) =>
            <ChampionImage
                key={champion.id}
                champion={champion}
                onClick={onSelect}
                data-test-id={champion.name}/>)}
    </section>
);

ChampionSelector.displayName = 'ChampionSelector';
