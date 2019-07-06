import * as React from 'react';
import './ChampionImage.scss';

type ChampionImageProps = {name: string, src: string}

export const ChampionImage: React.FC<ChampionImageProps> = ({name, src}) => (
  <div className="ChampionImage">
    Hello from ChampionImage!
  </div>
);

ChampionImage.displayName = 'ChampionImage';
