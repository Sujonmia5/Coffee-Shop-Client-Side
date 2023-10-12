import { useLocation } from "react-router-dom";

export const DynamicHeroPath = () => {
    const location = useLocation()
    const PathName = location.pathname.split('/')[1];
    // console.log(PathName);
    if (PathName === 'about') {
        return {
            PathName,
            title: `${PathName} Cafena`
        }
    }
    else if (PathName === 'menu') {
        return {
            PathName,
            title: `${PathName} Cafena`
        }
    }
    return {}
}