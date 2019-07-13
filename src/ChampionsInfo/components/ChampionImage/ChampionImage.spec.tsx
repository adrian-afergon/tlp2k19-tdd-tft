import { shallow } from 'enzyme';
import * as React from 'react';
import { ChampionImage } from './';
import { Champion } from '../../models/Champion';
import { buildChampion } from '../../models/_tests/champion-helper';

describe('ChampionImage', () => {
  let aChampion: Champion;
  beforeEach(() => {
    aChampion = buildChampion({
      id: 'Irrelevant champion id',
      name: 'Irrelevant champion name',
      image: 'Irrelevant champion image',
    });
  });

  it('should find the image inside', () => {
    const wrapper = shallow(<ChampionImage champion={aChampion} />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="image"]').exists()).toBeTruthy();
  });

  it('should call an event when is clicked', () => {
    const aClickHandler = jest.fn();
    const wrapper = shallow(
      <ChampionImage champion={aChampion} onClick={aClickHandler} />,
    );
    wrapper.simulate('click');
    expect(aClickHandler).toHaveBeenCalledWith('irrelevant id');
  });
});
