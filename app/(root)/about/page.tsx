"use client";

import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const AboutPage = () => {
  return (
    <Box className="p-8  min-h-screen flex flex-col items-center">
      {/* عنوان */}
      <Typography variant="h3" className="mb-4 text-center text-gray-800 font-bold">
        درباره نیکد
      </Typography>

      {/* توضیح کوتاه */}
      <Typography variant="body1" className="mb-10 max-w-3xl text-center text-gray-600">
        نیکد یک نرم‌افزار پیشرفته برای مدیریت انبار و حسابداری است. هدف ما ساده کردن فرآیندهای روزانه
        کسب‌وکارها و افزایش دقت و سرعت در مدیریت موجودی و تراکنش‌ها است. با نیکد، همه چیز تحت کنترل شماست.
      </Typography>

  
    </Box>
  );
};

export default AboutPage;
