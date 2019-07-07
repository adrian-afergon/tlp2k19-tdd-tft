import { shallow } from 'enzyme';
import * as React from 'react';
import { ChampionCard} from './';
import {Champion} from '../../models/Champion';

describe('ChampionCard', () => {
  it('should display the component', () => {
    const aChampion: Champion = {
      name: 'irrelevant name',
      image: 'irrelevant image',
      id: 'irrelevant id',
    };
    const wrapper = shallow(<ChampionCard champion={aChampion} />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
