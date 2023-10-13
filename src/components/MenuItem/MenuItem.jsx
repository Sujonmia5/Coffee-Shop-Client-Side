import { useEffect, useState } from "react";
import { FilterData } from "../utilities/Function/Function";
// import CoffeeCard from "../utilities/CoffeeCard";
import { AnimatePresence, motion } from "framer-motion"
import CoffeeCard from "../utilities/CoffeeCard";
import Card from "../utilities/Card";
import PrimaryButton from "../utilities/Button/PrimaryButton";

const MenuItem = () => {
    const [Categories, setCategories] = useState([])
    const [CoffeeData, setCoffeeData] = useState([])
    const [activeTab, setActiveTab] = useState(0);
    const [filterCoffee, setFilterCoffee] = useState([])

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
    useEffect(() => {
        let categoryNames;
        Categories.map(category => {
            const categoryName = category._id === activeTab;
            if (categoryName) {
                categoryNames = category.category
            }
        })
        const data = FilterData(CoffeeData, categoryNames)
        setFilterCoffee(data);
    }, [activeTab, CoffeeData])
    console.log(filterCoffee);
    return (
        <div className="max-w-[1200px] mx-auto p-5">
            <div className="text-center">
                <p className="text-sm text-white bg-primary px-3 py-1 rounded inline-block uppercase tracking-widest">Menu</p>
                <h2 className="text-4xl md:text-6xl font-bebas my-5">OUR POPULAR MENU</h2>
                <div className="w-full flex justify-center items-center">
                    <div className=" tab-buttons flex flex-wrap justify-around gap-4 mx-auto md:border border-[#a7a7a7] h-10 rounded-md">
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
            <AnimatePresence>
                <div className="grid md:grid-cols-2 gap-5 mt-24 sm:my-10 ">
                    {
                        filterCoffee.map((coffee, i) =>
                            <Card coffee={coffee} key={i} />
                        )
                    }

                </div>
                <div className="w-full flex justify-center mt-10 mb-28">
                    <PrimaryButton style={'font-semibold text-white tracking-widest'} title={'Load more'}></PrimaryButton>
                </div>
            </AnimatePresence>
        </div>
    );
};

export default MenuItem;