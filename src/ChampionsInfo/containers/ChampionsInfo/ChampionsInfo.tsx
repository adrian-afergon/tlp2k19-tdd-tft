import * as React from 'react';
import './ChampionsInfo.scss';
import {useEffect, useState} from 'react';

export const ChampionsInfo: React.FC<{methodTest: () => Promise<string> }> = ({methodTest}) => {

    const [hello, setHello] = useState('');
    const sayHello = async () => {
        setHello(await methodTest());
    };

    useEffect(() => {
        sayHello().then(() => {});
    }, []);

    return (
    <div className="ChampionsInfo">
      <p data-test-id="message">{hello}</p>
    </div>
  );
};

ChampionsInfo.displayName = 'ChampionsInfo';
