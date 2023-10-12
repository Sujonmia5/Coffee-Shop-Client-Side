import { useEffect, useState } from "react";

const MenuItem = () => {
    const [Categories, setCategories] = useState([])
    const [CoffeeData, setCoffeeData] = useState([])
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    useEffect(() => {
        fetch('CoffeeShop.json')
            .then(res => res.json())
            .then(data => {
                const CTArray = [
                    {
                        category: 'all',
                        _id: 0
                    },
                ]
                data?.menu?.map((coffee, i) => {
                    const CategoryItems = {
                        category: coffee.category,
                        _id: i + 1
                    }
                    CTArray.push(CategoryItems)
                })
                setCategories(CTArray);
                setCoffeeData(data.menu)
            })
    }, [])

    console.log(CoffeeData);
    console.log(activeTab);
    return (
        <div className="max-w-[1200px] mx-auto p-5">
            <div className="text-center">
                <p className="text-sm text-white bg-primary px-3 py-1 rounded inline-block uppercase tracking-widest">Menu</p>
                <h2 className="text-4xl md:text-6xl font-bebas my-5">OUR POPULAR MENU</h2>
                <div className="w-full flex justify-center items-center">
                    <div className="tab-buttons flex justify-around gap-x-4 mx-auto border border-[#a7a7a7] h-10 rounded-md">
                        {
                            Categories.map(category => <button key={category._id}
                                onClick={() => handleTabClick(category?._id)}
                                className={activeTab === category?._id ? "active text-white px-4 h-full rounded hover:bg-primary text-base font-medium font-jost" : "inactive px-4 h-full hover:text-white rounded hover:bg-primary text-base font-medium font-jost"}
                            >
                                {category.category}
                            </button>)
                        }
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default MenuItem;