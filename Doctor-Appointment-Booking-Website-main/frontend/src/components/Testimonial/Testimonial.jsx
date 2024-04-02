import React from "react";
import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from "react-icons/hi"


const Testimonial = () => {
    return(
        <div className="mt-[30px] lg:mt-[55px]">
            <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
            breakpoints={{
                640: {
                    allowSlidePrev : 1,
                    spaceBetween : 0,
                },
                768 : {
                    slidesPerView : 2,
                    spaceBetween : 20,
                },
                1024: {
                    slidesPerView : 3,
                    spaceBetween: 30,
                },
            }}>
                
                
               
                
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Meet Rao
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        College was not what I expected. I felt so marginalised, had lost all confidence & could not cope with the academic stress & my strained relationship. My therapist at Felicity helped me find my self esteem & confidence. She also helped me with effective coping mechanisms for my stress & relationship issues.

                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Ayushi Patel
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        Medicare has helped me put more life in my years. I used to always feel low, had lost interest in everything despite having a perfect life. I could not understand what I was going through. Thanks to a friend who highly recommended Felicity to me, I gave it a shot. I feel so grateful to the psychologist & psychiatrist at Felicity who made helped me understand & treat my depression.

                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Harsh Shah
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        I was at the point of ending things & within a matter 21 days I felt like I got my life back. I am so grateful for the timely help and unconditional support from Medicare.

                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Meet rao
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "I have taken medical service form them. They treat so well and they are provide the best medical
                            service

                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Heer Shah
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            "I have taken medical service form them. They treat so well and they are provide the best medical
                            service"
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonial;
