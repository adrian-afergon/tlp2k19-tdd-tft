import * as React from 'react';
import './ChampionCard.scss';
import {Champion} from '../../models/Champion';

interface ChampionCardProps {
    champion: Champion;
}

export const ChampionCard: React.FC<ChampionCardProps> = ({champion}) => (
  <div className="ChampionCard">
    Hello from ChampionCard!
  </div>
);

ChampionCard.displayName = 'ChampionCard';
