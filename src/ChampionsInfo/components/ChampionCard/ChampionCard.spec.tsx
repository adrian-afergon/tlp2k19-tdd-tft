import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { ChampionCard } from './';
import { Champion } from '../../models/Champion';

describe('ChampionCard', () => {
  const aChampion: Champion = {
    name: 'irrelevant name',
    image: 'irrelevant image',
    id: 'irrelevant id',
    info: 'irrelevant champion info',
  };

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ChampionCard champion={aChampion} />);
  });

  it('should display the name', () => {
    const name = wrapper.find('[data-testid="name"]');
    expect(name.text()).toEqual(aChampion.name);
  });

  it('should display the image', () => {
    const image = wrapper.find('[data-testid="image"]');
    expect(image.exists()).toBeTruthy();
  });

  it('should display the description', () => {
    const info = wrapper.find('[data-testid="info"]');
    expect(info.text()).toBe(aChampion.info);
  });
});
