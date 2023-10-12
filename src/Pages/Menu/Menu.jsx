import DynamicHero from '../../components/DynamicHero/DynamicHero';
import MenuItem from '../../components/MenuItem/MenuItem';
import { DynamicHeroPath } from '../../components/utilities/Function/Function';
import './Menu.css'

const Menu = () => {
    const Path = DynamicHeroPath()
    return (
        <div className='mt-28 md:mt-52'>
            <DynamicHero Path={Path} />
            <MenuItem />
        </div>
    );
};

export default Menu;