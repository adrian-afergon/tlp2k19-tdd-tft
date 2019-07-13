import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { ChampionSelector } from './';
import { Champion } from '../../models/Champion';
import { buildChampion } from '../../models/_tests/champion-helper';

describe('ChampionSelector', () => {
  const aatrox: Champion = buildChampion({ name: 'Aatrox' } as Champion);
  const kayle: Champion = buildChampion({ name: 'Kayle' } as Champion);
  const fiora: Champion = buildChampion({ name: 'Fiora' } as Champion);
  const someChampions: Champion[] = [aatrox, kayle, fiora];

  let wrapper: ShallowWrapper;
  let aSelectHandler: jest.Mock;

  beforeEach(() => {
    aSelectHandler = jest.fn();
    wrapper = shallow(
      <ChampionSelector champions={someChampions} onSelect={aSelectHandler} />,
    );
  });

  it('should display the champions', () => {
    const championImages = wrapper.find('ChampionImage');

    expect(championImages.length).toBe(someChampions.length);
  });

  it('should select a champion when is clicked', () => {
    const aatroxImage = wrapper.find('[data-testid="Aatrox"]');
    aatroxImage.simulate('click');

    expect(aSelectHandler).toHaveBeenCalled();
  });
});
