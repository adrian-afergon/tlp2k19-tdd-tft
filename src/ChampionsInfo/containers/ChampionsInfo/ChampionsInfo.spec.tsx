import * as React from 'react';
import { ChampionsInfo } from './';
import { render, findByTestId, fireEvent } from '@testing-library/react';
import { Champion } from '../../models/Champion';
import { buildChampion } from '../../models/_tests/champion-helper';

export interface ChampionService {
  getChampions: () => Promise<Champion[]>;
}

describe('ChampionsInfo', () => {
  const aatrox: Champion = buildChampion({
    id: 'aatrox',
    name: 'Aatrox',
    info: 'irrelevant aatrox info',
  } as Champion);
  const kayle: Champion = buildChampion({ id: 'kayle', name: 'Kayle' } as Champion);
  const fiora: Champion = buildChampion({ id: 'fiora', name: 'Fiora' } as Champion);
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

  it('should display the info when a champion is selected', async () => {
    const { container } = await render(
      <ChampionsInfo championService={championService} />,
    );
    const aatroxImage = await findByTestId(container, 'aatrox-image');
    fireEvent.click(aatroxImage);
    const info = await findByTestId(container, 'info');
    expect(info.textContent).toEqual(aatrox.info);
  });
});
