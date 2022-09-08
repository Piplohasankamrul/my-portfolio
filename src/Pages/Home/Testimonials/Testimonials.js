import React from 'react';
import './Testimonials.css'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import AVATAR1 from '../../../images/avatar1.jpg'
import AVATAR2 from '../../../images/avatar2.jpg'
import AVATAR3 from '../../../images/avatar3.jpg'
import AVATAR4 from '../../../images/avatar4.jpg'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const reviewData =[
    {
        avatar:AVATAR1,
        name: "Ernest Acheiver",
        review:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        avatar:AVATAR2,
        name: "Alex Carry",
        review:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        avatar:AVATAR3,
        name: "Jacob arnold",
        review:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        avatar:AVATAR4,
        name: "Maria Joshefine",
        review:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
]



const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className='container testimonials__container'
            modules={[ Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            
            >
                {
                    reviewData.map(({avatar,name,review},index) =>{
                        return(
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={avatar} ></img>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
                
                
               
            </Swiper>
        </section>
    );
};

export default Testimonials;