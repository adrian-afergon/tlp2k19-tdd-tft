import { mount } from 'enzyme';
import * as React from 'react';
import { ChampionsInfo} from './';

describe('ChampionsInfo', () => {
  it('should load a champions list when the component is displayed', () => {
    const wrapper = mount(<ChampionsInfo />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
