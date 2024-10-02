import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

import list from "../../public/list.json"

import Cards from './Cards';
function Freebook() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);
    const fillterData = book.filter((data) => data.category === "Free")

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    //console.log(fillterData)
    return (
        <>
            
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 md:py-5'>
                <div>
                    <h1 className='font-bold text-xl pb-2'>Free Courses</h1>
                    <p>
                        ihgfouehffi  efuhgfou3 fof fg f0 0f8 08f t08e f08tf08 f0 f08f
                    </p>
                </div>
                <div className=''>
                    <Slider {...settings} className=''>
                        {fillterData.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Freebook