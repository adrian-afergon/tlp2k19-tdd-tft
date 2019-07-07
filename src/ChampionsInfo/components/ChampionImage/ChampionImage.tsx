import * as React from 'react';
import './ChampionImage.scss';
import { Image } from '../Image/';
import {Champion, ChampionId} from './ChampionImage.spec';

interface ChampionImageProps {
    champion: Champion;
    onClick?: (id: ChampionId) => void;
}

export const ChampionImage: React.FC<ChampionImageProps> = ({champion, onClick}) => {

    const handleClick = () => {
        if (onClick) {
            onClick(champion.id);
        }
    };

    return (
    <div onClick={handleClick}>
        <Image src={champion.image} alt={champion.name} data-test-id="image"/>
    </div>
); };

ChampionImage.displayName = 'ChampionImage';
