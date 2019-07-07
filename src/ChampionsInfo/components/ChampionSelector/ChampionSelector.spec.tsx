import { shallow } from 'enzyme';
import * as React from 'react';
import { ChampionSelector} from './';
import {Champion} from "../ChampionImage/ChampionImage.spec";

describe('ChampionSelector', ()=> {
  it('should display the champions', ()=>{
    const someChampions: Champion[] = [];
    const wrapper = shallow(<ChampionSelector champions={someChampions}/>);
    const championImages = wrapper.find('ChampionImage');
    expect(championImages.length).toBe(someChampions.length);
  })
});

