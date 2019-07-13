import * as React from 'react';
import './ChampionsInfo.scss';
import { useEffect, useState } from 'react';
import { Champion, ChampionId } from '../../models/Champion';
import { ChampionService } from './ChampionsInfo.spec';
import { ChampionSelector } from '../../components/ChampionSelector';
import { ChampionCard } from '../../components/ChampionCard';

interface ChampionsInfoProps {
  championService: ChampionService;
}

export const ChampionsInfo: React.FC<ChampionsInfoProps> = ({ championService }) => {
  const [champions, setChampions] = useState([] as Champion[]);
  useEffect(() => {
    championService.getChampions().then(setChampions);
  }, [championService]);

  const [selectedChampion, setSelectedChampion] = useState({} as Champion);

  const selectChampion = (championId: ChampionId) => {
    const foundChampion = champions.find((champion) => championId === champion.id);
    setSelectedChampion(foundChampion ? foundChampion : ({} as Champion));
  };

  return (
    <div className="ChampionsInfo">
      <ChampionSelector champions={champions} onSelect={selectChampion} />
      {selectedChampion && <ChampionCard champion={selectedChampion} />}
    </div>
  );
};

ChampionsInfo.displayName = 'ChampionsInfo';
