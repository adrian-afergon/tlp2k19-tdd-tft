import { shallow } from 'enzyme';
import * as React from 'react';
import { ChampionImage} from './';

export type ChampionId = string;
export interface Champion {
  id: ChampionId;
  name: string;
  image: string;
}

describe('ChampionImage', () => {

  let aChampion: Champion;
  beforeEach(() => {
    aChampion = {
      id: 'Irrelevant champion id',
      name: 'Irrelevant champion name',
      image: 'Irrelevant champion image',
    };
  });

  it('should find the image inside', () => {
    const wrapper = shallow(<ChampionImage champion={aChampion}/>);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('[data-test-id="image"]').exists()).toBeTruthy();
  });

  it('should call an event when is clicked', () => {
    const aClickHandler = jest.fn();
    const wrapper = shallow(<ChampionImage
        champion={aChampion}
        onClick={aClickHandler}
    />);
    wrapper.simulate('click');
    expect(aClickHandler).toHaveBeenCalledWith('irrelevant id');
  });
});
