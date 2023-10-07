import { useEffect } from "react";
import CoffeeCard from "../utilities/CoffeeCard";
import { useState } from "react";

const HomeMenu = () => {
    const [CoffeeItems, setCoffeeItems] = useState([])
    useEffect(() => {
        fetch('Coffee.json')
            .then(res => res.json())
            .then(data => {
                setCoffeeItems(data.menu);
            })
    }, [])
    return (
        <div className="max-w-[1200px] p-5 mx-auto text-center">
            {/* Home Coffee Menu Item Section */}

            <div>
                <span className="bg-primary px-4 rounded-md mb-6">Menu</span>
                <h1 className="text-4xl md:text-6xl font-bebas my-6">CAFENA POPULAR MENU</h1>
            </div>
            {/* Coffee Item */}
            <div className="items-center">
                <div className="max-w-[1245px] mx-auto md:grid grid-cols-2 gap-2">
                    {
                        CoffeeItems.map((item, i) => <CoffeeCard item={item} key={i} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeMenu;