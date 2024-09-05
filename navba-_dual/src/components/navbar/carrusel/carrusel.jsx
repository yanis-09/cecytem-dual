import { Navigation, Pagination} from 'swiper/modules';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import carrucel1 from "../../assets/img/Carrusel1.png";
import carrusel2 from "../../assets/img/Carrusel2.png";
import carrusel3 from "../../assets/img/Carrusel3.png";
import './Carrusel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Carrusel = () => {
    return (
        <>
           <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className='myswiper'>


                    <SwiperSlide>
                        <div className="correccion">
                        <img src={carrucel1} alt="" />
                        </div>
                    </SwiperSlide>



            <SwiperSlide>
                <div className="correccion">
                <img src={carrusel2} alt="" />
                </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className="correccion">
                    <img src={carrusel3} alt="" />
                    </div>

                </SwiperSlide>




            </Swiper>
        </>
    )
}

export default Carrusel