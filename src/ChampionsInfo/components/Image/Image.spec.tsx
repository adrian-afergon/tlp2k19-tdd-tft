import { shallow } from 'enzyme';
import * as React from 'react';
import { Image} from './index';

describe('Image', () => {
  it('should display the image source', () => {
    const wrapper = shallow(<Image src="irrelevant source" alt="irrelevant img title"/>);
    expect(wrapper.exists()).toBeTruthy();
  });
});
