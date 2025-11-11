"use client";
import React from "react";
import BackgroundShapes from "@/components/ui/BackgroundShapes";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Card,
  Grid,
} from "@mui/material";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BarChartIcon from "@mui/icons-material/BarChart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PaletteIcon from "@mui/icons-material/Palette";

import AppSliders from "@/components/sliders/app_sliders";

const TitrNikod = () => {
  return (
    <div className="relative">
      <BackgroundShapes />

      {/* بخش هِرو */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",
          minHeight: "80vh",
          px: 2,
          py: 8,
          bgcolor: "blue.50",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 1 }}
          className="tracking-tight font-extrabold text-blue-900"
        >
          نرم‌افزار حسابداری و انبارداری آنلاین نیکد
        </Typography>

        <Typography variant="h5" sx={{ mb: 4 }} className="text-blue-700">
          زیبا، ساده و قدرتمند
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: "1.05rem", maxWidth: 650, mb: 6, lineHeight: 2 }}
          className="text-justify  text-gray-700"
        >
          نیکد یک نرم‌افزار انبارداری و حسابداری آنلاین و تحت وب است که بدون
          نیاز به نصب، همیشه و همه‌جا در دسترس شماست. از صدور فاکتور تا مدیریت
          موجودی و گزارش‌های مانده حساب، همه چیز تنها با چند کلیک انجام می‌شود.
          اتصال به بارکدخوان، فیش‌پرینتر و ارائه‌ی گزارش‌های متنوع، نیکد را به
          انتخابی مطمئن برای کسب‌وکارها تبدیل کرده است.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
          sx={{
            borderRadius: 3,
            px: 5,
            py: 1.5,
            fontWeight: 700,
            fontSize: "1rem",
            boxShadow: "0 4px 14px rgba(59,130,246,0.4)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 18px rgba(37,99,235,0.5)",
            },
          }}
          onClick={() => window.open("tel:+989934623142", "_self")}
        >
          تماس برای فعال‌سازی رایگان
        </Button>
      </Box>

      {/* بخش امکانات */}
      <Box className="py-16 px-4 ">
        <Typography
          variant="h4"
          className="text-center font-bold mb-12 text-blue-900"
        >
          امکانات نرم‌افزار
        </Typography>

        <Grid container spacing={2} justifyContent="center" className="mt-3">
          {[
            {
              icon: <Inventory2Icon sx={{ fontSize: 40, color: "#2563EB" }} />,
              title: "مدیریت انبار",
              desc: "ثبت و مدیریت کالاها، موجودی و ورود و خروج کالا با سرعت بالا.",
            },
            {
              icon: <ReceiptLongIcon sx={{ fontSize: 40, color: "#2563EB" }} />,
              title: "صدور فاکتور",
              desc: "ایجاد فاکتور فروش و خرید با قابلیت چاپ فاکتور و ثبت تراکنش درون فاکتور.",
            },
            {
              icon: <BarChartIcon sx={{ fontSize: 40, color: "#2563EB" }} />,
              title: "گزارشات جامع",
              desc: "مانده حساب، فروش، موجودی و عملکرد فروشگاه در یک نگاه.",
            },
            {
              icon: (
                <SupportAgentIcon sx={{ fontSize: 40, color: "#2563EB" }} />
              ),
              title: "پشتیبانی آنلاین",
              desc: "پشتیبانی ۲۴ ساعته و پاسخ به سوالات شما در سریع‌ترین زمان.",
            },
            {
              icon: (
                <RocketLaunchIcon sx={{ fontSize: 40, color: "#2563EB" }} />
              ),
              title: "راه‌اندازی فوق سریع",
              desc: "شروع کار در کمتر از ۵ دقیقه بدون نیاز به تنظیمات پیچیده و آموزش طولانی.",
            },
            {
              icon: <PaletteIcon sx={{ fontSize: 40, color: "#2563EB" }} />,
              title: "رابط کاربری زیبا و ساده",
              desc: "تجربه کاربری لذت‌بخش با طراحی مدرن و استفاده آسان.",
            },
          ].map((myitem, index) => (
            <Grid
              // item
              key={index}
              // xs={12}
              // sm={6}
              // md={4}
              // lg={3}
              sx={{ 
                maxWidth: 300,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Card 
                sx={{ 
                  maxWidth: 300,
                  width: '100%',
                  border: "1px solid",
                  borderColor: "blue.200",
                  p: 2,
                  borderRadius: 2,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  '&:hover': {
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                  }
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    {myitem.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ 
                      mb: 2, 
                      color: "blue.600", 
                      fontWeight: "bold",
                      fontSize: "1.1rem"
                    }}
                  >
                    {myitem.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: "gray.600",
                      lineHeight: 1.6
                    }}
                  >
                    {myitem.desc}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* بخش نمونه داشبورد */}
      <Box className="py-16 px-4  relative">
        <BackgroundShapes />
        <Typography
          variant="h4"
          className="text-center font-bold mb-12 text-blue-900"
        >
          محیط نیکد
        </Typography>

        <Box className="flex justify-center">
          <AppSliders />
        </Box>
      </Box>

      {/* بخش تماس سریع */}
      <Box className="py-16 px-4 text-center">
        <Typography variant="h5" className="font-bold mb-6 text-blue-900">
          آماده‌اید کسب‌وکارتان را دیجیتال کنید؟
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: 3,
            px: 6,
            py: 1.5,
            fontWeight: 700,
            fontSize: "1rem",
            mt: 4,
          }}
          onClick={() => window.open("tel:+989934623142", "_self")}
        >
          تماس و دریافت نسخه رایگان
        </Button>
      </Box>
    </div>
  );
};

export default TitrNikod;