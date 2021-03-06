import * as React from 'react';
import './ChampionImage.scss';
import { Image } from '../Image/';
import { Champion, ChampionId } from '../../models/Champion';

interface ChampionImageProps {
  champion: Champion;
  onClick?: (id: ChampionId) => void;
}

export const ChampionImage: React.FC<ChampionImageProps> = ({ champion, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(champion.id);
    }
  };

  return (
    <div onClick={handleClick} data-testid={`${champion.id}-image`}>
      <Image src={champion.image} alt={champion.name} data-testid="image" />
    </div>
  );
};

ChampionImage.displayName = 'ChampionImage';
