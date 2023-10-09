import { useEffect, useState } from "react";
import NewsCard from "./Card";
import './News.css'


const NewsArticle = () => {
    const [BlogData, setBlogData] = useState([])
    useEffect(() => {
        fetch('Blog.json')
            .then(res => res.json())
            .then(data => {
                setBlogData(data);
            })
    }, [])
    // console.log(BlogData);
    return (
        <div className="bg-black bg-opacity-75 pt-10 pb-28">
            <div className="text-center max-w-[1200px] p-5 mx-auto">
                <span className="font-jost text-xs sm:text-base uppercase bg-primary inline-block px-2 rounded tracking-widest py-1 my-4">FROM OUR BLOG</span>
                <h2 className="text-4xl sm:text-6xl font-bebas">OUR NEWS & ARTICLES</h2>
                <div className="my-10 grid md:grid-cols-2 
                min-[1200px]:grid-cols-3 gap-5">
                    {
                        BlogData.map((data, i) => <NewsCard key={i} data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsArticle;