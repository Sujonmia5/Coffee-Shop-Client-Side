import { useLocation } from "react-router-dom";

export const DynamicHeroPath = () => {
    const location = useLocation()
    const PathName = location.pathname.split('/')[1];
    // console.log(PathName);
    if (PathName) {
        if (PathName == 'reservation') {
            return {
                PathName,
                title: `${PathName}`
            }
        }
        return {
            PathName,
            title: `${PathName} Cafena`
        }
    }

    return {}
}


export const FilterData = (CoffeeData, categoryNames = 'all') => {
    let filterArry = []
    // console.log(categoryNames);
    if (categoryNames == 'all') {
        const name = CoffeeData.filter(data => data.category !== categoryNames)
        console.log(name);
        name.forEach(element => {
            filterArry.push(...element?.items)
        });
        // console.log(filterArry);
    }
    const name = CoffeeData.filter(data => data.category == categoryNames)
    name.forEach(element => {
        filterArry = element?.items;
    });
    // console.log(filterArry);


    return filterArry;
}