"use client";
import React, { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const images = [
  {
    src: "/app_screens/factors.png",
    title: "فاکتورها",
    description:
      "مدیریت آسان و سریع فاکتورها به همراه فیلتر پیشرفته و قابلیت ثبت فاکتور جدید همه تنها در یک صفحه",
  },
  {
    src: "/app_screens/products.png",
    title: "لیست کالاها",
    description:
      "مشاهده لیست کامل محصولات به همراه موجودی انها و ویرایش کالاها",
  },
  {
    src: "/app_screens/profile.png",
    title: "پروفایل کاربر",
    description: "تنظیمات شخصی و مدیریت حساب کاربری پرسنل",
  },
  {
    src: "/app_screens/coding.png",
    title: "کدینگ‌های حسابداری",
    description:
      "سیستم کدینگ پیشرفته برای مدیریت حسابداری و تعریف کدینگ حسابداری",
  },
  {
    src: "/app_screens/documents.png",
    title: "اسناد حسابداری",
    description: "بایگانی و مدیریت اسناد مالی",
  },
];

const AppSliders = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleBeforeInit = (swiper: SwiperType) => {
    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  };

  return (
    <Box className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-5">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={handleBeforeInit}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="relative group"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Box className="relative bg-gradient-to-br to-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
              <Box className="flex flex-col lg:flex-row items-center justify-between min-h-[300px] sm:min-h-[400px] lg:min-h-[400px] p-4 sm:p-6 lg:p-5">
                {/* Content Section */}
                <Box className="flex-1 text-center lg:text-right lg:order-2 mb-6 sm:mb-8 lg:mb-0 lg:mr-8 xl:mr-12 order-2 lg:order-2">
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'YekanBakhFaNum', 'Segoe UI', sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: "1.5rem", sm: "2rem", lg: "2.5rem", xl: "3rem" },
                      color: "#1F2937",
                      mb: { xs: 1, sm: 2 },
                      lineHeight: 1.3,
                    }}
                  >
                    {img.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'YekanBakhFaNum', 'Segoe UI', sans-serif",
                      fontSize: { xs: "0.875rem", sm: "1rem", lg: "1.125rem", xl: "1.25rem" },
                      lineHeight: 1.7,
                      color: "#4B5563",
                      maxWidth: "100%",
                      mx: "auto",
                      lg: { mx: 0 },
                      px: { xs: 1, sm: 0 },
                    }}
                    className="leading-relaxed sm:leading-loose"
                  >
                    {img.description}
                  </Typography>
                  
                  {/* Dots Indicator - Hidden on mobile, visible on tablet and up */}
                  <Box className="hidden sm:flex justify-center lg:justify-start mt-4 sm:mt-6">
                    <Box className="flex space-x-2 sm:space-x-3 space-x-reverse">
                      {images.map((_, dotIndex) => (
                        <Box
                          key={dotIndex}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            dotIndex === index
                              ? "bg-blue-600 scale-110 sm:scale-125"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Image Section */}
                <Box className="flex-1 w-full max-w-xs sm:max-w-md lg:max-w-2xl mb-6 sm:mb-8 lg:mb-0 lg:order-1 order-1">
                  <Box className="relative">
                    <Box className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl transform rotate-1 sm:rotate-2 scale-105"></Box>
                    <Image
                      src={img.src}
                      alt={img.title}
                      width={600}
                      height={400}
                      className="relative w-full h-auto rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl transform hover:scale-105 transition-transform duration-500 object-contain"
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    />
                  </Box>
                </Box>

                {/* Mobile Dots Indicator */}
                <Box className="sm:hidden flex justify-center mt-2 order-3 w-full">
                  <Box className="flex space-x-2 space-x-reverse">
                    {images.map((_, dotIndex) => (
                      <Box
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          dotIndex === index
                            ? "bg-blue-600 scale-110"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons - Responsive */}
        <Box className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex items-center space-x-3 sm:space-x-4 space-x-reverse bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 shadow-lg">
          <IconButton
            ref={prevRef}
            className="hover:scale-105 sm:hover:scale-110 transition-transform duration-200"
            sx={{
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 },
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "grey.100",
              },
            }}
          >
            <ArrowForwardIcon sx={{ 
              color: "#374151", 
              fontSize: { xs: 20, sm: 28 } 
            }} />
          </IconButton>

          <Box className="h-4 sm:h-6 w-px bg-gray-300"></Box>

          <IconButton
            ref={nextRef}
            className="hover:scale-105 sm:hover:scale-110 transition-transform duration-200"
            sx={{
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 },
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "grey.100",
              },
            }}
          >
            <ArrowBackIcon sx={{ 
              color: "#374151", 
              fontSize: { xs: 20, sm: 28 } 
            }} />
          </IconButton>
        </Box>
      </Swiper>
    </Box>
  );
};

export default AppSliders;