import { shallow } from 'enzyme';
import * as React from 'react';
import { Image} from './';

describe('Image', ()=> {
  it('should display the component', ()=>{
    const wrapper = shallow(<Image />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

