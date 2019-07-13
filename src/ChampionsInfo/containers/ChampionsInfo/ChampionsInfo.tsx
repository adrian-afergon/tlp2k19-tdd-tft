import * as React from 'react';
import './ChampionsInfo.scss';
import { useEffect, useState } from 'react';
import { Champion } from '../../models/Champion';
import { ChampionService } from './ChampionsInfo.spec';
import { ChampionSelector } from '../../components/ChampionSelector';

interface ChampionsInfoProps {
  championService: ChampionService;
}

export const ChampionsInfo: React.FC<ChampionsInfoProps> = ({ championService }) => {
  const [champions, setChampions] = useState([] as Champion[]);
  useEffect(() => {
    championService.getChampions().then(setChampions);
  }, [championService]);

  return (
    <div className="ChampionsInfo">
      <ChampionSelector champions={champions} onSelect={() => ''} />
    </div>
  );
};

ChampionsInfo.displayName = 'ChampionsInfo';
