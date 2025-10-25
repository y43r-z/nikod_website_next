"use client";
import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import Link from "next/link";

const FooterDesctop = () => {
  return (
    <Box className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="flex flex-col items-start space-y-4">
          <Box
            className="flex items-center rtl:space-x-reverse"
            href="/"
            component={Link}
          >
            <div className="relative bg-white  rounded-xl ">
              <Image
                src="/logo.png"
                width={60}
                height={50}
                alt="لوگو نرم افزار نیکد"
              />
            </div>

            <Typography
              variant="h6"
              className="font-bold no-underline "
              sx={{ flexShrink: 0, color: "#E5E5E5", mx: 1 }}
            >
              نرم افزار نیکد
            </Typography>
          </Box>
          <Typography
            variant="body2"
            className="text-gray-300 leading-relaxed text-justify"
          >
            پلتفرم جامع حسابداری و مدیریت انبار آنلاین نیکد، طراحی شده برای رشد
            کسب‌وکار شما با قابلیت‌های پیشرفته و رابط کاربری مدرن.
          </Typography>
          <div className="bg-gray-700 p-4 rounded-xl border border-gray-600 mt-2">
            <Typography
              variant="body2"
              className="text-gray-200 font-medium text-center italic"
            >
              «هوشمندسازی فرآیندها، تحول در کسب‌وکار»
            </Typography>
          </div>
          <div className="flex space-x-3 space-x-reverse mt-4">
            <IconButton className="bg-gray-600 hover:bg-gray-500 transition-colors">
              <FacebookIcon className="text-gray-200 hover:text-white" />
            </IconButton>
            <IconButton className="bg-gray-600 hover:bg-gray-500 transition-colors">
              <InstagramIcon className="text-gray-200 hover:text-white" />
            </IconButton>
            <IconButton className="bg-gray-600 hover:bg-gray-500 transition-colors">
              <LinkedInIcon className="text-gray-200 hover:text-white" />
            </IconButton>
            <IconButton className="bg-gray-600 hover:bg-gray-500 transition-colors">
              <TwitterIcon className="text-gray-200 hover:text-white" />
            </IconButton>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <Typography
            variant="h6"
            className="font-bold text-lg mb-2 text-white border-r-4 border-gray-400 pr-3"
          >
            دسترسی سریع
          </Typography>
          <div className="space-y-2 mt-2">
            {[
              {
                title: "صفحه اصلی",
                link: "/",
              },
              {
                title: "تماس با ما",
                link: "/about", // Fixed: changed from "/about" to "/contact"
              },
              {
                title: "درباره ما",
                link: "/about",
              },
            ].map((item, index) => (
              <Button
                component={Link}
                href={item.link}
                key={index}
                className="text-gray-300 hover:text-white normal-case px-0 py-1 transition-all duration-300 hover:pr-2 w-full justify-start hover:bg-gray-700 rounded-lg"
                sx={{ justifyContent: "flex-start" }}
              >
                {item.title} {/* Fixed: changed from {item} to {item.title} */}
              </Button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4 ">
          <Typography
            variant="h6"
            className="font-bold text-lg mb-2 text-white border-r-4 border-gray-400 pr-3"
          >
            ارتباط با ما
          </Typography>
          <div className="space-y-3 mt-2">
            <div className="flex items-center space-x-2 space-x-reverse text-gray-200">
              <PhoneIcon className="text-gray-300 text-sm" />
              <Typography variant="body2" dir="ltr">
                +98 993 462 3142
              </Typography>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-gray-200">
              <EmailIcon className="text-gray-300 text-sm" />
              <Typography variant="body2">support@nikad.com</Typography>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-gray-200">
              <LocationOnIcon className="text-gray-300 text-sm" />
              <Typography variant="body2">مشهد، ایران</Typography>
            </div>
          </div>
          {/* <div className="bg-gray-700 p-3 rounded-lg mt-2 border border-gray-600">
            <Typography
              variant="body2"
              className="text-gray-200 text-center font-medium"
            >
              پشتیبانی ۲۴/۷ • پاسخگویی فوری
            </Typography>
          </div> */}
        </div>

        {/* About / Extra Section */}
        <div className="flex flex-col space-y-4">
          <Typography
            variant="h6"
            className="font-bold text-lg mb-2 text-white border-r-4 border-gray-400 pr-3"
          >
            درباره ما
          </Typography>
          <Typography
            sx={{ mt: 2 }}
            variant="body2"
            className="text-gray-300 leading-relaxed text-justify mt-3"
          >
            نیکد با هدف ساده‌سازی مدیریت مالی و انبار کسب‌وکارها، راهکارهایی
            هوشمند و امن ارائه می‌دهد. با ما کسب‌وکار خود را دیجیتال کنید و
            بهره‌وری را افزایش دهید.
          </Typography>

          <div className="bg-gray-700 p-3 rounded-lg mt-2 border border-gray-600">
            <Typography
              variant="body2"
              className="text-gray-200 text-center font-medium"
            >
              پشتیبانی ۲۴/۷ • پاسخگویی فوری
            </Typography>
          </div>

          {/* <div className="bg-gray-700 p-3 rounded-lg border border-gray-600 mt-2">
            <Typography
              variant="body2"
              className="text-gray-200 text-center italic"
            >
              «با نیکد، رشد کسب‌وکار آسان‌تر است»
            </Typography>
          </div> */}
        </div>
      </div>

      {/* Bottom Section */}
      <Box className="border-t border-gray-600 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <Typography
            variant="body2"
            className="text-gray-400 text-center md:text-right"
          >
            © 2025 نیکد - تمامی حقوق برای پلتفرم مدیریت کسب‌وکار محفوظ است
          </Typography>
          <div className="flex space-x-6 space-x-reverse text-gray-400">
            <Typography
              variant="body2"
              className="hover:text-gray-200 cursor-pointer transition-colors"
            >
              حریم خصوصی
            </Typography>
            <Typography
              variant="body2"
              className="hover:text-gray-200 cursor-pointer transition-colors"
            >
              شرایط استفاده
            </Typography>
            <Typography
              variant="body2"
              className="hover:text-gray-200 cursor-pointer transition-colors"
            >
              قوانین
            </Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default FooterDesctop;
