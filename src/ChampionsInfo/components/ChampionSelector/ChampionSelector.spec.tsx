import { shallow } from 'enzyme';
import * as React from 'react';
import { ChampionSelector} from './';
import {Champion} from "../ChampionImage/ChampionImage.spec";

describe('ChampionSelector', ()=> {

  it('should display the champions', ()=>{
    const aatrox: Champion = buildChampion({name: 'Aatrox'} as Champion);
    const kayle: Champion = buildChampion({name: 'Kayle'} as Champion);
    const fiora: Champion = buildChampion({name: 'Fiora'} as Champion);
    const someChampions: Champion[] = [aatrox, kayle, fiora];
    const wrapper = shallow(<ChampionSelector champions={someChampions}/>);
    const championImages = wrapper.find('ChampionImage');
    expect(championImages.length).toBe(someChampions.length);
  })
});

const buildChampion = ({id, name, image}: Champion):Champion => ({
  id: id ? id : 'irrelevant id',
  name: name ? name : 'irrelevant name',
  image: image ? image : 'irrelevant image'
});