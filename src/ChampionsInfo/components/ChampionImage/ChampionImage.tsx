import * as React from 'react';
import './ChampionImage.scss';
import { Image } from '../Image/';

type ChampionImageProps = {id?:string, name: string, src: string, onClick?: (id: string) => void}

export const ChampionImage: React.FC<ChampionImageProps> = ({id, name, src, onClick}) => {

    const handleClick = () => {
        if(onClick && id) {
            onClick(id)
        }
    };

    return (
    <div onClick={handleClick}>
        <Image src={src} alt={name} data-test-id="image"/>
    </div>
)};

ChampionImage.displayName = 'ChampionImage';
