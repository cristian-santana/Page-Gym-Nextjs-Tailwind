'use client';

import Container from "@/components/shared/container";
import Title from "@/components/ui/title";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const Trainers = () => {
   return ( 
      <section
      id="trainers" 
      className="min-h-screen flex items-center justify-center"
      >
         <Container>
             <Title title="Join Out" titlePrimary="Trainer" />
             <div>
             <Swiper
              spaceBetween={50}
              slidesPerView={3}
               >
             
             <SwiperSlide>
                <div className="relative w-full h-[70vh] mx-auto">
                   <Image 
                   src='/imagenes/trainer-1.png'
                   alt='trainer'
                   fill
                   className="object-cover rounded-xl shadow-xl"/>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full h-[70vh] mx-auto">
                   <Image 
                   src='/imagenes/trainer-2.png'
                   alt='trainer'
                   fill
                   className="object-cover rounded-xl shadow-xl"/>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full h-[70vh] mx-auto">
                   <Image 
                   src='/imagenes/trainer-3.png'
                   alt='trainer'
                   fill
                   className="object-cover rounded-xl shadow-xl"/>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full h-[70vh] mx-auto">
                   <Image 
                   src='/imagenes/trainer-4.png'
                   alt='trainer'
                   fill
                   className="object-cover rounded-xl shadow-xl"/>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full h-[70vh] mx-auto">
                   <Image 
                   src='/imagenes/trainer-5.png'
                   alt='trainer'
                   fill
                   className="object-cover rounded-xl shadow-xl"/>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full h-[70vh] mx-auto">
                   <Image 
                   src='/imagenes/trainer-6.png'
                   alt='trainer'
                   fill
                   className="object-cover rounded-xl shadow-xl"/>
                </div>
              </SwiperSlide>
             
              </Swiper>
             </div>
         </Container>
     </section>
    );
}
 
export default Trainers;