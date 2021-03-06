import * as React from 'react';
import './ChampionCard.scss';
import { Champion } from '../../models/Champion';
import { ChampionImage } from '../ChampionImage';

interface ChampionCardProps {
  champion: Champion;
}

export const ChampionCard: React.FC<ChampionCardProps> = ({ champion }) => (
  <div className="ChampionCard">
    <ChampionImage champion={champion} data-testid="image" />
    <h2 data-testid="name">{champion.name}</h2>
    <h3>Info:</h3>
    <p data-testid="info">{champion.info}</p>
  </div>
);

ChampionCard.displayName = 'ChampionCard';
