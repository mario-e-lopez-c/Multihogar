import React from "react";
import Titles from "../Titles";
import { BsGridFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { CatLoader } from '../Notifications/Loader';

function Categories({ categories, loading }) {
    console.log("Este es categories: ", categories);

    const navigate = useNavigate();

    return (
        <div className="sm:my-16 my-8">
            <Titles title="Categorias" Icon={BsGridFill} />
            <Swiper
                navigation={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                speed={4000}
                direction="horizontal"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    1500: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    }
                }}
                modules={[Autoplay]}
            >               
                {loading || categories?.length === 0
                    ? //number of slides
                        Array.from(Array(2).keys()).map((s, i) => (
                            <SwiperSlide key={i} className="px-4 mt-6">
                                <CatLoader />
                            </SwiperSlide>
                        ))
                        : categories?.map((s, i) => (
                            <SwiperSlide key={i} className="px-4 mt-6">
                                <button>
                                    <div className="border border-gray-200 flex-colo gap-6 p-8 rounded-xl w-full">
                                        <img 
                                            src={s?.image}
                                            alt={s?.image}
                                            className="w-full"
                                        />
                                        <h1 className="border border-gray-200 flex-colo gap-6 p-8 rounded-xl w-full">
                                            {s?.name}
                                        </h1>
                                    </div>
                                </button>
                            </SwiperSlide>
                        ))
                }
            </Swiper>
        </div>
    );
}

export default Categories;