import {mount} from 'enzyme';
import * as React from 'react';
import { ChampionsInfo} from './';

describe('ChampionsInfo', () => {
  it('should load a champions list when the component is displayed', async (done) => {
    const aLoadMethod = jest.fn( async () => {done(); return 'Hello'; });

    const wrapper = mount(<ChampionsInfo methodTest={aLoadMethod}/>);
    wrapper.update();
    const message = wrapper.find('[data-test-id="message"]');

    expect(aLoadMethod).toHaveBeenCalled();
    expect(message).toEqual('Hello');
    expect(wrapper.exists()).toBeTruthy();
  });
});
