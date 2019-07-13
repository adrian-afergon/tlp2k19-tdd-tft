import * as React from 'react';
import './ChampionSelector.scss';
import { ChampionImage } from '../ChampionImage';
import { Champion, ChampionId } from '../../models/Champion';

interface ChampionSelectorProps {
  champions: Champion[];
  onSelect: (championId: ChampionId) => void;
}

export const ChampionSelector: React.FC<ChampionSelectorProps> = ({
  champions,
  onSelect,
}) => (
  <section className="ChampionSelector">
    {champions.map((champion) => (
      <ChampionImage
        key={champion.id}
        champion={champion}
        onClick={onSelect}
        data-test-id={champion.name}
      />
    ))}
  </section>
);

ChampionSelector.displayName = 'ChampionSelector';
