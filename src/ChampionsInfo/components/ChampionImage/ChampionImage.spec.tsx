import { shallow } from 'enzyme';
import * as React from 'react';
import { ChampionImage} from './';

describe('ChampionImage', ()=> {
  it('should display the component', ()=>{
    const wrapper = shallow(<ChampionImage src="irrelevant champion image" name="Irrelevant champion name"/>);
    expect(wrapper.exists()).toBeTruthy();
  })
});

