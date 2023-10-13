import React from 'react';
import { DynamicHeroPath } from '../../components/utilities/Function/Function';
import DynamicHero from '../../components/DynamicHero/DynamicHero';

const Reservation = () => {
    const Path = DynamicHeroPath()
    console.log(Path);
    return (
        <div className='mt-28 md:mt-52'>
            <DynamicHero Path={Path} />
            <div>

            </div>
        </div>
    );
};

export default Reservation;