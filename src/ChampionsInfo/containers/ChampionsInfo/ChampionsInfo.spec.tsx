import * as React from 'react';
import { ChampionsInfo } from './';
import { render } from '@testing-library/react';
import { Champion } from '../../models/Champion';

export interface ChampionService {
  getChampions: () => Promise<Champion[]>;
}

describe('ChampionsInfo', () => {
  const aatrox = { info: '', image: '', id: 'irrelevant 1', name: 'aatrox' } as Champion;
  const kayle = { info: '', image: '', id: 'irrelevant 2', name: 'kayle' } as Champion;
  const fiora = { info: '', image: '', id: 'irrelevant 3', name: 'fiora' } as Champion;
  const someChampions: Champion[] = [aatrox, kayle, fiora];
  let championService: ChampionService;

  beforeEach(() => {
    championService = {
      getChampions: jest.fn(async () => someChampions),
    };
  });

  it('should load a champions list when the component is displayed', async () => {
    const { container } = await render(
      <ChampionsInfo championService={championService} />,
    );
    const championSelector = container.children[0];
    const section = championSelector.children[0];
    const displayedChampions = section.children;

    expect(championService.getChampions).toHaveBeenCalled();
    expect(displayedChampions.length).toEqual(someChampions.length);
  });
});
