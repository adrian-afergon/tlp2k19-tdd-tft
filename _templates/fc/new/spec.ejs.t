---
to: src/<%= path %>/<%= name %>/<%= name %>.spec.tsx
---
import { shallow } from 'enzyme';
import * as React from 'react';
import { <%= name %>} from './<% name %>';

describe('<%= name %>', ()=> {
  it('should display the component', ()=>{
    const wrapper = shallow(<<%= name %> />);
    expect(wrapper.exists()).toBeTruthy();
  })
});

