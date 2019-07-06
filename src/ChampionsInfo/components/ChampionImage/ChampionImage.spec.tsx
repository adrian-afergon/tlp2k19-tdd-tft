import { shallow } from 'enzyme';
import * as React from 'react';
import { ChampionImage} from './';

describe('ChampionImage', ()=> {
  it('should display the component', ()=>{
    const wrapper = shallow(<ChampionImage src="irrelevant champion image" name="Irrelevant champion name"/>);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should find the image inside', () => {
    const wrapper = shallow(<ChampionImage src="irrelevant champion image" name="Irrelevant champion name"/>);
    expect(wrapper.find('[data-test-id="image"]').exists()).toBeTruthy();
  });

  it('should call an event when is clicked', () => {
    const aClickHandler = jest.fn();
    const wrapper = shallow(<ChampionImage
        id="irrelevant id"
        src="irrelevant champion image"
        name="Irrelevant champion name"
        onClick={aClickHandler}
    />);
    wrapper.simulate('click');
    expect(aClickHandler).toHaveBeenCalledWith("irrelevant id");
  });
});

